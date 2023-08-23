const {Square, Circle, Triangle} = require('./shapes');

describe('Square', () => {
    if('renders correctly', () => {
        const shape = new Square();
        var color =('green');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}">`);
    });
});

describe('Circle', () => {
    if('renders correctly', () => {
        const shape = new Circle();
        var color =('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<cirlce cx="50%" cy="50%" r="100" height="100%" width="100%" fill=${this.color}">`);
    });
});

describe('Triangle', () => {
    if('renders correctly', () => {
        const shape = new Triangle();
        var color =('pink');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`);
    });
});