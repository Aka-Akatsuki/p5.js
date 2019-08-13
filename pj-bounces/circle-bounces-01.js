//ボールにマイナスの加速度と水平位置の変化(１フレーム １/60秒)

//ボールの位置変数のベクトル宣言 変数 position.x と position.y を定義
var position;

//ボールの速度変数のベクトル宣言 変数 velocitiy.x と velocitiy.y を定義
var velocitiy;

//ボールの加速度変数のベクトル宣言
// 変数 acceleration.x と acceleration.y を定義
var acceleration;

var sw;  // kasokudo wo hanten
 
var  vlValX = 1500; 	//速度(x)
var  vlValY = 130;		//速度(y)
var  acValX = 3;			//加速度(x)
var  acValY = 0;			//加速度(y)

var  diameter = 40;

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(1);

  //初期設定
  //size(1000,800);background(255);
  position = createVector(20, windowHeight/2);//最初の位置(x,y)
  position2 = createVector(300,windowHeight/3);

  velocitiy = createVector(vlValX/60, vlValY/60);//速度(x,y)の定義．

  minAcceleration = createVector(-1 * acValX/60, acValY/60);//-の加速度(x,y)の定義
  plsAcceleration = createVector(acValX/60, acValY/60);//-の加速度(x,y)の定義

  // 加速度による新しい速度(x,y)の計算
  velocitiy.add(minAcceleration);//現在の速度=以前の速度+加速度
  sw = -1;

}

function draw() {
 fill(0);
 
  // 加速度による新しい速度(x,y)の計算
  if (sw == -1) {
    velocitiy.add(minAcceleration);//現在の速度=以前の速度+加速度
  } else {
    velocitiy.add(plsAcceleration);//現在の速度=以前の速度+加速度
  } 

  //kasoku wo hanten saseru
  if (velocitiy.x < -25) {
    if (sw == -1) { sw = 1; }
  }
  if (velocitiy.x > 25) {
    if (sw == 1) { sw = -1; }
  }
  
  // 速度による新しい位置(x,y)の計算
  position.add(velocitiy);				// 現在位置 = 以前の位置 + 現在の速度
  position2.add(velocitiy);		// 現在位置 = 以前の位置 + 現在の速度

  //図形の軌跡をグラデーションで残す tameno haikeisyoku no settei
  fill(255,40);
  noStroke();
  rect(0,0,windowWidth,windowHeight);

  stroke(255,0,0); fill(255,0,0);//線色を赤・面色を赤
  ellipse(position.x, position.y, diameter, diameter);//現在位置にボールを描く
  
  stroke(0,255,0); fill(0,255,0);//線色を赤・面色を赤
  ellipse(position2.x, position2.y, diameter, diameter);//現在位置にボールを描く
  
  
  // ボールが左端に達したら右端に戻し継続して表示(1)
  if(position.x + 20 < 20 )    { position.x = width - 10; }
  if(position.x - 20 > width)  { position.x = 10; }
  if(position.y - 20 > height) { position.y = 1;  }

  if(position2.x + 20 < 20 )    { position2.x = width - 10; }
  if(position2.x - 20 > width)  { position2.x = 10; }
  if(position2.y - 20 > height) { position2.y = 1;  }


}









