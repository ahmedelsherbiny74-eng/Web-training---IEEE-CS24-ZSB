let fontFamily = document.querySelector("[name = font-family]");
let color = document.querySelector("[name = color]");
let fontSize =document.querySelector("[name = font-size]")

fontFamily.addEventListener("change", function () {
    window.localStorage.setItem("fontFamily", fontFamily.value);
    document.body.style.fontFamily = fontFamily.value;
});
    
color.addEventListener("change", function () {
    window.localStorage.setItem("color", color.value);
    document.body.style.color = color.value;
});

fontSize.addEventListener("change", () => {
    window.localStorage.setItem("fontSize", fontSize.value);
    document.body.style.fontSize = fontSize.value;
});

if (window.localStorage.length > 0) {
    document.body.style.fontFamily = window.localStorage.getItem("fontFamily");
    document.body.style.color = window.localStorage.getItem("color");
    document.body.style.fontSize = window.localStorage.getItem("fontSize");
    
    fontFamily.value = window.localStorage.getItem("fontFamily");
    color.value = window.localStorage.getItem("color");
    fontSize.value = window.localStorage.getItem("fontSize");
}