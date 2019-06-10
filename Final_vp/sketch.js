// 이미지 관련 변수 //
let bg; // 배경 변수
let house; // 집 변수
let bridge; // 다리 변수
let train; // 기차 변수
let moon; // 달 변수
let line = []; // 노선도이미지가 들어간 배열
let exchange = []; // 빠른 출구 변수
//
// 이미지 위치 변수 //
let house_position_y = 470; //집 초기 좌표
let bridge_position_y = 1000; // 다리 초기 좌표
let train_position_x = 1200; // 기차 초기 좌표
let moon_position_y = 800; // 달의 좌표
let cloud_position_x = [];
let cloud_position_y = [];
//

// 각 플래그 값들 //
let houseDownFlag = 0; // 집 이미지 관련 불 변수
let bridgeUpFlag = 0; // 다리 이미지 관련 불 변수
let moon_fadein_Flag = 0; // 다리 이미지 관련 불 변수
let star_fadein_Flag = 0; // 별 이미지 관련 불 변수
let station_Click_Flag = 0; // 호선을 클릭 했을 때 한번만 값 초기화 해주기 위한 불 변수
let lineNumBtnFlag = []; // 호선 선택 여부 버튼
//
let lineTintCount = 0; // 호선 이미지 투명도

// 콤보박스 관련 변수 //

let lineComboBox; // 호선 콤보박스
let timeComboBox; // 시간 콤보박스
let getLineNum = 0; // 사용자가 선택한 호선
let getTimeNum = 0; // 사용자가 선택한 시간대
let lineUpdateFlag = 0; // 사용자가 처음 콤보박스 선택 후 재 선택시 새로고침을 위한 플래그
let backBtn; // 지하철 노선도로 돌아가는 '뒤로가기' 버튼


/// 이하 csv연결과 관련된 변수들 ///
let lint4Table; // 4호선 데이터 로드
let lint7Table; // 7호선 데이터 로드

let stationName; // 지하철 역 이름
let broadcastAll; // 전체 전동차칸 멘트 ex) 포화도는 --%입니다.
let broadcastAllAnnoun; // 전체 전동차칸 안내 멘트  ex) 이용하기 좋은 시간이에요

let peopleAll = 10; // 전체 전동차 칸의 인원
let starAll; // 전체 전동차 칸의 별의 수를 저장

let broadcastIndiv; // 전동차 각 칸의 멘트 ex) 포화도는 --%입니다.
let broadcastIndivAnnoun; // 전체 전동차칸 멘트 ex) 아직 생각중이라서 변수만 넣어둠, 쓸곳은 따로 없음.

let peopleIndiv = []; // 전동차 각 칸의 인원

let tmpIndex = 0; // 임시로 인덱스를 저장할 변수
let compareData = 0;
///      끝      ///


// 빠른 출구 관련 변수 //
let exchangeNum = []; // 테이블에서 빠른 출구 위치 정보를 저장
let exchangeFlag = 0; // 빠른 출구 위치 새로고침 관련 플래그

/// 사용자 검색 관련 ///
let searchData;
let searchBtn;
let getData;
///   끝   ///

/// 별똥별 관련 변수 ///
let fallingStar_x = []; // 별똥별 x좌표
let fallingStar_y = []; // 별똥별 y좌표
let fallingStar_tint = []; // 별똥별 투명값
///   끝   ///

/// 초기화면 별똥별 효과 관련 변수 ///
let tx = [];
let ty = [];
let splashStarFlag = 1;
///   끝   ///

function preload() {
  lint4Table = loadTable('DB/line4DB.csv', 'csv', 'header');
  lint7Table = loadTable('DB/line7DB.csv', 'csv', 'header');
  // 4호선 7호선 csv 로드
};

