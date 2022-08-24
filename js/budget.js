
document.getElementById("calculate-btn").addEventListener("click", function(){
    
    const totalPlayersElement = document.getElementById("total-player");
    const totalPlayersString = totalPlayersElement.innerText;
    const totalPlayers = parseFloat(totalPlayersString);
    
    const perPlayerCostField = document.getElementById("per-player-cost");
    const playerCostString = perPlayerCostField.value ;
    const playerCost = parseFloat(playerCostString);
    perPlayerCostField.value = "";
    
    
    
    
    const totalPlayersCost = totalPlayers * playerCost;
    
    const playerExpenses = document.getElementById("total-player-cost");
    const totalPlayerExpensesString = playerExpenses.innerText ;
    const totalPlayerExpenses = parseFloat(totalPlayerExpensesString);
    
    
    playerExpenses.innerText = totalPlayersCost;
    
})

document.getElementById("calculate-total-btn").addEventListener("click", function(){

    const managerTotalCost = document.getElementById("manager-cost");
    const managerCostInString = managerTotalCost.value;
    const managerCost = parseFloat(managerCostInString);
    managerTotalCost.value = "";

    const coachTotalCost = document.getElementById('coach-cost');
    const coachCostString = coachTotalCost.value;
    const coachCost = parseFloat(coachCostString);
    coachTotalCost.value = "";

    const playerExpenses = document.getElementById("total-player-cost");
    const totalPlayerExpensesString = playerExpenses.innerText ;
    const totalPlayerExpenses = parseFloat(totalPlayerExpensesString);
    console.log(totalPlayerExpenses);

     
    grandTotal = totalPlayerExpenses + managerCost + coachCost ;
    
    const calculateTotalElement = document.getElementById("grand-total");
    const calculateTotalString = calculateTotalElement.innerText ;
    const calculateTotal = parseFloat(calculateTotalString);

    calculateTotalElement.innerText = grandTotal;
    
})


