function showForm(panelId) {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("register").classList.add("hidden");
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));

  document.getElementById(panelId).classList.remove("hidden");
  const index = panelId === "login" ? 0 : 1;
  document.querySelectorAll(".tab")[index].classList.add("active");
}

async function login() {
  const email = document.getElementById("loginEmail").value;
  const userName = document.getElementById("loginUserName").value;
  const password = document.getElementById("loginPassword").value;
  console.log(email)
  const res = await fetch("http://localhost:4000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email:email, userName: userName, password: password })
  });
  const data = await res.json();
  alert(data.message);
  if (data.message == "¡Inicio de sesión exitoso!") {
    location.href = "index2.html"
  }
}

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const userName = document.getElementById("registerUserName").value;
  const password = document.getElementById("registerPassword").value;

  const res = await fetch("http://localhost:4000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, userName, password })
  });
  const data = await res.json();
  alert(data.message);
});
