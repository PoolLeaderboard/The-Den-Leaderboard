const ladder = document.getElementById('ladder');

// Example 50 players
let players = [];
for(let i=1;i<=50;i++){
  players.push({
   const sheetURL =
"https://opensheet.elk.sh/1qGYPEr2Z1I15tHtubQ8r0M0rP1uYurYa_RqvEZ98cHw/Sheet1";

const ladder = document.getElementById("ladder");

async function loadPlayers(){

const response = await fetch(sheetURL);
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

if(p.Rank == 1){
row.classList.add("rank1");
}

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
  });
}

// Add empty spots to make 75
for(let i=51;i<=75;i++){
  players.push({name:'—', wins:'—', losses:'—', streak:'—'});
}

// Render ladder
function renderLadder(){
  ladder.innerHTML = `
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Wins</th>
      <th>Losses</th>
      <th>Streak</th>
    </tr>
  `;
  players.forEach((p,index)=>{
    let row = document.createElement('tr');
    if(index===0) row.classList.add('rank1'); // #1
    row.innerHTML = `
      <td>${index+1}${index===0?' 👑':''}</td>
      <td>${p.name}</td>
      <td>${p.wins}</td>
      <td>${p.losses}</td>
      <td>${p.streak}</td>
    `;
    ladder.appendChild(row);
  });
}

renderLadder();
