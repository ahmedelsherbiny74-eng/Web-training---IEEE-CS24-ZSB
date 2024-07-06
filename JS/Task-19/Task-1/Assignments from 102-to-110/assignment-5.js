let div = document.createElement("div");
div.textContent = "10";
document.body.appendChild(div);

let counter = setInterval(function () {
    div.innerHTML -= 1;
    if (div.innerHTML === "5")
        window.open("https://elzero.org/",
            "_blank",
            "width = 400, height = 400, right = 200, top = 10");
    
    if (div.innerHTML === "0")
        clearInterval(counter);
}, 1000)