function Pic(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;
  
  this.display = function () {
        imageMode(CENTER);
        image(img, this.x, this.y, 100, 100);
    }

    this.update = function () {
        this.x = this.x + 0.5;
        this.y = this.y + 0.5;
    }
  }