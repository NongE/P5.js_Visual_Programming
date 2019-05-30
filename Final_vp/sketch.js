let bg; // 배경 변수
let house; // 집 변수
let bridge; // 다리 변수
let train; // 기차 변수
let moon; // 달 변수
let total_people = 7;
let div_total_people = 0;
let text;
let star = [];

let house_position_y = 470; //집 초기 좌표
let bridge_position_y = 1000; // 다리 초기 좌표
let train_position_x = 1200; // 기차 초기 좌표
let moon_position_y = 800;

let lineAreaX = 30; // 호선 버튼 스크롤 x 값
let lineTintCount = 0; // 호선 이미지 투명도

let houseDownFlag = 0; // 집 이미지 관련 불 변수
let bridgeUpFlag = 0; // 다리 이미지 관련 불 변수
let moon_fadein_Flag = 0; // 다리 이미지 관련 불 변수
let star_fadein_Flag = 0; // 별 이미지 관련 불 변수
let station_Click_Flag = 0; // 호선을 클릭 했을 때 한번만 값 초기화 해주기 위한 변수

let line = []; // 노선도 배열
let lineNumBtn = []; // 호선 버튼 배열
let lineNumBtnFlag = []; // 호선 선택 여부 버튼

let index = 0;

//let lineComboBox;

function setup() {
  createCanvas(1280, 720); // 캔버스 크기 설정

/*
   lineComboBox = createSelect();
   lineComboBox.size(100,60);
   lineComboBox.style('background','#ffffff55');
   lineComboBox.style('border-color','#ffffff');
   lineComboBox.style('font-size','20px');
   lineComboBox.style('align','center');
   lineComboBox.style('color','#000000');
   lineComboBox.style('font-weight','bold');
   lineComboBox.position(100, 100);
   lineComboBox.option('호선');
   lineComboBox.option('1호선');
   lineComboBox.option('2호선');
   //sel.changed(mySelectEvent);
*/

  bg = loadImage('background.jpg'); // 배경 이미지 로드
  house = loadImage('house_3.png'); // 집 이미지 로드
  bridge = loadImage('bridge.png'); // 다리 이미지 로드
  train = loadImage('train.png'); // 기차 이미지 로드
  moon = loadImage('moon.png');

  line[0] = loadImage('ready_img.png');
  line[1] = loadImage('ready_img.png');
  line[2] = loadImage('ready_img.png');
  line[3] = loadImage('line4.png'); // 4호선 이미지 로드
  line[4] = loadImage('ready_img.png');
  line[5] = loadImage('ready_img.png'); // 7호선 이미지 로드
  line[6] = loadImage('line7.png'); // 7호선 이미지 로드
  line[7] = loadImage('ready_img.png'); // 7호선 이미지 로드
  line[8] = loadImage('ready_img.png'); // 7호선 이미지 로드
  line[9] = loadImage('ready_img.png'); // 7호선 이미지 로드

  lineNumBtn[0] = createImg('lineNumBtn/line1Btn.png'); // 호선 버튼 로드
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

  star[0] = createImg('stars/star_1.png');
  star[1] = createImg('stars/star_2.png');
  star[2] = createImg('stars/star_1.png');
  star[3] = createImg('stars/star_2.png');
  star[4] = createImg('stars/star_1.png');
  star[5] = createImg('stars/star_2.png');
  star[6] = createImg('stars/star_1.png');
  star[7] = createImg('stars/star_2.png');
  star[8] = createImg('stars/star_1.png');
  star[9] = createImg('stars/star_2.png');


}

