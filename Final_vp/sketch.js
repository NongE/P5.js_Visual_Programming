let bg;
let train;
let house;
let y = 0;
let x = 1500;
function setup() {
  bg = createCanvas(1200, 800);
  bg = createImg('background.png');
  train = createImg('train_4.png');
  house = createImg('house.png');

}

function draw() {// 드로우
  
  background(bg);// 여기는 배경화면

  // 이미지 위치조정
  bg.position(0,0);
  house.position(0,y);
  train.position(x,-300);

  image(train,x,-250,0,0);
  //  이건 기차위치
  if(mouseIsPressed) // 마우스 이벤트
  {
    if(y < -500)
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