function setup() {
  createCanvas(1280, 720); // 캔버스 크기 설정

  /// 이하 호선 콤보박스 관련 구문 ///
  lineComboBox = createSelect();
  textAlign(CENTER);
  lineComboBox.size(100, 40);
  lineComboBox.position(30, 30);

  lineComboBox.style('background', '#ffffffff');
  lineComboBox.style('border-color', '#ffffffff');
  lineComboBox.style('border-radius', '6px');
  lineComboBox.style('font-size', '20px');
  lineComboBox.style('font-family', 'Jua');
  lineComboBox.style('color', '#000000');
  lineComboBox.style('font-weight', 'bolder');

  lineComboBox.option('호선');
  lineComboBox.option('1호선');
  lineComboBox.option('2호선');
  lineComboBox.option('3호선');
  lineComboBox.option('4호선');
  lineComboBox.option('5호선');
  lineComboBox.option('6호선');
  lineComboBox.option('7호선');
  lineComboBox.option('8호선');
  lineComboBox.option('9호선');
  lineComboBox.option('분당선');
  lineComboBox.changed(getLine); // 사용자가 콤보박스 옵션 선택 시 getLine 함수 실행
  ///   끝   ///

  /// 이하 시간선택 콤보박스 관련 구문 ///
  timeComboBox = createSelect();
  timeComboBox.size(100, 40);
  timeComboBox.position(150, 30);

  timeComboBox.style('background', '#ffffffff');
  timeComboBox.style('border-color', '#ffffffff');
  timeComboBox.style('border-radius', '6px');
  timeComboBox.style('font-size', '20px');
  timeComboBox.style('font-family', 'Jua');
  timeComboBox.style('color', '#000000');
  timeComboBox.style('font-weight', 'bolder');

  timeComboBox.option('시간');
  timeComboBox.option('0시');
  timeComboBox.option('1시');
  timeComboBox.option('2시');
  timeComboBox.option('3시');
  timeComboBox.option('4시');
  timeComboBox.option('5시');
  timeComboBox.option('6시');
  timeComboBox.option('7시');
  timeComboBox.option('8시');
  timeComboBox.option('9시');
  timeComboBox.option('10시');
  timeComboBox.option('11시');
  timeComboBox.option('12시');
  timeComboBox.option('13시');
  timeComboBox.option('14시');
  timeComboBox.option('15시');
  timeComboBox.option('16시');
  timeComboBox.option('17시');
  timeComboBox.option('18시');
  timeComboBox.option('19시');
  timeComboBox.option('20시');
  timeComboBox.option('21시');
  timeComboBox.option('22시');
  timeComboBox.option('23시');
  timeComboBox.changed(getTime); // 사용자가 콤보박스 옵션 선택 시 getTime 함수 실행
  ///   끝   ///


  searchData = createInput('');
  searchData.position(270, 30);
  searchData.size(100, 35);

  searchData.style('border-radius', '6px');
  searchData.style('font-size', '20px');
  searchData.style('font-weight', 'bolder');

  searchBtn = createButton('검색');
  searchBtn.style('font-family', 'Jua');
  searchBtn.position(380, 30);
  searchBtn.size(60, 40);

  searchBtn.style('background', '#ffffffff');
  searchBtn.style('border-color', '#ffffffff');
  searchBtn.style('border-radius', '6px');
  searchBtn.style('font-size', '20px');
  searchBtn.style('color', '#000000');
  searchBtn.style('font-weight', 'bolder');

  searchBtn.mousePressed(findData);

  /// 이하 뒤로가기 버튼 관련 구문 ///
  backBtn = createButton('뒤로 가기');
  backBtn.style('font-family', 'Jua');
  backBtn.size(90, 30);
  backBtn.position(35, 80);
  backBtn.mousePressed(goToBack);
  backBtn.style('border-radius', '6px');
  backBtn.hide();
  ///   끝   ///

  /// 이하 이미지 로드 구문 ///
  bg = loadImage('background_2.jpg'); // 배경 이미지 로드
  house = loadImage('house_3.png'); // 집 이미지 로드
  bridge = loadImage('bridge.png'); // 다리 이미지 로드
  train = loadImage('train_2.png'); // 기차 이미지 로드
  moon = loadImage('moon.png'); // 달 이미지 로드

  line[0] = loadImage('ready_img.png');
  line[1] = loadImage('ready_img.png');
  line[2] = loadImage('ready_img.png');
  line[3] = loadImage('line4.png'); // 4호선 이미지 로드
  line[4] = loadImage('ready_img.png');
  line[5] = loadImage('ready_img.png');
  line[6] = loadImage('line7.png'); // 7호선 이미지 로드
  line[7] = loadImage('ready_img.png');
  line[8] = loadImage('ready_img.png');
  line[9] = loadImage('ready_img.png');
  // index 3, index 6 이외 로드된 ready_img는 임시로 넣어둔 이미지
  ///   끝   ///

  exchange[0] = createImg('exchange.png');
  exchange[0].size(30, 30);
  exchange[1] = createImg('exchange.png');
  exchange[1].size(30, 30);
  exchange[0].hide();
  exchange[1].hide();
  /// 사용자에게 정보를 전달할 Element ///

  broadcastAllAnnoun = createElement('p'); // 전동차 전체 정보 전달
  broadcastAllAnnoun.size(1000, 100);
  broadcastAllAnnoun.position(150, 150);

  broadcastAll = createElement('p'); // 전동차 전체 정보 전달
  broadcastAll.size(1000, 100);
  broadcastAll.position(150, 200);

  broadcastIndivAnnoun = createElement('p'); // 전동차 개별 칸 정보 전달
  broadcastIndivAnnoun.size(1000, 100);
  broadcastIndivAnnoun.position(150, 250);

  broadcastIndiv = createElement('p'); // 전동차 개별 칸 정보 전달
  broadcastIndiv.size(1000, 100);
  broadcastIndiv.position(150, 300);
  ///   끝   ///

  for (let i = 0; i < 5; i++) {
    tx[i] = random(0, 1280);
    ty[i] = random(0, 500);
  }

  // 구름 초기 위치 설정 //
  cloud_position_x[0] = 260;
  cloud_position_y[0] = 100;
  cloud_position_x[1] = 850;
  cloud_position_y[1] = 150;
  cloud_position_x[2] = 50;
  cloud_position_y[2] = 200;
  cloud_position_x[3] = 450;
  cloud_position_y[3] = 250;
  cloud_position_x[4] = 650;
  cloud_position_y[4] = 300;
  cloud_position_x[5] = -150;
  cloud_position_y[5] = 350;
  //
}

