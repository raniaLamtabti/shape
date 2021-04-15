class Square extends Shape {
    constructor(color, startX, startY, sideLength) {
        super(color, startX, startY);
        this.sideLength = sideLength;
    }

    area(sideLength) {
        var area = Math.pow(parseInt(sideLength), 2);
        return area;
    }

    perimeter(sideLength) {
        var perimeter = parseInt(sideLength) * 4;
        return perimeter;
    }

    draw(canvas, color, startX, startY, sideLength) {
        var ctx = canvas.getContext("2d");
        ctx.fillRect(startX, startY, sideLength, sideLength);
        ctx.fillStyle = color;
    }
}