const sheetURL = "https://opensheet.elk.sh/1qGYPEr2Z1I15tHtubQ8r0M0rP1uYurYa_RqvEZ98cHw/Sheet1";

const ladder = document.getElementById("ladder");

async function loadPlayers() {
  const response = await fetch( "https://opensheet.elk.sh/1qGYPEr2Z1I15tHtubQ8r0M0rP1uYurYa_RqvEZ98cHw/Sheet1");
  const players = await response.json();

  ladder.innerHTML = `
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Wins</th>
      <th>Losses</th>
      <th>Streak</th>
    </tr>
  `;

  players.forEach(p => {
    let row = document.createElement("tr");
    if (p.Rank == 1) row.classList.add("rank1");
    row.innerHTML = `
      <td>${p.Rank} ${p.Rank == 1 ? "👑" : ""}</td>
      <td>${p.Player}</td>
      <td>${p.Wins}</td>
      <td>${p.Losses}</td>
      <td>${p.Streak}</td>
    `;
    ladder.appendChild(row);
  });
}

loadPlayers();
