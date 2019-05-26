let bg;                   // 배경 변수
let house;                // 집 변수
let bridge;               // 다리 변수
let train;                // 기차 이미지

let hy = 555;             // 집 이랑 다리 이동을 위한 변수 y값
let trainSpeed=0;         // 기차 들어오는 속도
let lineAreaX = 30;       // 호선 버튼 스크롤 x 값
let lineTintCount = 0;    // 호선 이미지 투명도
let houseDownFlag = 0;    // 집 이미지 관련 불 변수
let bridgeUpFlag = 0;     // 다리 이미지 관련 불 변수

let line = [];            // 노선도 배열
let lineNumBtn = [];      // 호선 버튼 배열
let lineNumBtnFlag = [];  // 호선 선택 여부 버튼

function setup() {

  createCanvas(1200, 800);                                  // 캔버스 크기 설정
  bg = loadImage('background.png');                       // 배경 이미지 로드
  house = loadImage('house_2.png');                         // 집 이미지 로드
  bridge = loadImage('bridge.png');                         // 다리 이미지 로드
  train = loadImage('train_2.png');                         // 기차 이미지 로드
  line[3] = loadImage('line4_2.png');                       // 4호선 이미지 로드
  line[6] = loadImage('line7_2.png');                       // 7호선 이미지 로드

  lineNumBtn[0] = createImg('lineNumBtn/line1Btn.png');     // 호선 버튼 로드
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
  background(bg);                                           // 배경 설정
  image(house,0, hy);                                       // 집 출력

  for (let i = 0; i < 10; i++) {                            // 버튼 이미지 출력
    lineNumBtn[i].position(lineAreaX + (i * 150), 0);
    lineNumBtn[i].size(80, 80);
  }

 // 3호선 관련
  lineNumBtn[3].mousePressed(function() {
    hy = 555;                                             // 집이랑 다리 y값 초기화
    trainSpeed = 0;                                       // 기차 위치 초기화
    lineTintCount = 0;                                    // 노선도 투명도 초기화
    lineNumBtnFlag[3] = 1;                                // 4호선 불 변수 참값으로 변경
    lineNumBtnFlag[6] = 0;                                // 7호선 변수 참값으로 변경
  });

  if (lineNumBtnFlag[3] == 1) {                           //
    if (houseDownFlag == 1) {
      tint(255, 255 - (hy / 3));
      // 하우스 플래그 작동 시 4호선 투명도 조정
      image(line[3], 100, 110, 1200 * 0.85, 800 * 0.85);
    } else {
      if (hy == 555) {
        if (lineTintCount < 255) lineTintCount += 20;
        //하단에 위치한 집이 안쪽에 위치해야 4호선 노출
        tint(255, 255, 255, lineTintCount);
        image(line[3], 100, 110, 1200 * 0.85, 800 * 0.85);
      }
    }
  }


 // 7호선 관련
  lineNumBtn[6].mousePressed(function() {
    hy = 555;
    trainSpeed = 0;
    lineTintCount = 0;
    lineNumBtnFlag[3] = 0;
    lineNumBtnFlag[6] = 1;
  });

  if (lineNumBtnFlag[6] == 1) {
    if (houseDownFlag == 1) {
      tint(255, 255 - (hy / 3));
      // 하우스 플래그 작동 시 4호선 투명도 조정
      image(line[6], 100, 110, 1200 * 0.85, 800 * 0.85);
    } else {
      if (hy == 555) {
        if (lineTintCount < 255) lineTintCount += 20;
        //하단에 위치한 집이 안쪽에 위치해야 4호선 노출
        tint(255, lineTintCount);
        image(line[6], 100, 110, 1200 * 0.85, 800 * 0.85);
      }
    }
  }
  //print(hy);
  tint(255, 255);
  // houseDownFlag로 인해 변경된 틴트값 변환

  if (mouseIsPressed) {

    if ((mouseX > 420 && mouseX < 445) && (mouseY > 440 && mouseY < 460)) {
      houseDownFlag = 1; // 과천 클릭시
      bridgeUpFlag = 1;
    }


  }

  if (bridgeUpFlag == 1) {

    image(bridge, 0, 1950 - hy);
    image(train, 1500 - trainSpeed, 560);

  }

  if (houseDownFlag == 1) {
    trainSpeed+=38;
    hy += 25;
    if (hy >= 1500) {
      houseDownFlag = 0;
    }
  }
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  if ((mouseY >= 0 && mouseY <= 80)) {

     lineAreaX += event.delta;
    if (lineAreaX > 30) {
      lineAreaX = 30;
    }

  }
  //uncomment to block page scrolling
  //return false;
}
