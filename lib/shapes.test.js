const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {

  test('Should generate a blue triangle object and render the SVG at a manageable size', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toBe('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });

  test('Should create a Circle object and render the SVG', () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="150" fill="red" />');
  });

  test('Should create a green Square SVG and render a it at 300 by 200 pixels', () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toBe('<rect width="300" height="200" fill="green" />');
  });

  test('Should set the color of the square to yellow', () => {
    const shape = new Square(); // Create an instance of the Shape class
    shape.setColor('yellow'); // Set the color of the shape
    expect(shape.color).toBe('yellow'); // Expect the color to be 'yellow'
  });
});