function draw() {
  background(bg); // 배경 설정

  image(house, 0, house_position_y); // 집 출력

  if (mouseIsPressed) {
    print(mouseX, mouseY);
  }

  for (let i = 0; i < 10; i++) { // 버튼 이미지 출력
    lineNumBtn[i].position(lineAreaX + (i * 150), 0);
    lineNumBtn[i].size(80, 80);
  }

  for (let i = 0; i < 10; i++) { // 호선의 갯수 만큼 포문 돈다. ex) 1호선 ~ 분당선
    lineNumBtn[i].mousePressed(function() { // 해당 호선 버튼 클릭시
      frameRate(60);

      if (star_fadein_Flag == 1) {
        for (let i = 0; i < 10; i++) {
          print('hide star');
          star[i].hide();
          text.hide();
        }
      }
      house_position_y = 470; // 집 위치 초기화
      bridge_position_y = 1000; // 다리 위치 초기화
      moon_position_y = 800;
      train_position_x = 1200; // 기차 위치 초기화

      star_fadein_Flag = 0;
      moon_fadein_Flag = 0;
      bridgeUpFlag = 0; // 기차 불변수 초기화
      lineTintCount = 0; // 노선도 투명도 초기화

      for (let j = 0; j < 10; j++) // 호선 갯수 만큼 포문 돈다.
        lineNumBtnFlag[j] = 0; // 일단 모든 호선 Flag값 false로 초기화 하고

      lineNumBtnFlag[i] = 1; // 클릭한 호선만 true로 변환
    });

    if (lineNumBtnFlag[i] == 1) { // 해당 호선 버튼을 클릭 했을 경우
      if (houseDownFlag == 1) { // 만약에 houseDownFlag값이 1일 경우
        tint(255, 255 - (house_position_y / 3)); // 하우스 플래그 작동 시 노선도 투명도 조정 어둡게
        image(line[i], 130, 90); // 노선도 이미지 출력
      } else {
        if (house_position_y == 470) { // hy값이 470일 경우
          if (lineTintCount < 255) // 노선도 점점 밝게 해줌.
            lineTintCount += 20;

          tint(255, 255, 255, lineTintCount); // 노선도 점점 밝게 해줌.
          image(line[i], 130, 90); // 노선도 이미지 출력
        }
      }
    }
  }

  tint(255, 255); // houseDownFlag로 인해 변경된 틴트값 변환

  if (houseDownFlag == 0 && mouseIsPressed) { // 기차가 들어오기 전 이면서 마우스 클릭했을 경우(아직 호선 선택 이전)
    if (lineNumBtnFlag[3] == 1) { // 4호선 버튼을 선택 했고
      if ((mouseX > 475 && mouseX < 490) && (mouseY > 335 && mouseY < 350)) // 과천 클릭 시
        station_Click_Flag = 1; // 역을 클릭했다는 정보 관련 변수 참으로 변환
    } else if (lineNumBtnFlag[6] == 1) { // 7호선 버튼을 선택 했고
    }

    if (station_Click_Flag == 1) { // 역을 선택 했으니 이제 집 이미지 없애고 기차 들어오게 해야하니 그걸 처리해주는 부분
      houseDownFlag = 1; //houseDownFlag 값 참으로 변환 집 이미지 없애야 하므로
      bridgeUpFlag = 1; // 다리 이미지 참으로 변환
      station_Click_Flag = 0; // 값 한번 초기화 했으니 다시 station_Click_Flag false로
    }
  }

  if (moon_fadein_Flag == 1) {
    if (moon_position_y >= 90)
      moon_position_y -= 45;

    else {
      star_fadein_Flag = 1;
    }

    image(moon, 1000 - moon_position_y * 1.4, moon_position_y);
  }

  if (star_fadein_Flag == 1) {
      for (let i = 0; i < 10; i++) {
        star[i].show();
    }


    //star_show = 1;

    for (let i = 0; i < total_people; i++) {
      frameRate(3);
      strokeWeight(0);
      star[int(random(0, 10))].position(random(100, 800), random(150, 600));
    }
  }

  if (bridgeUpFlag == 1) { // bridgeUpFlag 변수가 참값일 경우

    if (bridge_position_y >= 560)
    {
      bridge_position_y -= 25;
    }



    if (train_position_x >= 120)
      train_position_x -= 25;

    else
      moon_fadein_Flag = 1;

    image(bridge, 0, bridge_position_y);
    image(train, train_position_x, 550);
  }



  if (houseDownFlag == 1) { //houseDownFlag 값 침일 경우
    house_position_y += 60; // 집을 점점 사라지게 하기 위해
    if (house_position_y >= 800) { //  1500 이상일 경우
      houseDownFlag = 0; //houseDownFlag다시 거짓으로
    }
  }

  if (star_show == 1 && mouseIsPressed) { //열차칸 클릭
    if ((mouseX < 550 && mouseX > 400) && (mouseY > 550 && mouseY < 650)) {
      text = createElement('h1', 'test');
      text.position(450, 100);
    }

    //  else if ((mouseX > 220 && mouseX < 360) && (mouseY > 570 && mouseY < 600))
    //{

    //}
  }
}

function mouseWheel(event) {
  if ((mouseY >= 0 && mouseY <= 70)) {
    lineAreaX += event.delta;

    if (lineAreaX > 30)
      lineAreaX = 30;
  }
}
