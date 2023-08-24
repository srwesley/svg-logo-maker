// Imports the fs, inquirer, Square, Circle, Triangle modules
const fs = require("fs");
const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./lib/shapes");

// The array for the questions
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters",

        // This just validates the letter response is not more than 3 characters long and sends a message if it is longer
        validate: (response) => {
            if (response.length > 3) {
                console.log("\n Text must be 3 characters or less! Try again");
                return;
            }
            return true;
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color keyword or a hexadecimal number for the text",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword or a hexadecimal number for the shape"
    },
    {
        type: "list",
        name: "shapeType",
        message: "Please select the shape of the logo",
        choices: ["Square", "Circle", "Triangle"],
    },
];

// This prompts the user for answers and takes into account what is entered
inquirer.prompt(questions)
    .then((response) => {
        const text = response.text;
        const textColor = response.textColor;
        const shapeColor = response.shapeColor;
        const shapeType = response.shapeType;

        generateShapes(text, textColor, shapeColor, shapeType);
    })
    .catch((err) => console.log(err));

// This is the function that takes the above answers and generates the svg logos
function generateShapes(text, textColor, shapeColor, shapeType) {
    if (shapeType === "Square") {
        const square = new Square(text, textColor, shapeColor);
        return fs.writeFile("logo.svg", square.render(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg!");
            }
        });
    }

    if (shapeType === "Circle") {
        const circle = new Circle(text, textColor, shapeColor);
        return fs.writeFile("logo.svg", circle.render(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg!");
            }
        });
    }

    if (shapeType === "Triangle") {
        const triangle = new Triangle (text, textColor, shapeColor);
        return fs.writeFile("logo.svg", triangle.render(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg!");
            }
        });
    }
 }