  var stars = [];
  var pics = [];
  var img;
  
function preload (){
  for (var i = 0; i< 4; i++){
  pics[i] = loadImage("images/space" + i + ".png");
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 15; i++) {
    stars[i] = new Star();
  }// ths works
  
  // for (var m = 0; m < 10; m++) {
  //   pics[m] = new Pic();
  // }
}


function mousePressed () {
  var r = floor(random(0, pics.length));
  var b = new Pic (mouseX, mouseY, pics[r]);
  pics.push(b);
}

function keyPressed () {
  if (keyCode === UP_ARROW) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  for (var i = 0; i < stars.length; i++) {
    stars[i].display();
  }
  
  for (var m = 0; m < pics.length; m++){
    pics[m].display();
  //  Pics(); 
  }
  
  image(pics[0],0,0);
}



