var ang;
var angStep;
var angCnt;
var han;
var mainwritedCaption;

let aryAngStep = [15,30,45,60,72,90,120];

let msObj = [];

function setup() {
	createCanvas(screen.width, screen.height);
   strokeWeight(1);

   noLoop();
   noFill();
   
   han = 200;
   ang = 0;
   mainwritedCaption = 0;
}

function draw() {
   background(255,235,235);
   stroke(150,125,125);
   translate(han+150,han+150);

//text(aryAngStep.length,0,0);   
   
	while (han > 50) {
   ellipse(0,0,han*2,han*2);  //Base circle
   
	for (var aryIDX = 0; aryIDX < aryAngStep.length
	                   ; aryIDX += 1) {
		
   		angStep = aryAngStep[aryIDX];
   		angCnt = int(360/angStep);

		//text("ang Step " + angStep ,160,220);

   		msObj[aryIDX] = new multiShape();
   		msObj[aryIDX].angle = angStep;
   		msObj[aryIDX].r = han;
   		msObj[aryIDX].writedCaption = mainwritedCaption;
      msObj[aryIDX].setPoint();
      mainwritedCaption = 1;

   		//stroke(255,50,50);
   		clrR = random(255);
   		clrG = random(255);
   		clrB = random(255);
   		stroke(clrR,clrG,clrB);
   
   		//-------------------------------------------------------   
      // draw Heading
   		fill(clrR,clrG,clrB);
	   strokeWeight(1);
		textSize(15);
		if (han <= 100) {
		   	text(int(360/angStep) + " square" , 320,-300+(20*aryIDX));
		} else {
   			text(int(360/angStep) + " square" ,-320,-300+(20*aryIDX));
   		}
   		noFill();

   		//-------------------------------------------------------   
      //draw shape
		msObj[aryIDX].lineColorR = clrR;
   		msObj[aryIDX].lineColorG = clrG;
   		msObj[aryIDX].lineColorB = clrB;
      msObj[aryIDX].angCount = angCnt;
      msObj[aryIDX].drawShape();
  
	}
	
	han = han / 2;

   }
}

class multiShape {

   constructor () {
      this.angCount = 1;
      this.sy = [];
      this.sx = [];
      this.lineColorR = 120;
      this.lineColorG = 120;
      this.lineColorB = 120;
      this.lineWeight = 2;
      this.angle = 1;
      this.r = 0;
      this.writedCaption = 0;
   }

   //---------------------------
   setPoint() {
//text("setpoint r " + this.r,160,-200);
      var wIDX = 0;
		for (var ang2 = 0;ang2 <= 360;ang2+=this.angle){
      		var y = sin(radians(ang2)) * this.r;
      		var x = cos(radians(ang2)) * this.r;
      		this.sx[wIDX] = x;
      		this.sy[wIDX] = y;
      		
			if (this.writedCaption == 0) {
        		line(x,y,0,0);
        		strokeWeight(1);
      			var wrk = "point (" + int(x) + " , " + int(y) + ")";
   		   		var sw = textWidth(wrk);
   		   		var sy = 8;
   		   		if (x < 0) { x = x - sw; }
        		if (y > 0) { y = y + sy; }
           		
           	text(wrk,x,y);
      		}
      		wIDX += 1;
		}
		
//text("ok",100,300);
   }

   //---------------------------
   drawShape () {
   		stroke(this.lineColorR,this.lineColorG,this.lineColorB);
   		strokeWeight(this.lineWeight);
   		for (var idx=0;idx<this.angCount;idx+=1) {
      		line(this.sx[idx],this.sy[idx],this.sx[idx+1],this.sy[idx+1]);
   		}

   }


}



