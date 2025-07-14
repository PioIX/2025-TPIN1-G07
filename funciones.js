// funciones.js

// Todas las consignas: cada array en el orden de tu lista
const consignas = [
  {
    titulo: "AC Milan 2004/05 - Most Matches",
    jugadores: [
      { name: "Dida", flag: "br" },
      { name: "Kaká", flag: "br" },
      { name: "Paolo Maldini", flag: "it" },
      { name: "Cafú", flag: "br" },
      { name: "Gennaro Gattuso", flag: "it" },
      { name: "Clarence Seedorf", flag: "nl" },
      { name: "Andrea Pirlo", flag: "it" },
      { name: "Alessandro Nesta", flag: "it" },
      { name: "Andriy Shevchenko", flag: "ua" },
      { name: "Hernán Crespo", flag: "ar" }
    ]
  },
  {
    titulo: "Argentina 2022 - Most matches",
    jugadores: [
      { name: "Lionel Messi", flag: "ar" },
      { name: "Nicolás Otamendi", flag: "ar" },
      { name: "Emiliano Martínez", flag: "ar" },
      { name: "Rodrigo De Paul", flag: "ar" },
      { name: "Nahuel Molina", flag: "ar" },
      { name: "Enzo Fernández", flag: "ar" },
      { name: "Alexis Mac Allister", flag: "ar" },
      { name: "Cristian Romero", flag: "ar" },
      { name: "Julián Álvarez", flag: "ar" },
      { name: "Marcos Acuña", flag: "ar" }
    ]
  },
  {
    titulo: "Most Ballon d'Or winners",
    jugadores: [
      { name: "Lionel Messi", flag: "ar" },
      { name: "Cristiano Ronaldo", flag: "pt" },
      { name: "Michel Platini", flag: "fr" },
      { name: "Johan Cruyff", flag: "nl" },
      { name: "Marco Van Basten", flag: "nl" },
      { name: "Franz Beckenbauer", flag: "de" },
      { name: "Ronaldo Nazario", flag: "br" },
      { name: "Alfredo Di Stefano", flag: "ar" },
      { name: "Kevin Keegan", flag: "gb" },
      { name: "Karl-Heinz Rummenigge", flag: "de" }
    ]
  },
  {
    titulo: "UCL top scorers",
    jugadores: [
      { name: "Cristiano Ronaldo", flag: "pt" },
      { name: "Lionel Messi", flag: "ar" },
      { name: "Robert Lewandowski", flag: "pl" },
      { name: "Karim Benzema", flag: "fr" },
      { name: "Raúl González", flag: "es" },
      { name: "Thomas Müller", flag: "de" },
      { name: "Ruud Van Nistelrooy", flag: "nl" },
      { name: "Kylian Mbappé", flag: "fr" },
      { name: "Thierry Henry", flag: "fr" },
      { name: "Erling Haaland", flag: "no" }
    ]
  },
  {
    titulo: "UCL top winners",
    jugadores: [
      { name: "Paco Gento", flag: "es" },
      { name: "Dani Carvajal", flag: "es" },
      { name: "Luka Modric", flag: "hr" },
      { name: "Toni Kroos", flag: "de" },
      { name: "Nacho Fernández", flag: "es" },
      { name: "Lucas Vázquez", flag: "es" },
      { name: "Cristiano Ronaldo", flag: "pt" },
      { name: "Paolo Maldini", flag: "it" },
      { name: "Alessandro Costacurta", flag: "it" },
      { name: "Alfredo Di Stefano", flag: "ar" }
    ]
  },
  {
    titulo: "Most expensive signings in history",
    jugadores: [
      { name: "Neymar", flag: "br" },
      { name: "Kylian Mbappé", flag: "fr" },
      { name: "Ousmane Dembélé", flag: "fr" },
      { name: "Philippe Coutinho", flag: "br" },
      { name: "Moisés Caicedo", flag: "ec" },
      { name: "João Félix", flag: "pt" },
      { name: "Declan Rice", flag: "gb" },
      { name: "Enzo Fernández", flag: "ar" },
      { name: "Antoine Griezmann", flag: "fr" },
      { name: "Jack Grealish", flag: "gb" }
    ]
  },
  {
    titulo: "Argentina top scorers in the national team",
    jugadores: [
      { name: "Lionel Messi", flag: "ar" },
      { name: "Gabriel Batistuta", flag: "ar" },
      { name: "Sergio Agüero", flag: "ar" },
      { name: "Hernán Crespo", flag: "ar" },
      { name: "Lautaro Martínez", flag: "ar" },
      { name: "Diego Armando Maradona", flag: "ar" },
      { name: "Gonzalo Higuaín", flag: "ar" },
      { name: "Ángel Di María", flag: "ar" },
      { name: "Carlos Bilardo", flag: "ar" },
      { name: "Daniel Passarella", flag: "ar" }
    ]
  },
  {
    titulo: "Ballon d'Or 2024 ranking",
    jugadores: [
      { name: "Rodri", flag: "es" },
      { name: "Vinicius Jr", flag: "br" },
      { name: "Jude Bellingham", flag: "gb" },
      { name: "Dani Carvajal", flag: "es" },
      { name: "Erling Haaland", flag: "no" },
      { name: "Kylian Mbappé", flag: "fr" },
      { name: "Lautaro Martínez", flag: "ar" },
      { name: "Lamine Yamal", flag: "es" },
      { name: "Toni Kroos", flag: "de" },
      { name: "Harry Kane", flag: "gb" }
    ]
  },
  {
    titulo: "Man City 2020/21 most matches",
    jugadores: [
      { name: "Rodri", flag: "es" },
      { name: "Rúben Dias", flag: "pt" },
      { name: "Phil Foden", flag: "gb" },
      { name: "Raheem Sterling", flag: "gb" },
      { name: "Ederson", flag: "br" },
      { name: "Riyad Mahrez", flag: "dz" },
      { name: "İlkay Gündoğan", flag: "de" },
      { name: "Bernardo Silva", flag: "pt" },
      { name: "João Cancelo", flag: "pt" },
      { name: "Kyle Walker", flag: "gb" }
    ]
  },
  {
    titulo: "LaLiga top scorers 2023/24",
    jugadores: [
      { name: "Artem Dovbyk", flag: "ua" },
      { name: "Alexander Sørloth", flag: "no" },
      { name: "Robert Lewandowski", flag: "pl" },
      { name: "Jude Bellingham", flag: "gb" },
      { name: "Ante Budimir", flag: "hr" },
      { name: "Youssef En-Nesyri", flag: "ma" },
      { name: "Antoine Griezmann", flag: "fr" },
      { name: "Álvaro Morata", flag: "es" },
      { name: "Borja Mayoral", flag: "es" },
      { name: "Vinicius Jr", flag: "br" }
    ]
  },
  {
    titulo: "Barcelona 2016/17 - Most matches",
    jugadores: [
      { name: "Lionel Messi", flag: "ar" },
      { name: "Luis Suarez", flag: "uy" },
      { name: "Ivan Rakitic", flag: "hr" },
      { name: "Sergio Busquets", flag: "es" },
      { name: "Sergi Roberto", flag: "es" },
      { name: "Andre Gomes", flag: "pt" },
      { name: "Marc-Andre Ter Stegen", flag: "de" },
      { name: "Neymar", flag: "br" },
      { name: "Samuel Umtiti", flag: "fr" },
      { name: "Gerard Piqué", flag: "es" }
    ]
  }
];

