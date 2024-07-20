let dataFromJSONFile = new XMLHttpRequest();
dataFromJSONFile.open("GET", "assignment-1.json");
dataFromJSONFile.send();
dataFromJSONFile.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        let data = document.createElement("div");
        data.id = "data";
        mainData.forEach(ele => {
            let div = document.createElement("div");
            ele.category = "All";
            let head = document.createElement("h2");
            head.textContent = `${ele.label}`;
            let content = document.createElement("p");
            content.textContent = `${ele.content}`;
            let author = document.createElement("p");
            author.textContent = `${ele.name}`;
            let category = document.createElement("p");
            category.textContent = `${ele.category}`;
            div.appendChild(head);
            div.appendChild(content);
            div.appendChild(author);
            div.appendChild(category);
            data.appendChild(div);
        });
        document.body.appendChild(data);
        console.log(mainData);
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);

    }
}