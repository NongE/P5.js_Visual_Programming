let bg;
let i =0;

function setup() {

  createCanvas(800, 800);
  bg = loadImage('bg.jpg');

}

function draw() {
  frameRate(20);
  background(bg);
  strokeWeight(0);


  fill(55,0,0,150);
  ellipse(398, 277, i+40, i+40);
  fill(230,0,0,80);
  ellipse(398, 277, i*2, i*2);
  fill(150,0,0,30);
  ellipse(398, 277, i+10, i+10);



  fill(0,150,0,150);
  ellipse(536, 277, i+40, i+40);
  fill(0,230,0,80);
  ellipse(536, 277, i*2, i*2);
  fill(0,55,0,30);
  ellipse(536, 277, i+10, i+10);

  if(i<20)
  i++;
  else i = 0;

  if (mouseIsPressed) {

    print(mouseX, mouseY);
  }
}
