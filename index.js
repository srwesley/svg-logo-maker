// Imports the fs, inquirer, Square, Circle, Triangle modules
const fs = require('fs');
const inquirer = require('inquirer');
const { Square, Circle, Triangle } = require("./lib/shapes");

// Defines a SVG constructor class with three methods for rendering and setting the text and shape elements in the SVG string
class SVG {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`;
    }
    setTextEl(text, color) {
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeEl(shape) {
        this.shapeEl = shape.render();
    }
}

// Array of questions using the inquirer libary, specifying the properties of the text, text color, shape color, and pixel image of the
// SVG file
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to 3 characters",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword or a hexadecimal number",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword or a hexadecimal number",
    },
    {
        type: "list",
        name: "pixel-image",
        message: ["Cirlce", "Square", "Triangle"],
    },
];

// Function to write data to file
function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]");

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congrats! You have generated a logo.svg!");
    });
}

async function init() {
    console.log("Staring init");
    
    var svgString = "";
    var svgFile = "logo.svg";

    //Prompts the user for answers
    const answers = await inquirer.prompt(questions);

    // User text
    var userText = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        // This states that 1-3 characters is the valid entry
        userText = answers.text;
    } else {
        // This states that either 0 or 4+ characters are an invalid entry
        console.log("Invalid! Please enter 1-3 characters, no more and no less.");
        return;
    }

    console.log("User text: [" + userText + "]");

    // User font color
    userFontColor = answers["text-color"];
    console.log("User font color: [" + userFontColor + "]");

    // User shape color
    userShapeColor = answers.shape;
    console.log("User shape color: [" + userShapeColor + "]");

    // User shape type
    userShapeType = answers["pixel-image"];
    console.log("User entered shape = [" + userShapeType + "]");

    // User shape
    let UserShape;
    if (userShapeType === "Square" || userShapeType === "square") {
        UserShape = new Square();
        console.log("User selected Square shape");
    } else if (userShapeType === "Circle" || userShapeType === "circle") {
        UserShape = new Circle();
        console.log("User selected Circle shape");
    } else if (userShapeType === "Triangle" || userShapeType === "triangle") {
        UserShape = new Triangle();
        console.log("User selected Triangle shape");
    } else {
        console.log("Invalid shape.");
    }

    UserShape.setColor(userShapeColor);

    // Creates a new SVG instance and adds the text and shape elements to it
    var svg = new Svg();
    svg.setTextEl(userText, userFontColor);
    svg.setShapeEl(UserShape);
    svgString = svg.render();

    // Prints shape to log
    console.log("Displaying shape: \n\n" + svgString);

    // Equivalent of = Document.getElementById("svg_image").innerHTML = svgString;
    
    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svgFile, svgString);
}

init();