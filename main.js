var shapeType = document.querySelector("#shapeType");

var startX = document.querySelector("#startX");
var startY = document.querySelector("#startY");

var color = document.querySelector("#color");

var sideLengthDiv = document.querySelector("#sideLengthDiv");
var radiusDiv = document.querySelector("#radiusDiv");

var sideLength = document.querySelector("#sideLengthDiv #sideLength");
var radius = document.querySelector("#radius");

var confirm = document.querySelector("#confirm");

var areaDiv = document.querySelector("#areaDiv");
var perimeterDiv = document.querySelector("#perimeterDiv");

var area = document.querySelector("#area");
var perimeter = document.querySelector("#perimeter");

var canvas = document.querySelector("#canvas");

shapeType.addEventListener("change", function(event) {
    if (shapeType.value == 1) {
        sideLengthDiv.style.display = "inline";
        radiusDiv.style.display = "none";
    } else {
        sideLengthDiv.style.display = "none";
        radiusDiv.style.display = "inline";
    }
});

confirm.addEventListener("click", function(event) {
    event.preventDefault();
    if (shapeType.value == 1) {
        let square = new Square(color, parseInt(startX.value), parseInt(startY.value), parseInt(sideLength.value));
        var areaResult = square.area(parseInt(sideLength.value));
        var perimeterResult = square.perimeter(parseInt(sideLength.value));
        areaDiv.style.display = "inline";
        perimeterDiv.style.display = "inline";
        area.value = areaResult;
        perimeter.value = perimeterResult;
        square.draw(canvas, color, parseInt(startX.value), parseInt(startY.value), parseInt(sideLength.value));
    } else {
        let circle = new Circle(color, parseInt(startX.value), parseInt(startY.value), parseInt(radius.value));
        var areaResult = circle.area(parseInt(radius.value));
        var perimeterResult = circle.perimeter(parseInt(radius.value));
        areaDiv.style.display = "inline";
        perimeterDiv.style.display = "inline";
        area.value = areaResult;
        perimeter.value = perimeterResult;
    }
});