// Here we define the basic Shape class
class Shape {
    constructor() {
      this.width = 300;
      this.height = 200;
      this.color = "black";
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  // Triangle class extends from Shape
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
  }
  
  // Circle class extends from Shape
  class Circle extends Shape {
    render() {
      return `<circle cx="${this.width / 2}" cy="${this.height / 2}" r="${this.width / 2}" fill="${this.color}" />`;
    }
  }
  
  // Square class extends from Shape
  class Square extends Shape {
    render() {
      return `<rect width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
  }
  
  // Here we are exporting the classes so they can be used in other files
  module.exports = { Triangle, Circle, Square };
  