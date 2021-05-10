var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,400);

    //create 4 different surfaces
  surface1 = createSprite(0,400,200,20);
  surface1.shapeColor = "green";
  surface2 = createSprite(200,400,200,20);
  surface2.shapeColor = "red";
  surface3 = createSprite(400,400,200,20);
  surface3.shapeColor = "yellow";
  surface4 = createSprite(600,400,200,20);
  surface4.shapeColor = "purple";



    //create box sprite and give velocity
    box = createSprite(200,200,40,40);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite

    edges = createEdgeSprites();

    //add condition to check if box touching surface and make it box

    if(box.isTouching(surface1)){
        box.shapeColor = "green";
    }
    if(box.isTouching(surface2) ){
        box.shapeColor = "red";
    }
    if(box.isTouching(surface3)){
        box.shapeColor = "yellow";
    }
    if(box.isTouching(surface4)){
        box.shapeColor = "purple";
    }
   
    box.bounceOff(edges);
    

}
