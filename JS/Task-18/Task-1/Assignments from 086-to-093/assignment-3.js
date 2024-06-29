let inp = document.querySelector("[name = 'dollar']");
let div = document.getElementsByClassName("result")[0];

inp.oninput = function () {
    div.textContent = `{${inp.value}} USD Dollar = {${(inp.value * 15.6).toFixed(2)}} Egyptian Pound`;
}