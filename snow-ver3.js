// ver.1.1  Test Coding 

 var snowcolor;
 var snowR;
 var y;
 var MaxNum;
 var baseup;
 var  strtime;
 var  resettime;
 var  restbuf;
 
 let snow = [];
 var arypoint = [];

 function setup() {
   //size(screen.width, screen.height);
   
   createCanvas(640, 480);
   background(0,0,100);
     
   snowcolor = 200;
   y = 0;
   snowR = 5;
   snowspeed = 1;
   
   MaxNum = 500;
   baseup = 0;
   resettime = 200;
   restbuf = 20;
   strtime = 0;
   
   for (let i = 0; i < MaxNum; i++) {   
     snow[i] = new objSnow();
   }
 
   for (let i = 0; i < width ; i++) {   
     arypoint[i] = 0;
   }
 
}

 function draw() {

    if (strtime >= resettime) {
       strtime = 0;
       if (millis() > 15000) {
          baseup += 1;
       }
    }
    strtime += 1;
  
    // chage background writeing
    background(0,0,100);
    let vy;
    vy = height - baseup;
    
    //push();
    stroke(0,0,100);
    fill(0,0,100);
    //rect(0,0,width,height - baseup);
    //pop();
     
/*
    fill(255);
    text(str(strtime),100,100);
    text(str(baseup),200,100);
    text(str(vy),300,100);
    text(str(millis()),400,100);
  */   
    stroke(snowcolor); 
    fill(snowcolor);
  
     
     //ellipse(100,y,snowR,snowR);
     y+=snowspeed;
     
    for (let i = 0; i < MaxNum; i++) {   
       snow[i].snowdraw();
    }
     
    beginShape();
    vertex(0,height);
    for (let x = 0; x < width ; x++) {   
      vertex(x,height - arypoint[x]);
    }
    vertex(width,height);
    endShape(CLOSE);

    
}



 class objSnow {

   constructor () {
      this.speed = snowspeed;
      this.sy = 0;
      this.sx = random(640);
      this.currentsx = 0;
      this.currentsy = 0;
      this.fai = random(2.5);
      this.wait = random(1000);
      this.stepcount = 0;
   }
  


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
         

         if (this.sx < 0) { 
            this.sx = width / 2;
         }
         if (this.sx > width) { 
            this.sx = width / 2;
         }
         
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
