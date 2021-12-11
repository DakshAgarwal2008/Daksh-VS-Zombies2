var bgImg;
var zombie1Img,zombie2Img,zombie3Img,zombie4Img,zombie5Img,sheriffImg,daggerImg;
var dagger,sheriff;
var zombie1group;
var zombie2group;
var zombie3group;var zombie4group;var zombie5group;
var score;

function preload(){
    bgImg = loadImage("background.jpg");
    zombie1Img = loadImage("zombie1.png");
    zombie2Img = loadImage("zombie2.png");
    zombie3Img = loadImage("zombie3.png");
    zombie4Img = loadImage("zombie4.png");
    zombie5Img = loadImage("zombie5.png");
    sheriffImg = loadImage("sheriff.png");
    daggerImg  = loadImage("dagger.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    var sheriff = createSprite(775,600);
    sheriff.addImage(sheriffImg);
    sheriff.scale = 0.1;
   
zombie1Group = createGroup();
zombie2Group = createGroup();
zombie3Group = createGroup();
zombie4Group = createGroup();
zombie5Group = createGroup();
daggerGroup = createGroup();
dagger2Group = createGroup();
score = 0;
  
}
function draw(){
    background(bgImg);
    textSize(50);
    fill("yellow");
    text("Score: "+ score, 500,50);
    

    if(keyDown("LEFT_ARROW")){
      dagger();
    }
    if(keyDown("RIGHT_ARROW")){
      dagger2();
    }

    if(dagger2Group.isTouching(zombie1Group)){
       dagger2Group.destroyEach();
       zombie1Group.destroyEach();
       score = score + 2;
    }
    
    if(daggerGroup.isTouching(zombie2Group)){
      daggerGroup.destroyEach();
      zombie2Group.destroyEach();
      score = score + 1;
   }
   
   if(dagger2Group.isTouching(zombie3Group)){
      dagger2Group.destroyEach();
      zombie3Group.destroyEach();
      score = score + 5;
   }
   
   if(daggerGroup.isTouching(zombie4Group)){
      daggerGroup.destroyEach();
      zombie4Group.destroyEach();
      score = score + 3;
   }
   
   if(dagger2Group.isTouching(zombie5Group)){
      dagger2Group.destroyEach();
      zombie5Group.destroyEach();
      score = score + 2;
   }

   if(score===50){

   }
    zombie1();
    zombie2();
    zombie3();
    zombie4();
    zombie5();
     


    drawSprites();
}

function zombie1(){
 if (frameCount % 200 === 0){
    var zombie = createSprite(Math.round(random(1300,1500)),600,100,100);
    zombie.velocityX = -2;
     zombie.scale = 0.25;
    if(score>=50){
       zombie.velocityX = zombie.velocityX - 50;
    }
    //no tooth zombie
     zombie.addImage(zombie1Img);
     zombie.debug = true;
     zombie.setCollider("rectangle",0,0,400,400);
     zombie1Group.add(zombie);
  }
}
function zombie2(){
    if (frameCount % 230 === 0){
       var zombie2 = createSprite(Math.round(random(100,300)),600,100,100);
       zombie2.velocityX = 2;
        zombie2.scale = 0.25;
       //one eyed zombie
        zombie2.addImage(zombie2Img);
        zombie2.debug = true;
        zombie2.setCollider("rectangle",0,0,400,400);
        zombie2Group.add(zombie2);
     }
   }
   function zombie3(){
    if (frameCount % 250 === 0){
       var zombie3 = createSprite(Math.round(random(1100,1500)),600,100,100);
       zombie3.velocityX = -5;
        zombie3.scale = 0.25;
       //huge zombie
        zombie3.addImage(zombie3Img);
        zombie3.debug = true;
        zombie3.setCollider("rectangle",0,0,400,400);
        zombie3Group.add(zombie3);
     }
   }
   function zombie4(){
    if (frameCount % 170 === 0){
       var zombie4 = createSprite(Math.round(random(100,300)),600,100,100);
       zombie4.velocityX = 2;
        zombie4.scale = 0.25;
       //plantsvszombie zombie
        zombie4.addImage(zombie4Img);
        zombie4.debug = true;
        zombie4.setCollider("rectangle",0,0,300,300);
        zombie4Group.add(zombie4);
     }
   }
   function zombie5(){
    if (frameCount % 215 === 0){
       var zombie5 = createSprite(Math.round(random(1300,1500)),600,100,100);
       zombie5.velocityX = -2;
        zombie5.scale = 0.25;
       //hammer in his head
        zombie5.addImage(zombie5Img);
        zombie5.debug = true;
        zombie5.setCollider("rectangle",0,0,400,400);
        zombie5Group.add(zombie5);
     }
   }
   function dagger(){
      var dagger = createSprite(775,600);
      dagger.addImage(daggerImg);
      dagger.scale = 0.25;
      dagger.velocityX = -4;
      dagger.debug = true;
      dagger.setCollider("rectangle",0,0,350,350);
      daggerGroup.add(dagger);
      
      
   }
   function dagger2(){
     var dagger2 = createSprite(775,600);
      dagger2.addImage(daggerImg);
      dagger2.scale = 0.25;
      dagger2.velocityX = 4;
      dagger2.debug = true;
      dagger2.setCollider("rectangle",0,0,350,350);
      dagger2Group.add(dagger2);
      
   }
   
