let playerArray = [];

function display(players) {

    console.log(players);
    const tableBody = document.getElementById("selected-players");
    tableBody.innerHTML = "";
    for (let i = 0; i < players.length; i++) {

        console.log(playerArray[i]);

        
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${players[i]}</td>
        `;
        tableBody.appendChild(tr);
        
    }
}
function addPlayer(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);

    playerArray.push(playerName);
    // console.log(playerArray);
    // console.log(playerArray.length);
    if(playerArray.length > 5){
        alert("You can't select more than five players");
        return;
    }else{
      
    }

    document.getElementById('total-player').innerText = playerArray.length;
    display(playerArray);
   
}
function disable(x){
    x.disabled = true;
    x.setAttribute("style", "background-color:#659EC7");
}