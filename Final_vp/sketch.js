let bg;
let house;
let hx = 0;
let hy = 0;
let lineAreaX = 30;
let lt = 0;
let houseFlag = 0;
let line = [];
let lineNumBtn = [];
let lineNumBtnFlag = [];

function setup() {
  frameRate(60);
  createCanvas(1200, 800);
  bg = loadImage('background.png');
  house = loadImage('house.png');

  line[3] = loadImage('line4.png');
  line[6] = loadImage('line7.png');


  lineNumBtn[0] = createImg('lineNumBtn/line1Btn.png');
  lineNumBtn[1] = createImg('lineNumBtn/line2Btn.png');
  lineNumBtn[2] = createImg('lineNumBtn/line3Btn.png');
  lineNumBtn[3] = createImg('lineNumBtn/line4Btn.png');
  lineNumBtn[4] = createImg('lineNumBtn/line5Btn.png');
  lineNumBtn[5] = createImg('lineNumBtn/line6Btn.png');
  lineNumBtn[6] = createImg('lineNumBtn/line7Btn.png');
  lineNumBtn[7] = createImg('lineNumBtn/line8Btn.png');
  lineNumBtn[8] = createImg('lineNumBtn/line9Btn.png');
  lineNumBtn[9] = createImg('lineNumBtn/lineBunDangBtn.png');
  lineNumBtn[10] = createImg('lineNumBtn/lineGyeongUi_JungAngBtn.png');
}

function draw() {

  tint(255, 255, 255, 255);
  background(bg);

  image(house, hx, hy);

  for (let i = 0; i < 10; i++) {
    lineNumBtn[i].position(lineAreaX + (i * 150), 25);
    lineNumBtn[i].size(80, 80);
  }

  tint(255, 255, 255, 0);

  lineNumBtn[3].mousePressed(function() {
    lineNumBtnFlag[3] = 1;
    print('btn pressed');

  });

  if (lineNumBtnFlag[3] == 1) {
    print('flag on!');
    if (houseFlag == 1) {
      tint(255, 255, 255, 255 - (hy/1.5));
      // 하우스 플래그 작동 시 4호선 투명도 조정
      image(line[3], 100, 110, 1200 * 0.85, 800 * 0.85);
    } else {
      if (hy != 500) {
        if (lt < 255) lt += 20;
        //하단에 위치한 집이 안쪽에 위치해야 4호선 노출
        tint(255, 255, 255, lt);
        print('draw line!');
        image(line[3], 100, 110, 1200 * 0.85, 800 * 0.85);
      }
    }
  }



  tint(255, 255, 255, 255);
  // houseFlag로 인해 변경된 틴트값 변환


  if (mouseIsPressed) {
    if ((mouseX > 430 && mouseX < 445) && (mouseY > 440 && mouseY < 460)) {
      houseFlag = 1; // 과천 클릭시
    }

  }


  if (houseFlag == 1) {
    hy += 15;
    if (hy == 500) {
      houseFlag = 0;
    }
  }

}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  if (mouseY >= 25 && mouseY <= 105) {

    lineAreaX += event.delta;

    if(lineAreaX < -1000)
    {
      lineAreaX = 10;
    }

  }
  //uncomment to block page scrolling
  //return false;
}
