function getData(dataFile) {
    return new Promise((res, rej) => {
        let request = new XMLHttpRequest();
        // console.log(request);
        request.onload = function () {
            if (this.readyState === 4 && this.status === 200)
                res(JSON.parse(this.responseText));
            else
                rej(Error("This isn't the data file!"));
        }
        request.open("GET", dataFile);
        request.send();
    });
}

getData("data.json").then(function (data) {
    data.length = 5;
    // console.log(data);
    return data;
}).then(function (showData) {
    showData.forEach(element => {
        let container = document.createElement("div");

        let title = document.createElement("h3");
        let titleText = document.createTextNode(element.title);
        title.appendChild(titleText);

        let description = document.createElement("p");
        let descriptionText = document.createTextNode(element.description);
        description.appendChild(descriptionText);

        container.appendChild(title);
        container.appendChild(description);
        document.body.appendChild(container);
    });
});