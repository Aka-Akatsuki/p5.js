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
   
   MaxNum = 100;
   
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
      this.fai = 2;
   }
  


   snowdraw() {
      ellipse(this.sx, this.sy, this.fai, this.fai);
      this.sy += random(this.speed);
      this.sx += random(-1*this.speed, this.speed);
   } 
   


 }
