
var tom, tomImage1, tomImage2, tomRun;
var jerry, jerryImage1, jerryImage2, jerryImage3;
var backgroundImage, b1;



function preload() {
    //load the images here

    backgroundImage = loadImage("images/garden.png");
    tomImage1 = loadImage("images/cat1.png");
    jerryImage1 = loadImage("images/mouse2.png");
    tomRun = loadAnimation("images/cat2.png","images/cat3.png");
    tomImage2 = loadImage("images/cat4.png");
    jerryImage2 = loadImage("images/mouse3.png");
    jerryImage3 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);

    b1 = createSprite(300,300,500,1300);
    b1.scale = 1.2;
    b1.addImage(backgroundImage);
    

    //create tom and jerry sprites here

    tom = createSprite(650,500,20,20);
    tom.addImage(tomImage1);
    tom.changeAnimation("catLast",tomImage2);
    tom.addAnimation("running",tomRun);
    
    tom.scale = 0.1;

    jerry = createSprite(130,500,20,20);
    jerry.scale = 0.1;
    jerry.addImage(jerryImage2);
    jerry.addImage(jerryImage1);

    

    


}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide

    if(keyDown("Left_Arrow")){
        tom.velocityX = -3;
        tom.changeAnimation("running",tomRun);
        jerry.changeImage(jerryImage2);
    }

  /*  if( tom.x - jerry.x < (tom.width - jerry.width)/2){

        tom.velocityX = 0;
        tom.changeAnimation("catLast");
      
    }*/

    if(tom.isTouching(jerry)){
        tom.velocityX = 0;
        tom.addImage(tomImage2);
    }
   
  



  //  keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(tom.x - jerry.x > jerry.width/2 + tom.width/2 && jerry.x - tom.x > tom.width/2 + jerry.width/2){
      tom.velocityX = 0;
  }
  

}
