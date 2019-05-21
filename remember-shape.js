var ang;
var angStep;
var angCnt;

let aryX = [];
let aryY = [];
let aryAngStep = [15,30,45,60,72,90,120];

function setup() {
   //size(screen.width, screen.height);
    //createCanvas(640, 480);
    createCanvas(screen.width, screen.height);

   //aryX = new var[10];
   //aryY = new var[10];
   ang = 0;

   //background(255,204,0);

   noFill();
   han = 200;
   idx = 0;

   noLoop();
}

function draw() {
   background(255,235,235);
   stroke(150,125,125);

   translate(han+150,han+150);
   ellipse(0,0,han*2,han*2);  //Base circle
   
	for (var aryIDX=0;aryIDX<=6;aryIDX+=1) {
   		angStep = aryAngStep[aryIDX];
   		angCnt = int(360/angStep);

   		aryX = [];
   		aryY = [];
   		idx = 0;
   

   		for (var ang2 = 0;ang2 <= 360;ang2+=angStep){
      		y = sin(radians(ang2)) * han;
      		x = cos(radians(ang2)) * han;
      
      		aryX[idx] = x;
      		aryY[idx] = y;

      		if (aryIDX==0) {
        		line(x,y,0,0);
        		wrk = "point (" + int(x) + " , " + int(y) + ")";
        		
        		if (x < 0) {
        		   sw = textWidth(wrk);
           		text(wrk,x - sw,y);
        		} else {
           		text(wrk,x,y);
        		}
      		}
      		idx += 1;
   
    	}

   stroke(255,50,50);
   clrR = random(255);
   clrG = random(255);
   clrB = random(255);

   //drawLine();
   
   stroke(clrR,clrG,clrB);
   
   //text(aryIDX,-300,-300+(20*aryIDX));
	//text(angStep,-270,-300+(20*aryIDX));
	textSize(15);
   text(int(360/angStep) + " square" ,-320,-300+(20*aryIDX));

   for (idx=0;idx<angCnt;idx+=1) {
      line(aryX[idx],aryY[idx],aryX[idx+1],aryY[idx+1]);
   }

	}


}





