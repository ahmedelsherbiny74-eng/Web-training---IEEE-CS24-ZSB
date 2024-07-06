// The Container Div
let container = document.querySelector(".container");
// The Results Div Which Contains The Tasks
let results = document.querySelector(".container .results");
// The Input Text
let input = document.querySelector("input");
// Add Button
let add = document.querySelector("button");
// Delete Button
let del = document.querySelectorAll("span");

add.addEventListener("click", () => {
    input.focus();
    if (input.value !== "") {
        let task = document.createElement("p");
        task.innerHTML = input.value;

        let del = document.createElement("span");
        del.innerHTML = "x";
        let newDiv = document.createElement("div");

        newDiv.appendChild(task);
        newDiv.appendChild(del);
        results.appendChild(newDiv);
        if (window.localStorage.getItem("Tasks") !== "") {
            window.localStorage.setItem("Tasks", window.localStorage.getItem("Tasks") + " " + input.value);
        } 
        else {
            window.localStorage.setItem("Tasks", input.value);
        }
        input.value = "";

        del.addEventListener("click", () => {
            del.parentElement.remove();
        });  
    }
});

del.forEach(function (ele) {
    ele.addEventListener("click", () => {
        ele.parentElement.remove();
        let tasks = window.localStorage.getItem("Tasks").split(" ");

    });    
});

window.onload = function () {
    input.focus();
    let tasks = window.localStorage.getItem("Tasks").split(" ");
    tasks.forEach(function (ele) {
        let task = document.createElement("p");
        task.innerHTML = ele;
        let del = document.createElement("span");
        del.innerHTML = "x";
        let newDiv = document.createElement("div");

        newDiv.appendChild(task);
        newDiv.appendChild(del);
        results.appendChild(newDiv);

        input.value = "";

        del.addEventListener("click", () => {
            del.parentElement.remove();
            let index = tasks.indexOf(del.parentElement.firstChild.textContent);

            while (index !== -1) {
                tasks.splice(index, 1);
                index = tasks.indexOf(del.parentElement.firstChild.textContent);
            }       
            window.localStorage.setItem("Tasks", tasks);
        });  
    });
    results.firstElementChild.remove();
};