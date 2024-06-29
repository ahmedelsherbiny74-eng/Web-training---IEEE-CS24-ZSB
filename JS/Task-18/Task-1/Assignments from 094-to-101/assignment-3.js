let p = document.querySelector("p");
p.remove();

let element = document.querySelector(".our-element");

let before = document.createElement("div");
before.className = "start";
before.setAttribute("title", "Start Element")
before.setAttribute("data-value", "Start");
before.textContent = "Start";
element.before(before);

let after = document.createElement("div");
after.className = "end";
after.setAttribute("title", "End Element")
after.setAttribute("data-value", "End");
after.textContent = "End";
element.after(after);