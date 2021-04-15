class Circle extends Shape {
    constructor(color, startX, startY, radius) {
        super(color, startX, startY);
        this.radius = radius;
    }

    area(radius) {
        var area = 2 * Math.PI * parseInt(radius);
        return area;
    }

    perimeter(radius) {
        var area = Math.PI * Math.pow(parseInt(radius), 2);
        return area;
    }

    draw(canvas, color, startX, startY, radius) {
        var ctx = canvas.getContext("2d");
        ctx.fillRect(startX, startY, sideLength, sideLength);
        ctx.fillStyle = color;
    }
}