// Import
const { Circle, Triangle, Square } = require('./shapes');

// Group tests by shape class for organization
describe('Shape Classes', () => {
  
  // Tests for the Circle class
  describe('Circle', () => {
    test('renders correctly with specified properties', () => {
      const text = 'ABC';
      const textColor = 'black';
      const color = 'blue';
      const circle = new Circle(color, textColor, text);
      const renderedSVG = circle.render();
      
      // Check for circle shape with correct color
      expect(renderedSVG).toMatch(/<circle.*fill="blue".*\/>/);
      // Check for text with correct color and content
      expect(renderedSVG).toMatch(new RegExp(`fill="${textColor}".*>${text}<\/text>`));
    });
  });

  // Tests for the Triangle class
  describe('Triangle', () => {
    test('renders correctly with specified properties', () => {
      const text = 'XYZ';
      const textColor = '#FF0000'; // Using a hex color code for text color
      const color = 'green';
      const triangle = new Triangle(color, textColor, text);
      const renderedSVG = triangle.render();
      
      // Check for triangle shape with correct color
      expect(renderedSVG).toMatch(/<polygon.*fill="green".*\/>/);
      // Check for text with correct color and content
      expect(renderedSVG).toMatch(new RegExp(`fill="${textColor}".*>${text}<\/text>`));
    });
  });

  // Tests for the Square class
  describe('Square', () => {
    test('renders correctly with specified properties', () => {
      const text = 'Hi';
      const textColor = 'white';
      const color = 'red';
      const square = new Square(color, textColor, text);
      const renderedSVG = square.render();
      
      // Check for square shape with correct color
      expect(renderedSVG).toMatch(/<rect.*fill="red".*\/>/);
      // Check for text with correct color and content
      expect(renderedSVG).toMatch(new RegExp(`fill="${textColor}".*>${text}<\/text>`));
    });
  });
});