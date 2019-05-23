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
  background(bg);

  image(house,0,y);
  image(train,x,-250,0,0);

  if(mouseIsPressed) // 마우스 이벤트
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
