const players = [
  { name: "Dida", flag: "br" },
  { name: "Cafu", flag: "br" },
  { name: "Maldini", flag: "it" },
  { name: "Kaka", flag: "br" },
  { name: "Gattuso", flag: "it" },
  { name: "Seedorf", flag: "nl" },
  { name: "Nesta", flag: "it" },
  { name: "Pirlo", flag: "it" },
  { name: "Shevchenko", flag: "ua" },
  { name: "Crespo", flag: "ar" }
];

let currentIndex = 0;

window.onload = () => {
  players.forEach((player, i) => {
    const row = document.getElementById(`row${i}`);
    row.innerHTML = `<img class='flag' src='https://flagcdn.com/${player.flag}.svg'>`;
  });
};

const inputElement = document.getElementById("playerInput");
inputElement.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkPlayer();
  }
});

function checkPlayer() {
  const input = inputElement.value.trim();
  if (input.toLowerCase() === players[currentIndex].name.toLowerCase()) {
    const row = document.getElementById(`row${currentIndex}`);
    row.innerHTML = `<img class='flag' src='https://flagcdn.com/${players[currentIndex].flag}.svg'> ${players[currentIndex].name}`;
    currentIndex++;
    inputElement.value = "";
  }
}

function confirmSurrender() {
  const confirmExit = confirm("Do you want to surrender?");
  if (confirmExit) {
    for (let i = currentIndex; i < players.length; i++) {
      const row = document.getElementById(`row${i}`);
      row.innerHTML = `<img class='flag' src='https://flagcdn.com/${players[i].flag}.svg'> ${players[i].name}`;
    }
    inputElement.disabled = true;
  }
}
