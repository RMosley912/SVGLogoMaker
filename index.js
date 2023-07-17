
// This section is for importing the necessary modules
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// These are our prompt questions that we'll ask the user
const prompts = [
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape',
    choices: ['Triangle', 'Circle', 'Square'],
  },
  
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the color for the shape (color code or hexadecimal)',
  },
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three text characters to display on the shape',
    validate: function(value) {
      if (value.length <= 3) return true;
      return 'Please enter up to three characters.';
    }
  },
  
  {
      type: 'input',
      name: 'textColor',
      message: 'Enter the color for the characters (color code or hexadecimal)',
  }
];

inquirer.prompt(prompts).then(answers => {
  let shape;

  // This part creates the shape based on the user's input
  switch(answers.shape) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
  }

  shape.setColor(answers.shapeColor);

  // Here we set the position for the text
  const textX = shape.width / 2;
  const textY = shape.height / 2;

  // We're preparing the SVG data here
  const svgData = `
    <svg width="${shape.width}" height="${shape.height}" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="${textX}" y="${textY}" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle">${answers.text}</text>
    </svg>
  `;
  
  // Writing SVG data to a file
  fs.writeFile('logo.svg', svgData, (err) => {
    if (err) throw err;
    console.log('The logo has been saved!');
  });
});
