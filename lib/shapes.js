// Base class for all shapes
class Shape {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
      }
    
      // Method to add text to any shape SVG
      addText() {
        return `<text x="150" y="150" font-size="30" fill="${this.textColor}" text-anchor="middle" dominant-baseline="central">${this.text}</text>`;
      }
    
      render() {
        return '';
      }
};

// Circle shape class
class Circle extends Shape {
    render() {
        const circleSVG = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
        const textSVG = this.addText();
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${circleSVG}${textSVG}</svg>`;
      }
};

// Triangle shape class
class Triangle extends Shape {
    render() {
        const triangleSVG = `<polygon points="150,20 50,180 250,180" fill="${this.color}" />`;
        const textSVG = this.addText();
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${triangleSVG}${textSVG}</svg>`;
      }
};

// Square shape class
class Square extends Shape {
    render() {
        const squareSVG = `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
        const textSVG = this.addText();
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${squareSVG}${textSVG}</svg>`;
      }
};

// Export
module.exports = { Circle, Triangle, Square };