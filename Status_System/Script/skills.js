const skillArray = [{name: "programming", value: 4}];
const form = document.getElementById("skillForm")
const inputName = document.getElementById("skName")
const inputValue = document.getElementById("skValue")
const skillUp = document.getElementById("skillUp")

displaySkills();

form.addEventListener("submit", function(e){
        e.preventDefault()

        if(!inputName && !inputValue) return;
           
        const name = inputName.value.trim();
        const value = inputValue.value.trim();

        if(parseInt(value) !== Number(value)){
            console.log("Moet een nummer waarde zijn")
            return;
        }

        addSkill(name,value)
    })

function addSkill(name, value){
    
    const skill = {name: name, value: value}
    skillArray.push(skill)

    displaySkills()
}

function updateSkill(name, value){
    const index = skillArray.findIndex(skill => skill.name === name)
    if(index === -1){
        console.log("Deze skill bestaat niet")
        return;
    }

    skillArray[index].value += value; 
}

function displaySkills(){
    const skillList = document.getElementById("skillsList")
    skillList.innerHTML = ""

    for (let index = 0; index < skillArray.length; index++) {
        const skillLi = document.createElement("li")
        skillLi.append(skillArray[index].name, " " , skillArray[index].value)
        skillList.appendChild(skillLi)
    }

}