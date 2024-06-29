let numInp = document.querySelector("[type = 'number']");
let txtInp = document.querySelector("[type = 'text']");
let select = document.querySelector("select");
let creatBtn = document.querySelector("[value= 'Create']");
let resBox = document.querySelector(".results");

creatBtn.onclick = function (event)  {
    event.preventDefault();
    resBox.innerHTML = "";
    for (i = 0; i < numInp.value; i++) {
        let element = document.createElement(select.value);
        element.className = "box";
        element.setAttribute("title", "Element");
        element.setAttribute("id", `id-${i + 1}`);
        element.style.display = "inline-block";
        element.style.width = "50px";
        element.style.height = "30px";
        element.style.padding = "5px";
        element.style.margin = "5px";
        element.appendChild(document.createTextNode(txtInp.value));
        resBox.appendChild(element);
    }
};