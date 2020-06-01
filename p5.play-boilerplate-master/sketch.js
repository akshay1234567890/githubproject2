var movingrect,fixedrect,box,box1;
function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 100, 50,100);
  fixedrect = createSprite(400,400,80,50);
  box = createSprite(400,100,50,80);
  box1 = createSprite(400,300,100,50);
 movingrect.shapeColor="green";
 fixedrect.shapeColor="blue";
 box.shapeColor = "cyan";
 box1.shapeColor = "orange"
}

function draw() {
  background(255,255,255); 
  box.x=World.mouseX;
  box.y=World.mouseY;
  
  movingrect.velocityY=3;                                                     
  fixedrect.velocityY= -3;
  if(istouching(box,box1)){
    box.shapecolor = "red";
    box1.shapeColor = "red";


  }
  else{

    box.shapeColor = "cyan";
    box1.shapeColor = "orange"
  

  }
    
   if(bounceOff(movingrect,fixedrect))


  drawSprites();
}
