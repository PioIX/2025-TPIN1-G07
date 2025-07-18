
const API = "http://localhost:4000";
window.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#ranking tbody");
  try {
    const res = await fetch(`${API}/usuarios`);
    let usuarios = await res.json();
    if (!Array.isArray(usuarios)) {
      tbody.innerHTML = `<tr><td colspan='3'>No hay datos de ranking</td></tr>`;
      return;
    }
    usuarios = usuarios.map(u => ({
      userName: u.userName || "(sin nombre)",
      totalTime: typeof u.totalTime === "number" ? u.totalTime : (parseInt(u.totalTime) || 0)
    }));
    usuarios = usuarios.sort((a, b) => b.totalTime - a.totalTime);
    usuarios.forEach((user, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${user.userName}</td>
        <td>${user.totalTime}</td>
      `;
      tbody.appendChild(tr);
    });
    if (usuarios.length === 0) {
      tbody.innerHTML = `<tr><td colspan='3'>No hay datos de ranking</td></tr>`;
    }
  } catch (err) {
    console.error("Error al cargar el ranking:", err);
    tbody.innerHTML = `<tr><td colspan='3'>Error al cargar datos</td></tr>`;
  }
});