function draw() {

  background(bg); // 배경 설정
  image(house, 0, house_position_y); // 집 출력

  if (splashStarFlag == 0) { // 초기화면 별똥별
    splashStar();
  }

  if (lineUpdateFlag == 1) {
    Init();
  }

  if (lineNumBtnFlag[getLineNum - 1] == 1) { // 해당 호선 버튼을 클릭 했을 경우
    if (houseDownFlag == 1) { // 만약에 houseDownFlag값이 1일 경우
      tint(255, 255 - (house_position_y / 3)); // 하우스 플래그 작동 시 노선도 투명도 조정 어둡게
      image(line[getLineNum - 1], 130, 90); // 노선도 이미지 출력
    } else {
      if (house_position_y == 470) { // hy값이 470일 경우
        if (lineTintCount < 255) // 노선도 점점 밝게 해줌.
        {
          lineTintCount += 20;
        }
        tint(255, 255, 255, lineTintCount); // 노선도 점점 밝게 해줌.
        image(line[getLineNum - 1], 130, 90); // 노선도 이미지 출력
      }
    }
  }

  tint(255, 255); // houseDownFlag로 인해 변경된 틴트값 변환

  if (houseDownFlag == 0 && mouseIsPressed) { // 기차가 들어오기 전 이면서 마우스 클릭했을 경우(아직 호선 선택 이전)
    if (lineNumBtnFlag[3] == 1) { // 4호선 버튼을 선택 했고


      if ((mouseX > 475 && mouseX < 490) && (mouseY > 335 && mouseY < 350)) // 과천 클릭 시
      {
        exchangeFlag = 0;
        splashStarFlag = 1;
        station_Click_Flag = 1; // 역을 클릭했다는 정보 관련 변수 참으로 변환
        // 아무것도 없음
        // 그냥 데이터 안넣을거임

      } else if ((mouseX > 390 && mouseX < 405) && (mouseY > 340 && mouseY < 355)) //사당
      {
        exchangeFlag = 0;
        splashStarFlag = 1;
        station_Click_Flag = 1;
        tmpIndex = 0;
        stationName = lint4Table.get(getTimeNum, '역');


      } else if ((mouseX > 280 && mouseX < 295) && (mouseY > 360 && mouseY < 375)) //서울역
      {
        exchangeFlag = 0;
        splashStarFlag = 1;
        station_Click_Flag = 1;
        tmpIndex = 24;
        stationName = lint4Table.get(int(getTimeNum) + 24, '역');

      } else if ((mouseX > 547 && mouseX < 562) && (mouseY > 137 && mouseY < 152)) //동대문
      {
        exchangeFlag = 0;
        splashStarFlag = 1;
        station_Click_Flag = 1;
        tmpIndex = 48;
        stationName = lint4Table.get(int(getTimeNum) + 48, '역');


      } else if ((mouseX > 715 && mouseX < 730) && (mouseY > 285 && mouseY < 300)) //금정
      {
        exchangeFlag = 0;
        station_Click_Flag = 1;
        tmpIndex = 72;
        stationName = lint4Table.get(int(getTimeNum) + 72, '역');

      } else if ((mouseX > 380 && mouseX < 395) && (mouseY > 385 && mouseY < 400)) //총신대입구
      {
        exchangeFlag = 0;
        splashStarFlag = 1;
        station_Click_Flag = 1;
        tmpIndex = 96;
        stationName = lint4Table.get(int(getTimeNum) + 96, '역');

      }
    } else if (lineNumBtnFlag[6] == 1) { // 7호선 버튼을 선택 했고

      if ((mouseX > 1065 && mouseX < 1080) && (mouseY > 255 && mouseY < 270)) //온수
      {
        exchangeFlag = 0;
        splashStarFlag = 1;
        station_Click_Flag = 1;
        tmpIndex = 0;
        stationName = lint7Table.get(getTimeNum, '역');
      } else if ((mouseX > 855 && mouseX < 870) && (mouseY > 390 && mouseY < 405)) //가산디지털단지
      {
        exchangeFlag = 0;
        splashStarFlag = 1;
        station_Click_Flag = 1;
        tmpIndex = 24;
        stationName = lint7Table.get(int(getTimeNum) + 24, '역');
      } else if ((mouseX > 293 && mouseX < 308) && (mouseY > 460 && mouseY < 475)) //고속터미널
      {
        exchangeFlag = 0;
        splashStarFlag = 1;
        station_Click_Flag = 1;
        tmpIndex = 48;
        stationName = lint7Table.get(int(getTimeNum) + 48, '역');
      } else if ((mouseX > 345 && mouseX < 360) && (mouseY > 410 && mouseY < 425)) //건대입구
      {
        exchangeFlag = 0;
        station_Click_Flag = 1;
        tmpIndex = 72;
        stationName = lint7Table.get(int(getTimeNum) + 72, '역');
      } else if ((mouseX > 618 && mouseX < 633) && (mouseY > 145 && mouseY < 160)) //노원
      {
        exchangeFlag = 0;
        splashStarFlag = 1;
        station_Click_Flag = 1;
        tmpIndex = 96;
        stationName = lint7Table.get(int(getTimeNum) + 96, '역');
      }

    }

    if (station_Click_Flag == 1) { // 역을 선택 했으니 이제 집 이미지 없애고 기차 들어오게 해야하니 그걸 처리해주는 부분
      houseDownFlag = 1; //houseDownFlag 값 참으로 변환 집 이미지 없애야 하므로
      bridgeUpFlag = 1; // 다리 이미지 참으로 변환
      station_Click_Flag = 0; // 값 한번 초기화 했으니 다시 station_Click_Flag false로
    }
  }

  if (moon_fadein_Flag == 1) {
    if (lineNumBtnFlag[3] == 1) { // 4호선을 선택한 경우 peopleIndiv 배열에 해당 열차 칸 정보를 가져온다.
      for (let i = 0; i <= 7; i++) {
        peopleIndiv[i] = lint4Table.get(int(getTimeNum) + tmpIndex, i + 4);
      }
      if (exchangeFlag == 0) {
        exchangeNum[0] = int(lint4Table.get(int(getTimeNum) + tmpIndex, 'fastEx') / 10);
        exchangeNum[1] = lint4Table.get(int(getTimeNum) + tmpIndex, 'fastEx') % 10;
        exchangeFlag = 1;
      }

    }

    if (lineNumBtnFlag[6] == 1) {
      for (let i = 0; i <= 7; i++) { // 7호선을 선택한 경우 peopleIndiv 배열에 해당 열차 칸 정보를 가져온다.
        peopleIndiv[i] = lint7Table.get(int(getTimeNum) + tmpIndex, i + 4);
      }
      for (let i = 0; i <= 7; i++) {
        print(peopleIndiv[i]);
      }
      if (exchangeFlag == 0) {
        exchangeNum[0] = int(lint7Table.get(int(getTimeNum) + tmpIndex, 'fastEx') / 10);
        exchangeNum[1] = lint7Table.get(int(getTimeNum) + tmpIndex, 'fastEx') % 10;
        exchangeFlag = 1;
      }

    }

    if (mouseIsPressed) {
      let tempTxt = '첫';
      let temp = 0;
      let tempFlag = 0;

      if ((mouseX >= 160 && mouseX <= 272) && (mouseY >= 590 && mouseY <= 645)) // 첫번째 칸
      {
        tempFlag = 1;
        tempTxt = '첫';
        temp = 0;
        //broadcastIndiv.html("첫번째 칸의 예상 이용객 수는 " + peopleIndiv[0] + "명, <br>" + "포화도는 " + int(((peopleIndiv[0]) / 3200) * 100) + "% 입니다.");
      } else if ((mouseX >= 280 && mouseX <= 392) && (mouseY >= 590 && mouseY <= 645)) // 두번째 칸
      {
        tempFlag = 1;
        tempTxt = '두';
        temp = 1;
      } else if ((mouseX >= 405 && mouseX <= 517) && (mouseY >= 590 && mouseY <= 645)) // 세번째 칸
      {
        tempFlag = 1;
        tempTxt = '세';
        temp = 2;
      } else if ((mouseX >= 530 && mouseX <= 640) && (mouseY >= 590 && mouseY <= 645)) // 네번째 칸
      {
        tempFlag = 1;
        tempTxt = '네';
        temp = 3;
      } else if ((mouseX >= 652 && mouseX <= 763) && (mouseY >= 590 && mouseY <= 645)) // 다섯번째 칸
      {
        tempFlag = 1;
        tempTxt = '다섯';
        temp = 4;
      } else if ((mouseX >= 780 && mouseX <= 890) && (mouseY >= 590 && mouseY <= 645)) // 여섯번째 칸
      {
        tempFlag = 1;
        tempTxt = '여섯';
        temp = 5;
      } else if ((mouseX >= 905 && mouseX <= 1015) && (mouseY >= 590 && mouseY <= 645)) // 일곱번째 칸
      {
        tempFlag = 1;
        tempTxt = '일곱';
        temp = 6;
      } else if ((mouseX >= 1025 && mouseX <= 1135) && (mouseY >= 590 && mouseY <= 645)) // 여덜번째 칸
      {
        tempFlag = 1;
        tempTxt = '여덟';
        temp = 7;
      } else {
        tempFlag = 0;
      }
      if (tempFlag == 1) {
        broadcastIndiv.html(tempTxt + "번째 칸의 예상 포화도는 " + int(((peopleIndiv[temp]) / 3200) * 100) + "% 입니다!!");
        broadcastIndiv.show();
      }
    }

    if (moon_position_y >= 90)
      moon_position_y -= 45;

    else { // 달이 나오고나서 별이 나오게 하기 위함
      star_fadein_Flag = 1;
    }
    updateDB(); // 사용자가 선택한 시간에 대한 데이터 갱신
  }

  if (star_fadein_Flag == 1) { // 별똥별 애니메이션
    fallingStar();
  }

  if (bridgeUpFlag == 1) { // bridgeUpFlag 변수가 참값일 경우
    if (bridge_position_y >= 560) {
      bridge_position_y -= 25;
    }

    if (train_position_x >= 120)
      train_position_x -= 25;

    else {
      moon_fadein_Flag = 1;
    }
    image(bridge, 0, bridge_position_y);
    image(train, train_position_x, 550);

    cloud();
    if (train_position_x == 100) { // 열차가 나오고 나서 포화도에 따른 창문 출력
      let j = 0;
      for (let i = 205; i <= 1085; i += 117) {
        if ((((peopleIndiv[j]) / 3200 * 100)) <= 30) { // 30% 이하의 경우 초록색
          fill(50, 200, 0);
          rect(i, 602, 35, 20, 5, 5);
          rect((i + 45), 602, 35, 20, 5, 5);
        } else if ((((peopleIndiv[j]) / 3200 * 100)) > 30 && (((peopleIndiv[j]) / 3200 * 100)) <= 90) { // 30~90% 노란색
          fill(200, 200, 0);
          rect(i, 602, 35, 20, 5, 5);
          rect((i + 45), 602, 35, 20, 5, 5);
        } else if ((((peopleIndiv[j]) / 3200 * 100)) > 90) { // 90% 이상 빨간색
          fill(200, 50, 0);
          rect(i, 602, 35, 20, 5, 5);
          rect((i + 45), 602, 35, 20, 5, 5);
        }
        j++;
      }
      if (mouseIsPressed) {
        print(mouseX, mouseY)
      }
      print(exchangeNum[0], exchangeNum[1]);
      exchange[0].position(120 + (exchangeNum[0] * 115), 555);
      exchange[1].position(120 + (exchangeNum[1] * 115), 555);
      exchange[0].show();
      exchange[1].show();

      //image(exchange[0], 120 + (exchangeNum[0] * 115), 560, 30, 30);
      //image(exchange[1], 122 + (exchangeNum[1] * 115), 560, 30, 30);
    }

  }

  if (houseDownFlag == 1) { //houseDownFlag 값 침일 경우
    house_position_y += 60; // 집을 점점 사라지게 하기 위해
    if (house_position_y >= 800) { //  1500 이상일 경우
      houseDownFlag = 0; //houseDownFlag다시 거짓으로
    }
  }
}

