let div = document.createElement("div");
let h = document.createElement("h2");
let dsc = document.createElement("p");
let btn = document.createElement("button")

h.textContent = "Welcome";
dsc.textContent = "Welcome To Elzero Web School";
btn.textContent = "x";

div.appendChild(h);
div.appendChild(dsc);
div.appendChild(btn);

setTimeout(function () {
    document.body.appendChild(div);
}, 5000)

btn.addEventListener("click", function () {
    btn.parentElement.remove();
})