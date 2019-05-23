let bg;
let train;
let house;
let y = -250;
let x = 900;
function setup() {
  createCanvas(900, 500);
  bg = loadImage('background.png');
  train = loadImage('train.png');
  house = loadImage('house.png');
}

function draw() {
  background(bg);// 여기는 배경화면

  image(house,0,y);
  image(train,x,-250,0,0);

  if(mouseIsPressed)
  {
    if(y < 0)
    {
      y+=5;
    }
    if(y >= 0 && x>-50)
    {
      x -=10;
    }
    print(mouseX, mouseY);
  }
}