function Init() {

  if (star_fadein_Flag == 1) { // 호선 버튼을 누르면 별을 다시 없애야 하니 그거를 처리해주는 부분
    broadcastAll.hide(); // 글자 지움
    broadcastIndiv.hide(); // 글자 지움
    broadcastAllAnnoun.hide(); // 글자 지움
    broadcastIndivAnnoun.hide(); // 글자 지움
    exchange[0].hide();
    exchange[1].hide();

  }
  house_position_y = 470; // 집 위치 초기화
  bridge_position_y = 1000; // 다리 위치 초기화
  moon_position_y = 800; //  달 위치 초기화
  train_position_x = 1200; // 기차 위치 초기화

  star_fadein_Flag = 0;
  moon_fadein_Flag = 0;
  bridgeUpFlag = 0; // 기차 불변수 초기화
  lineTintCount = 0; // 노선도 투명도 초기화

  for (let j = 0; j < 10; j++) // 호선 갯수 만큼 포문 돈다.
  {
    lineNumBtnFlag[j] = 0; // 일단 모든 호선 Flag값 false로 초기화 하고
  }
  lineNumBtnFlag[getLineNum - 1] = 1; // 클릭한 호선만 true로 변환
  lineUpdateFlag = 0;

}

function getLine() {
  getLineNum = lineComboBox.value().replace(/[^0-9]/g, ""); // 가져온 데이터 중 숫자만 걸러냄
  lineUpdateFlag = 1; // 사용자가 호선을 선택했으므로 업데이트가 필요해 업데이트 관련 플래그 작동
  searchFlag = 0;
}

