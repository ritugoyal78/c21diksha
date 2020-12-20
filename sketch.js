var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(1000,100,80,30);
  car.shapeColor="blue"
  wall=createSprite(1000,700,80,30);
  car.velocityY=3
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

/* if(isTouching(car,wall)){
 wall.shapeColor = "red";
 // fixedRect.shapeColor = "red";
}
else{
  wall.shapeColor = "green";
 // fixedRect.shapeColor = "green";
}*/
 bounceOff(car,wall)
  drawSprites();
}



