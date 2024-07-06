let msg = prompt("Print Number From - To", "Example: 5-20");
msg = msg.split("-");

let min = Math.min(msg[0], msg[1]);
let max = Math.max(msg[0], msg[1]);

for (let i = min; i <= max; i++) {
    let temp = document.createElement("div");
    temp.innerHTML = i;
    document.body.appendChild(temp);
}