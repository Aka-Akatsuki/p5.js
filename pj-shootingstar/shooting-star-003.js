var ang;
var angStep;
var angCnt;
var numberOfStars;
var changecount;
var nextStarCnt;
var aryStar = [];

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
   nextStarCnt = 100;
   numberOfStars = 10;
   
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
      this.aryY = [];
      this.aryX = [];
      this.lineColorR = random(255);
      this.lineColorG = random(255);
      this.lineColorB = random(255);
      this.lineWeight = 1;
      this.han = random(15,8);
      this.BaseAngle = 72;
      this.DiffX = random(200,-250);
      this.DiffY = random(200,-250);
      this.nextStart = random(50);
      
   	   this.BaseX = random(windowWidth);
   	   this.BaseY = random(windowHeight);
   }
   
   drawShape() {		
   		//this.angStep = 72; 
   	   //var idxH = 0;
   	   var x,y;

   		beginShape();
   		for (var angl = 0;angl <= 720;angl += this.BaseAngle*2){
   		   x = this.BaseX + cos(radians(angl + this.nextStart)) * this.han;
      		y = this.BaseY + sin(radians(angl + this.nextStart)) * this.han;
			vertex(x,y);
	   }
      endShape(CLOSE);
		this.nextStart++;   // rotate Count
		
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



