let div = document.createElement("div");
div.textContent = "10";
document.body.appendChild(div);

let counter = setInterval(function () {
    div.innerHTML -= 1;
    if (div.innerHTML === "0")
        location.href = "https://elzero.org/";
}, 1000)