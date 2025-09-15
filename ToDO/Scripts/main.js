"use strict";

const form = document.getElementById("todoForm")
const input = document.getElementById("task")
const list = document.getElementById("taskList")
const listCompleted = document.getElementById("completedTask")
let taskArray = []


    function addTask(textD){
            const button = document.createElement("button")
            button.textContent = "Done"
        
            const text = document.createElement("span")
            text.textContent = textD;

            const li = document.createElement("li")
            li.append(text)
            li.append(button)
            list.appendChild(li)

            taskArray.push(textD)
            localStorage.setItem("task", JSON.stringify(taskArray))
            
            button.addEventListener("click", function (e){

                console.log("Deleted task " + text.textContent)
                list.remove(li)

            })

            input.value = "";

    }

    if(localStorage.length !== 0){
        const tasks = JSON.parse(localStorage.getItem("task"))
        
        for (let index = 0; index < tasks.length; index++) {
            
            addTask(tasks[index])
            
        }

    }

    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        
        const taskText = input.value.trim();
        if(!taskText) return;

        addTask(taskText)

})