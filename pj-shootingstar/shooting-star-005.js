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
let befmouseX;

var slider;
var maxOfStars;

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
   numberOfStars = 7;
   changeColorCnt = 0;
   maxOfStars = 50;

	//Create Star class
   for (let i = 0; i < numberOfStars; i++) {
   		aryStar[i] = new StarShape();
   }
   
	cValue = 0;
	befmouseX = -100
	
   slider = createSlider(1, maxOfStars, numberOfStars);  //0:最小値、最大値、初期値
   slider.style('width', '200px');
   slider.position(windowWidth - 250,50);


}

function draw() {

	//---  Make the background color black. ---//
   //background(0,0,0);
   fill(0,20);
   noStroke();
	rect(0,0,windowWidth,windowHeight);
   
//   stroke(150,125,125);
   	strokeWeight(1);
   	   	
   stroke(255);
   //text(slider.value(),windowWidth - 100,10);
   	if (numberOfStars != slider.value() ) {  	   numberOfStars = slider.value() ;
      for (let i = 0; i < numberOfStars; i++) {
    		aryStar[i] = new StarShape();
      }
   }
   	   	

   //---  Draw Stars. ---//
   	for (var idx = 0;idx < numberOfStars; idx++){
      //setRandomStroke();
      aryStar[idx].fillStarColor();
   	   	aryStar[idx].drawShape();
   	}


   //--- Support for mouseclicked event not working on iOS ---//
   if (mouseX != befmouseX) {
		if (cValue == 0) {
			cValue = 100;
		} else {
			cValue = 0;
		}
	   	befmouseX = mouseX;
	}

}

/*
--- Pc browser mouseclicked event does not work after adding this event ---
function mousePressed(){
	if (cValue == 0) {
		cValue = 100;
	} else {
		cValue = 0;
	}
	//text("clicked",cValue,50);
}

function touchStarted() {
	if (cValue == 0) {
		cValue = 100;
	} else {
		cValue = 0;
	}
	//text("clicked",cValue,50);

}
*/

function mouseClicked(){
	if (cValue == 0) {
		cValue = 100;
	} else {
		cValue = 0;
	}
	//text("clicked",cValue,50);
}


//--- No uesed.     Paint a new color ---//
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
      this.nextStart = random(50);   //Initial value of tilt angle
      
      this.rotateSpeed = random(15,5);
      this.Xspeed = random(7,4); 
      this.Yspeed = random(2,0.5); 
      this.brinkSpeed = random(2,0.5);
      //this.erase = 0;
      this.wait = random(30);
      
   	   this.BaseX = random(windowWidth/2,-1 * windowWidth / 3);  //center coordinates X
   	   this.BaseY = random(windowHeight/2,-1 * windowHeight / 3);  //center coordinates Y
   }
   
	//---  Draw Star shape. ---//
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
      
		this.nextStart = this.nextStart + this.rotateSpeed;   // 
		this.BaseX+=this.Xspeed;
		this.BaseY+=this.Yspeed;

   }

   //--- coloring in star. ---//
   fillStarColor() {

   		var clrR, clrG, clrB
   		clrR = random(255);
   		clrG = random(255);
   		clrB = random(255);   
   		
		// ver.5 chaneged 
   		//stroke(clrR,clrG,clrB);
		//fill(clrR,clrG,clrB);
		
		noStroke();
      var starColor;
      if (cValue == 0) {
			starColor = color(clrR,clrG,clrB);    //many colors
		} else {
   			starColor = color(this.colorR,this.colorG,this.colorB);   //one Color
   		}
   		
		//--- Make the star's orbit disappear and disappear. ---//
   		starColor.setAlpha(128 + 128 * sin(millis() / 1000 / this.brinkSpeed) );
   		fill(starColor);
	}
	

}



