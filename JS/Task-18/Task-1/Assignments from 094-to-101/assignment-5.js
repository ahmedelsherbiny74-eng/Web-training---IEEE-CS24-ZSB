document.addEventListener("click", function(e) {
    eleType = e.target.tagName;
    if (eleType !== "BODY" && eleType !== "HTML")
        console.log("This Is", eleType);
});
