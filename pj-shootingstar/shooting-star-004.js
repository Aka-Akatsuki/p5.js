var ang;
var angStep;
var angCnt;
var numberOfStars;
var changecount;
var nextStarCnt;
var aryStar = [];
var changeColorCnt;
let cSlider;

function setup() {
   //size(screen.width, screen.height);
    //createCanvas(640, 480);
   createCanvas(windowWidth, windowHeight);
	strokeWeight(1);
    
   han = random(80,40);
   //noFill();
   //noStroke();
   
   //noLoop();
   frameRate(30);
   changecount = 0;
   nextStarCnt = 150;
   numberOfStars = 10;
   changeColorCnt = 0;
   
   for (let i = 0; i < numberOfStars; i++) {
   		aryStar[i] = new StarShape();
   }

}

function draw() {
   //background(0,0,0);
   fill(0,20);
   noStroke();
	rect(0,0,windowWidth,windowHeight);
   
   stroke(150,125,125);
   	strokeWeight(1);
   	   	
   //Draw Stars
   	for (var idx = 0;idx < numberOfStars; idx++){
      setRandomStroke();
   	   	aryStar[idx].drawShape();
   	}

   	   	
	//Create New Stars
   changecount++;
   if (changecount > nextStarCnt) {
   		for (let i = 0; i < numberOfStars; i++) {
   			aryStar[i] = new StarShape();
		}
   		changecount = 0;
   }
   

}

//Paint a Color 
function setRandomStroke() {
   	clrR = random(255);
   	clrG = random(255);
   	clrB = random(255);   
   	stroke(clrR,clrG,clrB);
   	fill(clrR,clrG,clrB);
}


class StarShape
{

   constructor () {
      this.angCount = 1;
      this.angStep = 0;
      this.lineColorR = random(255);
      this.lineColorG = random(255);
      this.lineColorB = random(255);
      this.lineWeight = 1;
      this.han = random(12,7);
      this.BaseAngle = 72;
      this.nextStart = random(50);   //First katamuki
      this.rotateSpeed = random(15,5);
      this.Xspeed = random(7,4);
      this.Yspeed = random(2,0.5);
      this.erase = 0;
      this.wait = random(75);
      
   	   this.BaseX = random(windowWidth,-150);
   	   this.BaseY = random(windowHeight,-50);
   }
   
   drawShape() {		
   		//this.angStep = 72; 
   	   //var idxH = 0;
   	   var x,y;

      if (this.wait <= 0) {   	   
   	  	   beginShape();
   		   for (var angl = 0;angl <= 720;angl += this.BaseAngle*2){
   		      x = this.BaseX + cos(radians(angl + this.nextStart)) * this.han;
      		   y = this.BaseY + sin(radians(angl + this.nextStart)) * this.han;
			   vertex(x,y);
	      }
         endShape(CLOSE);
      } else {
         this.wait--;
      }
      
		this.nextStart = this.nextStart + this.rotateSpeed;   // rotate Count
		this.BaseX+=this.Xspeed;
		this.BaseY+=this.Yspeed;
      /*
		beginShape();
		vertex(this.aryX[0],this.aryY[0]);
		vertex(this.aryX[2],this.aryY[2]);
		vertex(this.aryX[4],this.aryY[4]);
		vertex(this.aryX[1],this.aryY[1]);
		vertex(this.aryX[3],this.aryY[3]);
		endShape(CLOSE);
		*/

   }

   
}



