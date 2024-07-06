let color = document.querySelector("[type = color]");
let time = document.querySelector("[type = time]");
let date = document.querySelector("[type = date]");
let slc = document.querySelector("[name = slc]");

color.addEventListener("change", function () {
    window.sessionStorage.setItem("color", color.value);
});

time.addEventListener("change", function () {
    window.sessionStorage.setItem("time", time.value);
});

date.addEventListener("change", function () {
    window.sessionStorage.setItem("date", date.value);
});

slc.addEventListener("change", function () {
    window.sessionStorage.setItem("slc", slc.value);
});

if(window.sessionStorage.length > 0) {
    color.value = window.sessionStorage.getItem("color");
    time.value = window.sessionStorage.getItem("time");
    date.value = window.sessionStorage.getItem("date");
    slc.value = window.sessionStorage.getItem("slc");
}