var bg;
var bgimg;
var playerjet,playerjetimg;


function preload(){
bgimg=loadImage("image/space.png")
playerjetimg=loadAnimation("image/jet1.png","image/jet2.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
//bg= createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
//bg.addImage("bg",bgimg)
//bg.velocityY=3;


playerjet = createSprite(windowWidth/2,windowHeight-100);
playerjet.addAnimation("playerjet",playerjetimg)
}

function draw() {
  background(0);  
  drawSprites();

  if(bg.y>height){
    bg.y=0;
   }
}