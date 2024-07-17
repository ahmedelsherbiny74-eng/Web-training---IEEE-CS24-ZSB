let Days = document.querySelector(".days .number");
let Hours = document.querySelector(".hours .number");
let Minutes = document.querySelector(".minutes .number");
let Seconds = document.querySelector(".seconds .number");

let mutexDay = new Date(2024, 6, 27, 9);

setInterval(function () {
    let timeNow = Date.now();
    let days = (mutexDay - timeNow) / 1000 / 60 / 60 / 24;

    let fracDays = days - Math.floor(days);

    let hours = Math.floor(fracDays * 24)
    let fracHours = fracDays * 24 - hours;

    let minutes = Math.floor(fracHours * 60);
    let fracMinutes = fracHours * 60 - minutes;

    let seconds = Math.floor(fracMinutes * 60);

    Days.innerHTML = Math.floor(days);
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}, 1000)