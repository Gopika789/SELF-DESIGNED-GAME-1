var backgroundImg, bg;
var astronaut, astronautImg;
var star, starImg
var invisibleGround;
var rock, rockImg;
var spaceCraft, spaceCraftImg;
var life1, life2, life3, life1Img, life2Img, life3Img;
var score = 0;

function preload(){
  backgroundImg = loadImage("assets/bgImg.webp");
  starImg = loadImage("assets/star.png");
  astronautImg = loadImage("assets/astronaut.png")
  rockImg = loadImage("assets/rock.png");
  life1Img = loadImage("assets/heart_1.png");
  life2Img = loadImage("assets/heart_2.png");
  life3Img = loadImage("assets/heart_3.png");
  spaceCraftImg = loadImage("assets/spacecraft.png");
}

function setup(){
createCanvas(900,400);
createSprite(400, 200, 50, 50);
bg = createSprite(500,190,10,20);
bg.addImage(backgroundImg);
bg.scale= 0.5

astronaut = createSprite(600,300,50,50);
astronaut.addImage(astronautImg);
astronaut.scale = 0.7 

life1 = createSprite(300,50,20,20);
life1.addImage(life1Img);
life1.scale = 0.2 
life1.visible = false

life2 = createSprite(300,50,20,20);
life2.addImage(life2Img);
life2.scale = 0.2 
life2.visible = false

life3 = createSprite(300,50,20,20);
life3.addImage(life3Img);
life3.scale = 0.2

invisibleGround = createSprite(430,400,940,50);
invisibleGround.visible = false

starGroup = new Group
rockGroup = new Group
spaceCraftGroup = new Group
}

function draw(){
  background(0);
  console.log(frameCount);
  astronaut.x = World.mouseX;
  
 if(starGroup.isTouching(astronaut)){
   starGroup.destroyEach();
 score +=1
  }
 
  if(starGroup.isTouching(invisibleGround)){
    starGroup.destroyEach();
      score -=1
  }

  if(astronaut.isTouching(rockGroup)){
    rockGroup.destroyEach();
    starGroup.destroyEach();
    score -=1
  }

  if(spaceCraftGroup.isTouching(astronaut)){
  spaceCraftGroup.destroyEach();
  score -=1
 }

  spawnRocks();
  spawnStars();
  spawnSpacecrafts()
  drawSprites();

  textSize(20);
  fill("pink");
  text("Score:" + score, 100,100);
}

function spawnStars(){
  if(frameCount % 100 === 0){
    star = createSprite(400,700,30,30)
    star.addImage(starImg);
    star.scale = 0.2
    star.velocityY = +5
    star.y = random(10,99);
    star.lifetime = 150; 
    starGroup.add(star);
  }
}

function spawnRocks(){
  if(frameCount % 200 === 0){
    rock = createSprite(300,100,30,30)
    rock.addImage(rockImg);
    rock.scale = 0.1
    rock.velocityY = +5
    rock.y = random(20,80);
    rock.lifetime = 150
    rockGroup.add(rock);
  }
}

 function spawnSpacecrafts(){
  if(frameCount % 100 === 0){
    spaceCraft = createSprite(500,50,10,10);
    spaceCraft.addImage(spaceCraftImg);
    spaceCraft.scale = 0.2
    spaceCraft.velocityY = +5
    spaceCraft.y = random(10,90);
    spaceCraft.lifetime = 150;
    spaceCraftGroup.add(spaceCraft)
    }
}


  