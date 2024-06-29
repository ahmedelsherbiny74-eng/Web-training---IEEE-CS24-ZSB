let one = document.querySelector(".one");
let two = document.querySelector(".two");
let temp = one.textContent;

one.title = one.className;
two.title = two.className;
one.textContent = two.textContent;

two.textContent = `${temp} ${++two.childNodes.length}`;
console.log(one);
console.log(two);