fetch("data.json")
    .then(function (data) {
        return data.json();
    })
    .then(function (showData) {
        showData.length = 5;
        // console.log(showData);
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
    })
    .catch(() => Error("This isn't the data file!"));