// ver.1.1  Test Coding 

 var snowcolor;
 var snowR;
 var y;
 var MaxNum;
 
 let snow = [];

 function setup() {
   //size(screen.width, screen.height);
   
   createCanvas(640, 480);
   background(0,0,100);
     
   snowcolor = 200;
   y = 0;
   snowR = 5;
   snowspeed = 3;
   
   MaxNum = 500;
   
   for (let i = 0; i < MaxNum; i++) {   
     snow[i] = new objSnow();
   }
 
}

 function draw() {
     // ellipse(150, 150, 80, 80);
    // background(255,255,255);
  
    stroke(snowcolor); 
    fill(snowcolor);
  
     background(0,0,100);
    
     //ellipse(100,y,snowR,snowR);
     y+=snowspeed;
     
    for (let i = 0; i < MaxNum; i++) {   
       snow[i].snowdraw();
    }
    
}



 class objSnow {

   constructor () {
      this.speed = 1;
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
         
         if(this.sy > 480) {
            this.sy = 0;
         }
      }
      else {
         this.wait -= 1;
      }
   } 
   


 }
