function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }
  
  Rectangle.prototype.calculateArea = function() {
    return this.width * this.height;
  };
  
  Rectangle.prototype.calculatePerimeter = function() {
    return 2 * (this.width + this.height);
  };
  
  Rectangle.prototype.displayInfo = function() {
    document.writeln(`Width: ${this.width} <br> Height: ${this.height} <br> Area: ${this.calculateArea()} <br> Perimeter: ${this.calculatePerimeter()}`);
  };

  var width = prompt("Enter the width of the rectangle:");
  var height = prompt("Enter the height of the rectangle:");

  while (isNaN(parseInt(width))) {
    alert("Invalid width. Please enter a number.");
    width = prompt("Enter the width of the rectangle:");
  }
  
  while (isNaN(parseInt(height))) {
    alert("Invalid height. Please enter a number.");
    height = prompt("Enter the height of the rectangle:");
  }
  
  var rect = new Rectangle(parseInt(width), parseInt(height));
  
  rect.displayInfo();