let currentConsigna = 0;
let revealed = Array(10).fill(false);

const inputElement = document.getElementById("playerInput");
const subtitle = document.querySelector("h3 em");

// Inicializa la tabla con banderas de la consigna actual
window.onload = () => loadConsigna();

// Enviar con Enter
inputElement.addEventListener("keypress", e => {
  if (e.key === "Enter") checkPlayer();
});

function loadConsigna() {
  const panel = consignas[currentConsigna];
  subtitle.textContent = panel.titulo;
  revealed.fill(false);
  inputElement.disabled = false;
  inputElement.value = "";
  panel.jugadores.forEach((p, i) => {
    const cell = document.getElementById(`row${i}`);
    cell.innerHTML = `<img class="flag" src="https://flagcdn.com/${p.flag}.svg">`;
  });
}

function checkPlayer() {
  const input = inputElement.value.trim().toLowerCase();
  const panel = consignas[currentConsigna];
  const idx = panel.jugadores.findIndex(p => p.name.toLowerCase() === input);
  if (idx !== -1 && !revealed[idx]) {
    const cell = document.getElementById(`row${idx}`);
    const p = panel.jugadores[idx];
    cell.innerHTML = `<img class="flag" src="https://flagcdn.com/${p.flag}.svg"> ${p.name}`;
    revealed[idx] = true;
    inputElement.value = "";
    // Si completó todos
    if (revealed.every(v => v)) inputElement.disabled = true;
  }
}

function confirmSurrender() {
  if (!confirm("¿Te quieres rendir?")) return;
  const panel = consignas[currentConsigna];
  panel.jugadores.forEach((p, i) => {
    const cell = document.getElementById(`row${i}`);
    cell.innerHTML = `<img class="flag" src="https://flagcdn.com/${p.flag}.svg"> ${p.name}`;
    revealed[i] = true;
  });
  inputElement.disabled = true;
  // Avanza a la siguiente consigna tras un breve delay
  setTimeout(() => {
    currentConsigna = (currentConsigna + 1) % consignas.length;
    loadConsigna();
  }, 500);
}
