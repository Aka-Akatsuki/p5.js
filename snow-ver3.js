// ver.3 Coding 

 var snowcolor;   //雪の色
 var MaxNum;      //雪の数
 var  strtime;
 var  resettime;
 var  restbuf;
 
 let snow = [];        //雪オブジェクトの配列
 var arypoint = [];    //積もる雪の高さを画面1ドットづつ記録

 function setup() {
   //size(screen.width, screen.height);
   
   createCanvas(640, 480);
   background(0,0,100);
     
   snowcolor = 200;
   snowspeed = 1;
   
   MaxNum = 500;
   resettime = 200;
   restbuf = 20;
   
   //雪オブジェクト作成
   for (let i = 0; i < MaxNum; i++) {   
     snow[i] = new objSnow();
   }
 
   //雪が積もる高さの初期化
   for (let i = 0; i < width ; i++) {   
     arypoint[i] = 0;
   }
 
}

 function draw() {
  
    // chage background writein
    background(0,0,100);
    
    stroke(0,0,100);
    fill(0,0,100);
     
/*  デバック用のコメント出力
    fill(255);
    text(str(strtime),100,100);
    text(str(baseup),200,100);
    text(str(vy),300,100);
    text(str(millis()),400,100);
  */   
    stroke(snowcolor); 
    fill(snowcolor);
  
     
     //ellipse(100,y,snowR,snowR);
     //y+=snowspeed;
     
    //雪が降る  ゆきオブジェクトの描写
    for (let i = 0; i < MaxNum; i++) {   
       snow[i].snowdraw();
    }
     
    //雪が積もる  雪の高さのY座標を計算する
    beginShape();
    vertex(0,height);
    for (let x = 0; x < width ; x++) {   
      vertex(x,height - arypoint[x]);
    }
    vertex(width,height);
    endShape(CLOSE);

    
}

 //雪オブジェクト
 class objSnow {

   constructor () {
      this.speed = snowspeed;
      this.sy = 0;
      this.sx = random(640);
      this.currentsx = 0;
      this.currentsy = 0;
      this.fai = random(2.5);
      this.wait = random(1000);
      this.stepcount = 0;        //指定した回数毎に移動方向を変更する
   }
  
   //雪の描写
   snowdraw() {
      if (this.wait <= 0) {
         ellipse(this.sx, this.sy, this.fai, this.fai);

         // this.sy += random(this.speed);
         // this.sx += random(-1*this.speed, this.speed);
         
         if(this.stepcount <= 0) {
            this.currentsy = random(this.speed);
            this.currentsx = random(-1*this.speed, this.speed);
            this.stepcount = 30;
         }

         this.sy += this.currentsy;
         this.sx += this.currentsx;
         this.stepcount -= 1;
         

         if (this.sx < 0) { this.sx = width / 2; }
         if (this.sx > width) { this.sx = width / 2; }
         
         if (this.sy >= height) {
             this.sy = 0;
             arypoint[int(this.sx)] = arypoint[int(this.sx)] + 1;          
             
             if (this.fai > 1) {
                arypoint[int(this.sx)] = arypoint[int(this.sx)] + 1;          
                arypoint[int(this.sx-1)] = arypoint[int(this.sx-1)] + 1;          
             }
             //text(str(arypoint[int(this.sx)]),200,400);
         }
         
      }
      else {
         this.wait -= 1;
      }
   } 
   


 }
