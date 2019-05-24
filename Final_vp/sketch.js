let bg;
let house;
let hx = 0,
  hy = 0;
let line4;
let testBtn; // 버튼 위치 확인을 위해 임시로 넣은 이미지
let houseFlag = 0;

function setup() {
  frameRate(60);
  createCanvas(1200, 800);
  bg = loadImage('background.png');
  house = loadImage('house.png');
  line4 = loadImage('line4.png');
  testBtn = loadImage('testBtn.png');
  tempBtn = createImg('tempBtn.png');
}

function draw() {

  tint(255, 255, 255, 255);
  background(bg);

  image(house, hx, hy);
  image(testBtn, 0, 30); // 버튼 레이아웃 확인을 위해 넣어둔 임시 이미지 / 삭제 필

  if (houseFlag == 1) {
    tint(255, 255, 255, 255 - (hy+5));
    // 하우스 플래그 작동 시 4호선 투명도 조정
    image(line4, 100, 110, 1200 * 0.85, 800 * 0.85);
  } else {
    if (hy != 500) {
      //하단에 위치한 집이 안쪽에 위치해야 4호선 노출
      image(line4, 100, 110, 1200 * 0.85, 800 * 0.85);
    }
  }
  tint(255, 255, 255, 255);
  // houseFlag로 인해 변경된 틴트값 변환


  if (mouseIsPressed) {
    if ((mouseX > 430 && mouseX < 445) && (mouseY > 440 && mouseY < 460)) {
      houseFlag = 1;// 과천 클릭시
    }

  }


  if (houseFlag == 1) {
    hy += 10;
    if (hy == 500) {
      houseFlag = 0;
    }
  }

}
