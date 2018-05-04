
var screenWidth;
var screenHeight 

var startingWidth = window.innerWidth;
var startingHeight = window.innerHeight;

var widthRatio = startingWidth/800;
var heightRatio = startingHeight/500;

  if (widthRatio < heightRatio) {
    screenHeight = (widthRatio/heightRatio) * startingHeight;
    screenWidth = startingWidth;
  } else {
    screenWidth = (heightRatio/widthRatio) * startingWidth;
    screenHeight = startingHeight;
  }

var widthRata = screenWidth/800;
var heightRata = screenHeight/500;