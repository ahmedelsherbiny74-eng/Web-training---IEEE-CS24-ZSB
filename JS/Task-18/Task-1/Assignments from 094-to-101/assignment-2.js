let result = document.querySelector(".assign .classes-list div");
let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");

addInput.onblur = function () {
    let addArray = addInput.value.toLowerCase().split(" ").sort();
    for (let i = 0; i < addArray.length; i++) {
        if (addArray[i] !== "") {
            let span = document.createElement("span");
            let spanText = document.createTextNode(addArray[i]);
            span.appendChild(spanText);
            result.appendChild(span);
        }
    }
    let text = document.querySelector("p.result");
    if (result.children.length > 0 && text !== null)
        text.remove();

    addInput.value = "";
};
removeInput.onblur = function () {
    let removeArray = removeInput.value.toLowerCase().split(" ");
    let allSpans = document.querySelectorAll("span");
    
    // To Delete The Classes, If The Same Word
    for (let i = 0; i < allSpans.length; i++) {
        // To Check If The Span Is Existed Or Not
        if (removeArray.indexOf(allSpans[i].textContent) !== -1)
            allSpans[i].remove();
    }
    
    // If The Result is Empty, Doesn't Have Classes
    // Create Element, With Content No Classes To Show
    if (result.children.length === 0)
        createText();
    removeInput.value = "";
};

// Create Element, With Content No Classes To Show
function createText() {
    let text = document.createElement("p");
    text.className = "result";
    text.appendChild(document.createTextNode("No Classes To Show"));
    result.appendChild(text);
}
createText();