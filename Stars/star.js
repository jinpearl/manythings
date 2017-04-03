function Star() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    stroke(255, 240, 233);
    line(this.x, this.y, this.x + 10, this.y);
    line(this.x + 5, this.y - 5, this.x + 5, this.y + 5);
  }
}
