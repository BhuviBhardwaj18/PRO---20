var bgImg;
var cat;
var mouse;


function preload() {
 
    bgImg = loadImage("images/garden.png");

    cat1Image = loadImage("images/cat1.png");
    cat2Image = loadImage("images/cat2.png");
    cat3Image = loadImage("images/cat3.png");
    cat4Image = loadImage("images/cat4.png");

mouse1Image = loadImage("images/mouse1.png");
mouse2Image = loadImage("images/mouse2.png");
mouse3Image = loadImage("images/mouse3.png");
mouse4Image = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
cat = createSprite(800,600);
cat.addAnimation("catSitting", cat1Image);
cat.scale = 0.2;

mouse = createSprite(100,600);
mouse.addAnimation("mouseSitting", mouse1Image);
mouse.scale = 0.2;


}

function draw() {

    background(bgImg);
  
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage", cat4Image);
        cat.changeAnimation("catLastImage");
        cat.x = 300;
        cat.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouse2Image);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

cat.velocityX = -5;


  }


}