function getTime() {
  broadcastIndiv.hide();

  //getTimeNum = timeComboBox.value().replace(\S, "0");
  getTimeNum = timeComboBox.value().replace(/[^0-9]/g, "");


  searchFlag = 0;

}

function goToBack() {
  lineUpdateFlag = 1;
  searchFlag = 0;
  //  exchangeFlag = 0;
  searchData.value('');
  backBtn.hide();
  broadcastAll.hide();
  broadcastAllAnnoun.hide();
  broadcastIndiv.hide();
  broadcastAll.hide();

  exchange[0].hide();
  exchange[1].hide();
}

function findData() {

  getTime();
  getLine();

  backBtn.hide();
  checkTable();

  lineUpdateFlag = 1; // 새로고침 필요
  station_Click_Flag = 1; // 가져온 정보를 토대로 플래그 작동

}

function checkTable() {

  if (getLineNum == 4) { // 4호선일
    getData = searchData.value(); // 텍스트 필드 데이터 가져오
    getData = lint4Table.matchRow((getData + getTimeNum), 1); // 텍스트 필드 + 시간 조합으로 테이블 가져오기
    peopleAll = getData.getString(3); // 테이블 중 현재 전체인원
    stationName = getData.getString(1); // 테이블 중 역 이름 가져오기
    stationName = stationName.replace(/[0-9]/g, ""); // 가져올때 문자만 가져오기
    lineNumBtnFlag[getLineNum - 1] == 1; // 4호선이 클릭, 플래그 변경
    /// 이하 인덱스 설정 ///
    if (stationName == '사당') {
      tmpIndex = 0;
    } else if (stationName == '서울역') {
      tmpIndex = 24;
    } else if (stationName == '동대문') {
      tmpIndex = 48;
    } else if (stationName == '금정') {
      tmpIndex = 72
    } else if (stationName == '총신대입구') {
      tmpIndex = 96;
    }
    ///   끝   ///
  } else if (getLineNum == 7) {
    getData = searchData.value(); // 텍스트 필드 데이터 가져오
    getData = lint7Table.matchRow((getData + getTimeNum), 1); // 텍스트 필드 + 시간 조합으로 테이블 가져오기
    peopleAll = getData.getString(3); // 테이블 중 현재 전체인원
    stationName = getData.getString(1); // 테이블 중 역 이름 가져오기
    stationName = stationName.replace(/[0-9]/g, ""); // 가져올때 문자만 가져오기
    lineNumBtnFlag[getLineNum - 1] == 1; // 4호선이 클릭, 플래그 변경
    /// 이하 인덱스 설정 ///
    if (stationName == '온수') {
      tmpIndex = 0;
    } else if (stationName == '가산디지털단지') {
      tmpIndex = 24;
    } else if (stationName == '고속터미널') {
      tmpIndex = 48;
    } else if (stationName == '건대입구') {
      tmpIndex = 72
    } else if (stationName == '노원') {
      tmpIndex = 96;
    }
    ///   끝   ///
  }
}

