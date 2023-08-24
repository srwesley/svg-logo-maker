// Defines a constructor class called Shape, which is initializing color and sets the color value
class shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text,
        this.textColor = textColor,
        this.shapeColor = shapeColor;
    };
};

// Defines a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
class Square extends shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shapeColor}"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    };
};

// Defines a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Circle extends shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    };
};

// Defines a Triangle(or Polygon) class that extends Shape and renders an SVG Triangle/Polygon with position, size, and fill color based on the current instance's properties.
class Triangle extends shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        };
    render() {
        return `<svg width="300" height="200" version="1.1"  xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    };
};

// Exports the shapes
module.exports = {Square, Circle, Triangle};