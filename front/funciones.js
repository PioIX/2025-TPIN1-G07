const API = "http://localhost:4000";

let consignas = [];
let jugadoresPorConsigna = [];
let jugadores = [];
let currentConsigna = 0;
let currentJugadores = [];
let revealed = Array(10).fill(false);
let totalPoints = 0;
let consignasGanadas = 0;
let rendiciones = 0;

const inputElement = document.getElementById("playerInput");
const subtitle = document.querySelector("h3 em");
const winMessage = document.getElementById("winMessage");

window.addEventListener("DOMContentLoaded", async () => {
  await cargarDatos();
  renderConsigna();
});

inputElement.addEventListener("keypress", e => {
  if (e.key === "Enter") checkPlayer();
});

// Carga datos de backend
async function cargarDatos() {
  try {
    const [resConsignas, resJPC, resJugadores] = await Promise.all([
      fetch(`${API}/consignas`),
      fetch(`${API}/jugadoresPorConsigna`),
      fetch(`${API}/jugadores`)
    ]);

    consignas = await resConsignas.json();
    jugadoresPorConsigna = await resJPC.json();
    jugadores = await resJugadores.json();
  } catch (err) {
    console.error("Error al cargar los datos:", err);
  }
}

// Limpia nombres de filas
function limpiarTabla() {
  for (let i = 0; i < 10; i++) {
    document.getElementById(`row${i}`).textContent = "";
    const leftCell = document.querySelector(
      `#playerTable tr:nth-child(${i + 1}) td:first-child`
    );
    leftCell.textContent = `${i + 1}.`;
  }
}

// Muestra la consigna actual
function renderConsigna() {
  const consigna = consignas[currentConsigna];
  subtitle.textContent = consigna.categoria;
  revealed = Array(10).fill(false);

  // Obtengo jugadores ordenados
  const jpc = jugadoresPorConsigna
    .filter(j => j.idConsigna === consigna.idConsigna)
    .sort((a, b) => a.posicionTablaJugador - b.posicionTablaJugador);

  currentJugadores = jpc.map(j =>
    jugadores.find(x => x.idJugador === j.idJugador)
  );

  // Limpia y coloca pista de país/bandera
  for (let i = 0; i < 10; i++) {
    document.getElementById(`row${i}`).textContent = "";
    const pista = currentJugadores[i]
      ? ` ${getFlagEmoji(currentJugadores[i].pais)}`
      : "";
    const leftCell = document.querySelector(
      `#playerTable tr:nth-child(${i + 1}) td:first-child`
    );
    leftCell.textContent = `${i + 1}.${pista}`;
  }
}

// Compara y revela jugador
function checkPlayer() {
  const input = normalize(inputElement.value);
  const consigna = consignas[currentConsigna];

  const jpc = jugadoresPorConsigna
    .filter(j => j.idConsigna === consigna.idConsigna)
    .sort((a, b) => a.posicionTablaJugador - b.posicionTablaJugador);

  for (let i = 0; i < jpc.length; i++) {
    const jugador = jugadores.find(j => j.idJugador === jpc[i].idJugador);
    if (!jugador || revealed[i]) continue;

    if (normalize(jugador.nombreCompleto) === input) {
      revealed[i] = true;
      totalPoints += 10;
      document.getElementById(`row${i}`).textContent =
        `${jugador.nombreCompleto} (${jugador.pais})`;
      inputElement.value = "";

      if (revealed.every(v => v)) {
        consignasGanadas++;
        winMessage.textContent = "¡GANASTE!";
        setTimeout(() => {
          winMessage.textContent = "";
          avanzarConsigna();
        }, 3000);
      }
      return;
    }
  }
}

// Rendirse: limpia y muestra respuestas
function confirmSurrender() {
  if (!confirm("¿Rendirse?")) return;
  rendiciones++;
  limpiarTabla();
  currentJugadores.forEach((j, i) => {
    document.getElementById(`row${i}`).textContent =
      `${j.nombreCompleto} (${j.pais})`;
  });
  revealed.fill(true);
  setTimeout(avanzarConsigna, 5000);
}

// Avanza o termina juego
function avanzarConsigna() {
  currentConsigna++;
  if (currentConsigna >= consignas.length) {
    guardarPuntajeYSalir();
  } else {
    limpiarTabla();
    renderConsigna();
  }
}

// Guarda puntaje y redirige
function guardarPuntajeYSalir() {
  // Calcula el puntaje final: suma 100 por cada consigna ganada, resta 10 por cada rendición, suma los puntos de aciertos individuales
  const userName = sessionStorage.getItem("userName") || localStorage.getItem("userName");
  const puntajeFinal = totalPoints + (consignasGanadas * 100) - (rendiciones * 10);
  localStorage.setItem("finalUserName", userName);
  localStorage.setItem("finalPoints", puntajeFinal);
  console.log("Puntaje a enviar al backend:", puntajeFinal);
  if (userName) {
    // Obtener los datos del usuario actual de localStorage/sessionStorage
    const email = localStorage.getItem("email") || sessionStorage.getItem("email") || "";
    const password = localStorage.getItem("password") || sessionStorage.getItem("password") || "";
    const datos = { userName, email, password, totalTime: puntajeFinal };
    console.log("Datos enviados al backend:", datos);
    fetch(`http://localhost:4000/usuarios/${encodeURIComponent(userName)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    })
      .then(response => {
        window.location.href = "puntaje.html";
      })
      .catch(err => {
        console.error("Error al actualizar puntaje:", err);
        window.location.href = "puntaje.html";
      });
  } else {
    window.location.href = "puntaje.html";
  }
}

// Normalizar tildes y espacios
function normalize(str) {
  return str.normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

// Mapa de banderas
function getFlagEmoji(pais) {
  const flags = {
    Brasil: "🇧🇷",
    Argentina: "🇦🇷",
    Italia: "🇮🇹",
    "Países Bajos": "🇳🇱",
    Ucrania: "🇺🇦",
    Alemania: "🇩🇪",
    Francia: "🇫🇷"
  };
  return flags[pais] || pais;
}



