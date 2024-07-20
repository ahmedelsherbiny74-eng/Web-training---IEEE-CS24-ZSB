let dataFromJSONFile = new XMLHttpRequest();
dataFromJSONFile.open("GET", "assignment-1.json");
dataFromJSONFile.send();
console.log(dataFromJSONFile);
dataFromJSONFile.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        console.log("Data Loaded");
    }
}