const ladder = document.getElementById('ladder');

// Example 50 players
let players = [];
for(let i=1;i<=50;i++){
  players.push({
    name:`Player ${i}`,
    wins: Math.floor(Math.random()*20),
    losses: Math.floor(Math.random()*10),
    streak: 'W'+Math.floor(Math.random()*5)
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
