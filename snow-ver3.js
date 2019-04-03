// ver.3 Coding 

 var snowcolor;   //雪の色
 var MaxNum;      //雪の数
 //var  strtime;
 //var  resettime;
 //var  restbuf;
 var snowspeed;   //落ちる速さ
 
 let snow = [];        //雪オブジェクトの配列
 var arypoint = [];    //積もる雪の高さを画面1ドットづつ記録

  var curnum;

 function setup() {
   //size(screen.width, screen.height);
   
   createCanvas(640, 480);
   background(0,0,100);
     
   snowcolor = 200;
   snowspeed = 3;
   
   MaxNum = 1000;
   //resettime = 200;
   //restbuf = 20;
   
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
    fill(255);0
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
       curnum = i;
       snow[i].snowdraw();
    }
     
    //雪が積もる  雪の高さのY座標を計算する
    var cvt;
    cvt = 1;
    beginShape();
    
    if (cvt = 1) {
      curveVertex(0,height);
      curveVertex(0,height);
    }
    else {
       vertex(0,height);
    }
    
    var stp;
    stp = 2;
    for (let x = 0; x < width ; x+=stp) {   
        if (cvt = 1) {
          curveVertex(x,height - arypoint[x]);
        } else {
          vertex(x,height - arypoint[x]);
        }  
    }
    
    if (cvt = 1) {
        curveVertex(width,height);
        curveVertex(width,height);
    } 
    else {
        vertex(width,height);
    }
    endShape(CLOSE);

    
}

 //雪オブジェクト
 class objSnow {

   constructor () {
      this.speed = snowspeed;
      this.sy = 0;               //描写する雪のX座標
      this.sx = random(640);     //描写する雪のY座標
      this.currentsx = 0;        //X軸の一回あたりの移動距離
      this.currentsy = 0;        //Y軸の一回あたりの移動距離
      this.fai = random(2.5);    //雪の直径
      this.wait = random(1000);  //不規則に雪を出現させる
      this.stepcount = 0;        //指定した回数毎に移動方向を変更する
      

      
   }
  
   //雪の描写
 
   
   snowdraw() {
      if (this.wait <= 0) {
         ellipse(this.sx, this.sy, this.fai, this.fai);

         // this.sy += random(this.speed);
         // this.sx += random(-1*this.speed, this.speed);
         

              
         //雪が積もる高さを管理する配列へ、高さを加算する
         //var judge;
         
         if (this.sy > 400) {
         var next_x;
         var vect;
         var strX;
         //var nx;
         next_x = int(this.sx);
         vect = random(2);
         
         if ( this.sy - (height - arypoint[next_x]) >= 0) {
           //よこのせきせつがひくければそちらにつもる
           strX = int(this.sx);

           if (vect < 1) {
              if (strX < 1) { strX = 1; }
              for (let nx = strX - 1 ;nx > 0; nx = nx - 1){
                  if ( arypoint[nx] - arypoint[int(this.sx)] < 0) {
                    next_x = nx;
                    break;
                  }
              }
           } 
           else {
               if (strX >= width ) { strX = width - 1; }
               for (let nx2 = strX + 1;nx2 < width ; nx2 = nx2 + 1){
                   if ( arypoint[nx2] - arypoint[int(this.sx)] <= 0) {
                     next_x = nx2;
                     break;
                   } 
               }

           }
 
           //せきせつぽいんと
           if ( next_x >= 0) {
              if (next_x < width) {
                arypoint[next_x] += 1;           
              }
           }
           this.sy = 0;
         }    
         }
        
         //text(str(arypoint[int(this.sx)]),200,400);

        

         //次の位置を決める
         if(this.stepcount <= 0) {
            this.currentsy = random(this.speed);
            this.currentsx = random(-1*this.speed, this.speed);
            this.stepcount = 30;
         }

         this.sy += this.currentsy;
         this.sx += this.currentsx;
         this.stepcount -= 1;
         

         if (this.sx < 0) { this.sx = width; }
         if (this.sx > width) { this.sx = 0; }

         
      }
      else {
         this.wait -= 1;
      }
   } 
   


 }
