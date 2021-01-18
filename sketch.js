var Cat
var CatImg1, CatImg2, CatImg3, CatImg4
var mouse
var mouseImg1, mouseImg2, mouseImg3, mouseImg4
function preload() {
    
    CatImg1 = loadImage("tomOne.png");
    CatImg2 = loadImage("tomTwo.png");
    CatImg3 = loadImage("tomThree.png");
    CatImg4 = loadImage("tomFour.png");

    mouseImg1 = loadImage("jerryOne.png");
    mouseImg2 = loadImage("jerryTwo.png");
    mouseImg3 = loadImage("jerryThree.png");
    mouseImg4 = loadImage("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    Cat = createSprite(100,50,20,20)
    Cat.addImage(CatImg1);

    mouse = createSprite(10,20,20,20);
    mouse.addImage(mouseImg1);

}

function draw() {

    background("garden.png");
    Text(mouseX + ',' + mouseY,10 ,45);
    
    if(Cat.x - mouse.x < (Cat.width - mouse.width)/2) {
        Cat.velocityX = 0;
        Cat.addAnimation("catLastImage", CatImg3);
        Cat.changeAnimation("catLastImage");
    }
    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW )  {
        Cat.velocityX = -5;
        Cat.addAnimation("catRunning", CatImg2);
        Cat.changeAnimation("catRunning");
    }
  


}
