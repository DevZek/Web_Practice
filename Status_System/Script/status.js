const statArray = [{name: "power", amount: 5}, {name: "stamina", amount: 8}, {name: "intelligience", amount: 7}] 
const statUp = document.getElementById("statUp")

statUp.addEventListener("click", function(e){
    
    const index = Math.floor(Math.random() * 3);
    const randomAmount = Math.floor(Math.random() * 10)

    console.log("Upped " + statArray[index].name + " by " + randomAmount)

    updateStatus(index, randomAmount);
    displayStatus();

})

displayStatus();

function updateStatus(statIndex, amount){
    switch(statIndex){
        case 0:
        statArray[0].amount += amount
        break;
        case 1:
        statArray[1].amount += amount
        break;
        case 2:
        statArray[2].amount += amount
        break;
        default:
        console.log("That is not an available status, try again")
    }
}

function displayStatus(){
    const status = document.getElementById("statusList")
    status.innerHTML = ""
    for (let index = 0; index < statArray.length; index++) {
        const statLi = document.createElement("li")
        statLi.append(statArray[index].name, " ", statArray[index].amount)
        status.appendChild(statLi)
    }
}



