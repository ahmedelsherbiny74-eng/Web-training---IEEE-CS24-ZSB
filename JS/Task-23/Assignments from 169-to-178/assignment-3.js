let dataFromJSONFile = new XMLHttpRequest();
dataFromJSONFile.open("GET", "assignment-1.json");
dataFromJSONFile.send();
dataFromJSONFile.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        mainData.forEach(ele => {
            ele["category"] = "All";
        });
        console.log(mainData);
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
}