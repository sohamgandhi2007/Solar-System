var  sun, earth,mars,venus,mercury,jupiter,saturn,uranus;


function setup() {
    createCanvas(900,400);
    sun=createSprite(200, 200, 50, 80);
    mars= createSprite(600,200,80,50);
    venus= createSprite(400,200,80,50);
    earth= createSprite(500,200,80,50);
    mercury= createSprite(300,200,80,50);
    jupiter= createSprite(700,200,80,50);
    saturn= createSprite(800,200,80,50);
    uranus= createSprite(900,200,80,50);

    sun.shapeColor= "orange";
    mercury.shapeColor= "silver";
    venus.shapeColor= "red";
    earth.shapeColor= "blue";
    mars.shapeColor= "brown";
    jupiter.shapeColor= "green";
    saturn.shapeColor= "white";
    uranus.shapeColor= "yellow";

    sun.velocityX=-15;
  }
  function draw() {
    background("black");  
    
   if (istouching(sun,mercury)) {
      mercury.visible=false;     
}
   else{
     mercury.visible=true;
   }
   if (istouching(sun,venus)) {
    venus.visible=false;     
}
 else{
   venus.visible=true;
 }
  
 if (istouching(sun,earth)) {
    earth.visible=false;     
}
 else{
   earth.visible=true;
 }
 if (istouching(sun,mars)) {
    mars.visible=false;     
}
 else{
   mars.visible=true;
 }
 if (istouching(sun,jupiter)) {
    jupiter.visible=false;     
}
 else{
   jupiter.visible=true;
 }
 if (istouching(sun,saturn)) {
    saturn.visible=false;     
}
 else{
   saturn.visible=true;
 }
 if (istouching(sun,uranus)) {
    uranus.visible=false;     
}
 else{
   uranus.visible=true;
 }

    drawSprites();
  }


  