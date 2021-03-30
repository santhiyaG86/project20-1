var bac 
var tom,jerry
function preload() {
    //load the images here
    
    bac=loadImage("images/garden.png")
    tomimg=loadAnimation("images/cat2.png","images/cat3.png")
    jerryimg=loadImage("images/mouse1.png")
    tomImg3=loadImage("images/cat4.png");
    jerryImg3=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg4=loadImage("images/mouse4.png")
    tomImg4=loadImage("images/cat1.png")
  
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tomrunning",tomimg);
    tom.scale=0.2
    jerry = createSprite(200, 600);
    jerry.addImage("jerryStanding", jerryimg);
    jerry.scale = 0.15;


}

function draw() {

    background(bac);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) 
{ tom.velocityX=0;
 tom.addImage("tomLastImage", tomImg3); 
 tom.changeAnimation("tomLastImage")
tom.x =300; 
tom.scale=0.2; 
tom.addImage("tomLastImage"); 
jerry.addImage("jerryLastImage", jerryImg3); 
jerry.scale=0.15;
jerry.changeAnimation("jerryLastImage"); 

 }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){ 
    tom.velocityX = -5; 
    tom.addAnimation("tomrunning", tomimg);
    tom.changeAnimation("tomrunning"); 
     jerry.addImage("jerryTeasing", jerryImg4); 
     jerry.frameDelay = 25; 
     jerry.changeAnimation("jerryTeasing"); 
}


}
