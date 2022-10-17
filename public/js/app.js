"use strict";
var div = document.querySelector("#div1");
//Fetch data from server using getFruits() method
function getFruits() {
    fetch("http://localhost:3000/fruits").then(function (res) { return (res = res.json()); })
        .then(function (res) {
        transform(res);
    });
}
//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type
function transform(fruits) {
    fruits.forEach(function (element) {
        var transformedFruit = {
            id: element.id,
            name: element.name,
            price: element.price,
            image: element.image,
            unit: element.unit,
        };
        showFruit(transformedFruit);
    });
}
//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(element) {
    var divs = document.createElement("div");
    divs.classList.add('col-lg-2');
    divs.classList.add('card');
    divs.classList.add('m-2');
    div === null || div === void 0 ? void 0 : div.appendChild(divs);
    var imgs = document.createElement("img");
    imgs.setAttribute("src", element.image);
    imgs.setAttribute("width", "120px");
    imgs.setAttribute("height", "100px");
    imgs.style.paddingLeft = "30px";
    divs.appendChild(imgs);
    var h3 = document.createElement("h3");
    var h3text = document.createTextNode(element.name);
    h3.appendChild(h3text);
    h3.style.textAlign = "center";
    h3.style.color = "blue";
    h3.style.fontFamily = "Times New Roman";
    divs.appendChild(h3);
    var span = document.createElement("span");
    span.style.textAlign = "center";
    span.style.fontFamily = "Times New Roman";
    span.style.color = "rgb(122, 57, 25)";
    var spanText = document.createTextNode("Price: $" + element.price + "per " + element.unit);
    span.appendChild(spanText);
    divs.appendChild(span);
}
//Call getFruits() method globally
getFruits();