function updateDB() {
  // 사용자가 선택한 시간대에 맞는 인원 정보 로드

  if (lineNumBtnFlag[3] == 1) {
    peopleAll = lint4Table.get(int(getTimeNum) + tmpIndex, '전체인원');
  } else if (lineNumBtnFlag[6] == 1) {
    peopleAll = lint7Table.get(int(getTimeNum) + tmpIndex, '전체인원');
  }

  if (peopleAll != compareData) { // 이전 데이터와 비교해서 만일 다르다면(사용자가 새로운 값을 선택했을 경우) 새로고침 진행

    starAll = (peopleAll / 2) / 1600;




    for (let i = 0; i < starAll; i++) { // 사람 수 만큼 포문 돌면서 별똥별에 시작 좌표 넣음
      fallingStar_x[i] = 500;
      fallingStar_y[i] = 500;
    }

    for (let i = 0; i < starAll; i++) { // 사람 수 만큼 포문 돌면서 별똥별에 시작 좌표 넣음
      fallingStar_tint[i] = random(0, 200);
    }
    compareData = peopleAll; // 관련 정보 업데이트 후 새롭게 저장
  }
  image(moon, 1000 - moon_position_y * 1.4, moon_position_y);
  //print(starAll);
  stationName = stationName.replace(/[0-9]/g, ""); // 가져온 데이터 중 숫자만 걸러냄
  if (int(((peopleAll) / 26000) * 100) < 40) // 1600명 8칸 약 13000만
  {
    broadcastAllAnnoun.html("지하철 이용하기 딱 좋은 시간이에요!");

  } else if (int(((peopleAll) / 26000) * 100) > 40 && int(((peopleAll) / 26000) * 100) < 90) {
    broadcastAllAnnoun.html("무난하게 지하철을 이용할 수 있을거 같아요!");

  } else if ((int(((peopleAll) / 26000) * 100) > 90)) {
    broadcastAllAnnoun.html("꼭 이 시간대에 지하철을 이용하셔야 하나요...?");

  }
  getTimeNum = timeComboBox.value().replace(/[^0-9]/g, "");
  //broadcastAll.html(getTimeNum + "시 " + stationName + "의 예상 이용객은 약 " + peopleAll + "명으로 <br>" + "포화도는 " + int(((peopleAll) / 26000) * 100) + "% 입니다.");
  broadcastAll.html(getTimeNum + "시 " + stationName + "의 예상 포화도는 약 " + int(((peopleAll) / 26000) * 100) + "% 입니다.");
  backBtn.show();
  broadcastAll.show();
  broadcastAllAnnoun.show();
}

