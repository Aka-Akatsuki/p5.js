var ang;
var angStep;
var angCnt;
var numberOfStars;
var changecount;
var nextStarCnt;
var aryStar = [];
var changeColorCnt;
let cSlider;
let cValue;

function setup() {
    //createCanvas(640, 480);
   createCanvas(windowWidth, windowHeight);
	strokeWeight(1);
    
   han = random(80,40);
   //noFill();
   //noStroke();
   
   frameRate(30);
   changecount = 0;
   nextStarCnt = 150;
   numberOfStars = 5;
   changeColorCnt = 0;
   
   for (let i = 0; i < numberOfStars; i++) {
   		aryStar[i] = new StarShape();
   }
   
	cValue = 0;

}

function draw() {
   //background(0,0,0);
   //look afterimage
   fill(0,20);
   noStroke();
	rect(0,0,windowWidth,windowHeight);
   
   stroke(150,125,125);
   	strokeWeight(1);
   	   	
   //Draw Stars
   	for (var idx = 0;idx < numberOfStars; idx++){
      //setRandomStroke();
      aryStar[idx].fillStarColor();
   	   	aryStar[idx].drawShape();
   	}

	//Reset and Create New Stars
	/*
   changecount++;
   if (changecount > nextStarCnt) {
   		for (let i = 0; i < numberOfStars; i++) {
   			aryStar[i] = new StarShape();
		}
   		changecount = 0;
   }
  */

}

function mousePressed(){
	if (cValue == 0) {
		cValue = 100;
	} else {
		cValue = 0;
	}
	//text("clicked",cValue,50);
}


function mouseClicked(){
	if (cValue == 0) {
		cValue = 100;
	} else {
		cValue = 0;
	}
	//text("clicked",cValue,50);
}


//Paint a new color 
function setRandomStroke() {
   	clrR = random(255);
   	clrG = random(255);
   	clrB = random(255);   
   	stroke(clrR,clrG,clrB);

	//Test alpha
	//fill(clrR,clrG,clrB);
	noStroke();

	starColor = color(clrR,clrG,clrB);
   	starColor.setAlpha(128 + 128 * sin(millis() / 1000));
   	fill(starColor);
}


//Star class
class StarShape
{

   constructor () {    
      this.colorR = random(255);
      this.colorG = random(255);
      this.colorB = random(255);
      
      this.lineWeight = 1;
      this.radius = random(12,7);
      this.BaseAngle = 72;
      this.nextStart = random(50);   //First katamuki
      
      this.rotateSpeed = random(15,5);
      this.Xspeed = random(7,4); 
      this.Yspeed = random(2,0.5); 
      this.brinkSpeed = random(2,0.5);
      //this.erase = 0;
      this.wait = random(30);
      
   	   this.BaseX = random(windowWidth/2,-1 * windowWidth / 3);  //center coordinates X
   	   this.BaseY = random(windowHeight/2,-1 * windowHeight / 3);  //center coordinates Y
   }
   
   drawShape() {		
   	   var x,y;
   	   
		//this.fillStarColor()

		if (this.BaseX > windowWidth) {
			this.BaseX = random(windowWidth/3,-150);
			this.wait = random(30);
		}
		
		if (this.BaseY > windowHeight) {
			this.BaseY = random(windowHeight/3,-50);
			this.wait = random(30);
		}
   	   

      if (this.wait <= 0) {   	   
   	  	   beginShape();
   		   for (var angl = 0;angl <= 720;angl += this.BaseAngle*2){
   		      x = this.BaseX + cos(radians(angl + this.nextStart)) * this.radius;
      		   y = this.BaseY + sin(radians(angl + this.nextStart)) * this.radius;
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

   fillStarColor() {

   		var clrR, clrG, clrB
   		clrR = random(255);
   		clrG = random(255);
   		clrB = random(255);   
   		stroke(clrR,clrG,clrB);

		//Test alpha
		//fill(clrR,clrG,clrB);
		noStroke();
      var starColor;
      if (cValue == 0) {
		starColor = color(clrR,clrG,clrB);    //several Color
		} else {
   		starColor = color(this.colorR,this.colorG,this.colorB);   //one Color
   		}

   		starColor.setAlpha(128 + 128 * sin(millis() / 1000 / this.brinkSpeed) );
   		fill(starColor);
	}
	

}



