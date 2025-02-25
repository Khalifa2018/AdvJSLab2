function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.calculateArea = function () {
  return this.width * this.height;
};
Rectangle.prototype.calculatePerimeter = function () {
  return 2 * (this.width + this.height);
};
Rectangle.prototype.displayInfo = function () {
  console.log(
    `The rectangle width is ${this.width} and height is ${
      this.height
    } and area is ${this.calculateArea()} and perimeter is ${this.calculatePerimeter()}`
  );
};