function cloud() {
  strokeWeight(0);

  fill(32, 32, 32, 250);

  ellipse(cloud_position_x[0], cloud_position_y[0], 30);
  ellipse(cloud_position_x[0] + 10, cloud_position_y[0] + 10, 30);
  ellipse(cloud_position_x[0] + 20, cloud_position_y[0] - 5, 50);
  ellipse(cloud_position_x[0] + 30, cloud_position_y[0] + 5, 30);

  ellipse(cloud_position_x[1], cloud_position_y[1], 30);
  ellipse(cloud_position_x[1] + 10, cloud_position_y[1] + 10, 30);
  ellipse(cloud_position_x[1] + 20, cloud_position_y[1] - 5, 50);
  ellipse(cloud_position_x[1] + 30, cloud_position_y[1] + 6, 30);

  ellipse(cloud_position_x[2], cloud_position_y[2], 60, 50);
  ellipse(cloud_position_x[2] + 30, cloud_position_y[2] - 10, 60, 50);
  ellipse(cloud_position_x[2] + 80, cloud_position_y[2], 60, 50);
  ellipse(cloud_position_x[2] + 20, cloud_position_y[2] + 20, 60, 50);
  ellipse(cloud_position_x[2] + 70, cloud_position_y[2] + 15, 60, 50);

  ellipse(cloud_position_x[3], cloud_position_y[3], 60, 50);
  ellipse(cloud_position_x[3] + 30, cloud_position_y[3] - 10, 60, 50);
  ellipse(cloud_position_x[3] + 80, cloud_position_y[3], 60, 50);
  ellipse(cloud_position_x[3] + 20, cloud_position_y[3] + 20, 60, 50);
  ellipse(cloud_position_x[3] + 60, cloud_position_y[3] + 15, 60, 50);

  ellipse(cloud_position_x[4], cloud_position_y[4], 60, 50);
  ellipse(cloud_position_x[4] + 30, cloud_position_y[4] - 10, 60, 50);
  ellipse(cloud_position_x[4] + 80, cloud_position_y[4], 60, 50);
  ellipse(cloud_position_x[4] + 20, cloud_position_y[4] + 30, 60, 50);
  ellipse(cloud_position_x[4] + 60, cloud_position_y[4] + 26, 60, 50);

  ellipse(cloud_position_x[5], cloud_position_y[5], 60, 50);
  ellipse(cloud_position_x[5] + 30, cloud_position_y[5] - 10, 60, 50);
  ellipse(cloud_position_x[5] + 80, cloud_position_y[5], 60, 50);
  ellipse(cloud_position_x[5] + 20, cloud_position_y[5] + 30, 60, 50);
  ellipse(cloud_position_x[5] + 60, cloud_position_y[5] + 26, 60, 50);

  for (let i = 0; i < 6; i++) {
    if (cloud_position_x[i] > 1300)
      cloud_position_x[i] = 0;

    cloud_position_x[i] += 1;
  }
}

