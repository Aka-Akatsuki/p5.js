let befmouseX;

let mainTitle = 'Font Numbers SLOT';
let titlePointY = 50;

let NO1_PointX = 200;
let NO2_PointX = 400;
let NO3_PointX = 600;
let NO_PointY = 400;


let titleFontsize = 30;
let numberFontsize = 200;

let maxthreshold = 20;
let minthreshold = 10;


let NO1, NO2, NO3;
let stopedNO1, stopedNO2, stopedNO3;
let thresholdNO1, thresholdNO2, thresholdNO3;

function setup() {
   createCanvas(windowWidth, windowHeight);

   frameRate(10);

   	NO1 = int(random(0,9)); 
   	NO2 = int(random(0,9));
   	NO3 = int(random(0,9));
   	
   stopedNO1 = 0;  stopedNO2 = 0;  stopedNO3 = 0;
   befmouseX = 0;

   thresholdNO1 = int(random(minthreshold, maxthreshold));
   thresholdNO2 = int(random(minthreshold, maxthreshold));
   thresholdNO3 = int(random(minthreshold, maxthreshold));
   thresholdNO2 += thresholdNO1;
   thresholdNO3 += thresholdNO2;
      
}

function draw() {
   background(255,255,225);
   stroke(150,125,125);
      
   strokeWeight(2);
   textSize(titleFontsize);
   //textStyle(BOLDITALIC);
   text(mainTitle, (windowWidth - textWidth(mainTitle)) / 2 , 
                     windowHeight / 10);

   //NO Displayed
   textSize(numberFontsize);
   text(NO1,NO1_PointX,NO_PointY);
   text(NO2,NO2_PointX,NO_PointY);
   text(NO3,NO3_PointX,NO_PointY);
   
   if (stopedNO1 == 0) {
      NO1 += 1;
      if (NO1 > 9) {NO1 = 0;}
   }
   else {
      thresholdNO1 -= 1;
      if (thresholdNO1 > 0) { 
         NO1 += 1;
         if (NO1 > 9) {NO1 = 0;}
      }
   }

   if (stopedNO2 == 0) {
      NO2 += 1;
      if (NO2 > 9) {NO2 = 0;}
   }
   else {
      thresholdNO2 -= 1;
      if (thresholdNO2 > 0) { 
         NO2 += 1;
         if (NO2 > 9) {NO2 = 0;}
      }
  }   
   
   if (stopedNO3 == 0) {
      NO3 += 1;
      if (NO3 > 9) {NO3 = 0;}
   }
   else {
      thresholdNO3 -= 1;
      if (thresholdNO3 > 0) { 
         NO3 += 1;
         if (NO3 > 9) {NO3 = 0;}
      }
  }   

   

    
   //--- Support for mouseclicked event not working on iOS ---//
   if (mouseX != befmouseX) {
      stopedNO1 = 1;
      stopedNO2 = 1;
      stopedNO3 = 1;
      
	   //	befmouseX = mouseX;
	}

   // debug  
   /*
   textSize(10);
   text(thresholdNO1,10,20);
   */
   

}


//--------------------------------------
function mouseClicked(){
   stopedNO1 = 1;

}




