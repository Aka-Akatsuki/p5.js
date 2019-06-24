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
   createCanvas(screen.width, screen.height);
	strokeWeight(1);
    
   han = random(150,80);
   noFill();
   //noLoop();
   frameRate(20);
   changecount = 0;
   nextStarCnt = 40;
   numberOfStars = 10;
   
   for (let i = 0; i < numberOfStars; i++) {
   		aryStar[i] = new StarShape();
   }

}

function draw() {
   //background(255,235,235);
   background(0,0,0);

   stroke(150,125,125);
   //translate(han+150,han+150);  
   
   //setRandomStroke();
   	
	//Pentagon
   	strokeWeight(2);
   	   	
   //Star

   setRandomStroke();
	//let shtStar = new StarShape();
   	//shtStar.drawShape();

   	for (var idx = 0;idx < numberOfStars; idx++){
   		aryStar[idx].drawShape();
   	}
   	
   changecount++;
   if (changecount > nextStarCnt) {
   		for (let i = 0; i < numberOfStars; i++) {
   			aryStar[i] = new StarShape();
		}
   		changecount = 0;
   }
   

}

function setRandomStroke() {
   	clrR = random(255);
   	clrG = random(255);
   	clrB = random(255);   
   	stroke(clrR,clrG,clrB);
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
      this.han = random(30,20);
      this.BaseAngle = 72;
      this.DiffX = random(200,-250);
      this.DiffY = random(200,-250);
      this.nextStart = random(50);
      
   	   this.BaseX = random(screen.width);
   	   this.BaseY = random(screen.height);
   }

   drawShape() {
		//ellipse(0,0,han*2,han*2);  //Base circle
		
   		this.angStep = 72; //aryAngStep[aryIDX];
   		//this.angCnt = 5 ;

   		//this.aryX = [];
 		//this.aryY = [];
   	   var idxH = 0;
   	   var x,y;
   
   		for (var angl = 0;angl <= 360;angl += this.BaseAngle){
      		y = this.BaseY + sin(radians(angl + this.nextStart)) * this.han;
      		x = this.BaseX + cos(radians(angl + this.nextStart)) * this.han;

      		this.aryX[idxH] = x //+ this.DiffX;
      		this.aryY[idxH] = y //+ this.DiffY;
      		
      		idxH += 1;
      		//text(this.angStep,0,0);
	   }
/*
      line(this.aryX[0],this.aryY[0],this.aryX[2],this.aryY[2]);
   		line(this.aryX[2],this.aryY[2],this.aryX[4],this.aryY[4]);
   		line(this.aryX[4],this.aryY[4],this.aryX[1],this.aryY[1]);
   		line(this.aryX[1],this.aryY[1],this.aryX[3],this.aryY[3]);
   		line(this.aryX[3],this.aryY[3],this.aryX[0],this.aryY[0]);
*/
		beginShape();
		vertex(this.aryX[0],this.aryY[0]);
		vertex(this.aryX[2],this.aryY[2]);
		vertex(this.aryX[4],this.aryY[4]);
		vertex(this.aryX[1],this.aryY[1]);
		vertex(this.aryX[3],this.aryY[3]);
		endShape(CLOSE);
		
      this.nextStart++;
      
   }

}