function fallingStar() {
  for (let i = 0; i < starAll; i++) {

    fill(255, 255, 255, fallingStar_tint[i]);
    ellipse(fallingStar_x[i], fallingStar_y[i], 10, 10);

    fill(255, 255, 255, fallingStar_tint[i] - 30);
    ellipse(fallingStar_x[i] - 3, fallingStar_y[i] - 3, 9, 9);

    fill(255, 255, 255, fallingStar_tint[i] - 60);
    ellipse(fallingStar_x[i] - 6, fallingStar_y[i] - 6, 8, 8);

    fill(255, 255, 255, fallingStar_tint[i] - 90);
    ellipse(fallingStar_x[i] - 9, fallingStar_y[i] - 9, 7, 7);

    fill(255, 255, 255, fallingStar_tint[i] - 120);
    ellipse(fallingStar_x[i] - 12, fallingStar_y[i] - 12, 6, 6);

    fill(255, 255, 255, fallingStar_tint[i] - 150);
    ellipse(fallingStar_x[i] - 15, fallingStar_y[i] - 15, 5, 5);

    fill(255, 255, 255, fallingStar_tint[i] - 180);
    ellipse(fallingStar_x[i] - 18, fallingStar_y[i] - 18, 4, 4);

    fill(255, 255, 255, fallingStar_tint[i] - 210);
    ellipse(fallingStar_x[i] - 21, fallingStar_y[i] - 21, 3, 3);

    fill(255, 255, 255, fallingStar_tint[i] - 240);
    ellipse(fallingStar_x[i] - 24, fallingStar_y[i] - 24, 2, 2);

    fill(255, 255, 255, fallingStar_tint[i] - 270);
    ellipse(fallingStar_x[i] - 27, fallingStar_y[i] - 27, 1, 1);

    fallingStar_x[i] += 5;
    fallingStar_y[i] += 5;
    fallingStar_tint[i] -= 2;

    if (fallingStar_tint[i] < 0) { // 별똥별의 투명값이 0보다 작을경우 초기화
      fallingStar_tint[i] = random(0, 200);
    }
    //  fallingStar_tint -= random(0, 1);

    if (fallingStar_y[i] > 500) {
      fallingStar_x[i] = random(0, 1280);
      fallingStar_y[i] = random(0, 500);
    }
  }
}

function splashStar() {
  for (let i = 0; i < 10; i++) {
    strokeWeight(0);
    fill(255, 255, 255, fallingStar_tint[i]);
    ellipse(tx[i], ty[i], 10, 10);

    fill(255, 255, 255, fallingStar_tint[i] - 30);
    ellipse(tx[i] - 3, ty[i] - 3, 9, 9);

    fill(255, 255, 255, fallingStar_tint[i] - 60);
    ellipse(tx[i] - 6, ty[i] - 6, 8, 8);

    fill(255, 255, 255, fallingStar_tint[i] - 90);
    ellipse(tx[i] - 9, ty[i] - 9, 7, 7);

    fill(255, 255, 255, fallingStar_tint[i] - 120);
    ellipse(tx[i] - 12, ty[i] - 12, 6, 6);

    fill(255, 255, 255, fallingStar_tint[i] - 150);
    ellipse(tx[i] - 15, ty[i] - 15, 5, 5);

    fill(255, 255, 255, fallingStar_tint[i] - 180);
    ellipse(tx[i] - 18, ty[i] - 18, 4, 4);

    fill(255, 255, 255, fallingStar_tint[i] - 210);
    ellipse(tx[i] - 21, ty[i] - 21, 3, 3);

    fill(255, 255, 255, fallingStar_tint[i] - 240);
    ellipse(tx[i] - 24, ty[i] - 24, 2, 2);

    fill(255, 255, 255, fallingStar_tint[i] - 270);
    ellipse(tx[i] - 27, ty[i] - 27, 1, 1);

    tx[i] += 2;
    ty[i] += 2;
    fallingStar_tint[i] -= 5;

    if (fallingStar_tint[i] < 0) { // 별똥별의 투명값이 0보다 작을경우 초기화
      fallingStar_tint[i] = random(0, 200);
    }

    if (ty[i] > 500) {
      tx[i] = random(0, 1280);
      ty[i] = random(0, 500);
    }
  }
}
