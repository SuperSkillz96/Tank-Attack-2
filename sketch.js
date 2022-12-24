var PLAY = 1;
var END = 0;
var gameState = PLAY;
var tank1_img, tank2_img;
var tank1, tank2;
var Edges;
var wall_Top, wall_Right, wall_Bottom, wall_Left;
var bullet_img, coin_img;
var score1 = 0
var score2 = 0
var bulletGroup;
var coinGroup;
var bulletPowerUpGroup;
var bullet, coin;
var tank1_bullet = 10;
var tank2_bullet = 10;
var bulletPowerUp_img, bulletPowerUp;
var boom_img, gameOver_img;
var gameOver;
var currentFrameCount = 0;
var currentFrameCount2 = 0;
var restart_img, restart;



function preload(){
  tank1_img = loadImage('tank1_img.png');
  tank2_img = loadImage('tank2_img.png');
  bullet_img = loadImage('bullet_img.png');
  coin_img = loadImage('coin_img.png')
  bulletPowerUp_img = loadImage('bulletPowerUp_img.png')
  boom_img = loadImage('boom_img.png');
  gameOver_img = loadImage('gameover_img.png');
  restart_img = loadImage('restart_img.png');
}

function setup() {
  createCanvas(1200, 600);

  Edges = createEdgeSprites();

  tank1 = createSprite(400, 100);
  tank1.addImage(tank1_img);
  tank1.scale = 0.1;
  tank1.addImage("boom", boom_img)

  tank2 = createSprite(500, 100);
  tank2.addImage(tank2_img);
  tank2.scale = 0.1;
  tank2.addImage("boom", boom_img)

  wall_Top = createSprite(500, 0, 1000, 10);
  wall_Top.shapeColor = 'red';

  wall_Right = createSprite(1000, 300, 5, 600);
  wall_Right.shapeColor = 'red';

  wall_Bottom = createSprite(500, 600, 1000, 10);
  wall_Bottom.shapeColor = 'red';

  wall_Left = createSprite(0, 300, 10, 600);
  wall_Left.shapeColor = 'red';

  wall1 = createSprite(150, 150, 5, 300);
  wall1.shapeColor = 'red';

  wall2 = createSprite(150, 500, 5, 200);
  wall2.shapeColor = 'red';

  wall3 = createSprite(300, 40, 5, 80);
  wall3.shapeColor = 'red';

  wall4 = createSprite(300, 262.5, 5, 75);
  wall4.shapeColor = 'red';

  wall5 = createSprite(300, 500, 5, 200);
  wall5.shapeColor = 'red';

  wall6 = createSprite(500, 225, 5, 150);
  wall6.shapeColor = 'red';

  wall7 = createSprite(600, 500, 5, 200);
  wall7.shapeColor = 'red';

  wall8 = createSprite(700, 500, 5, 200);
  wall8.shapeColor = 'red';
  
  wall9 = createSprite(850, 325, 5, 350);
  wall9.shapeColor = 'red';

  wall10 = createSprite(925, 112.5, 5, 225);
  wall10.shapeColor = 'red';

  wall11 = createSprite(200, 150, 300, 5);
  wall11.shapeColor = 'red';
  
  wall12 = createSprite(575, 150, 250, 5);
  wall12.shapeColor = 'red';

  wall13 = createSprite(775, 225, 150, 5);
  wall13.shapeColor = 'red';

  wall14 = createSprite(225, 225, 155, 5);
  wall14.shapeColor = 'red';

  wall15 = createSprite(125, 300, 155, 5);
  wall15.shapeColor = 'red';

  wall16 = createSprite(400,400, 200, 5);
  wall16.shapeColor = 'red';

  wall17 = createSprite(650, 400, 100, 5);
  wall17.shapeColor = 'red';

  wall18 = createSprite(925, 400, 150, 5);
  wall18.shapeColor = 'red';

  gameOver = createSprite(500, 250, 50, 50);
  gameOver.addImage(gameOver_img);
  gameOver.scale = 0.6;
  gameOver.visible = false;

  restart = createSprite(500, 400, 50, 50);
  restart.addImage(restart_img);
  restart.scale = 0.06;
  restart.visible = false;

  bulletGroup = new Group();
  bulletGroup2 = new Group();
  coinGroup = new Group();
  bulletPowerUpGroup = new Group()
  wallGroup = new Group();
  wallGroup.add(wall1);
  wallGroup.add(wall2);
  wallGroup.add(wall3);
  wallGroup.add(wall4);
  wallGroup.add(wall5);
  wallGroup.add(wall6);
  wallGroup.add(wall7);
  wallGroup.add(wall8);
  wallGroup.add(wall9);
  wallGroup.add(wall10);
  wallGroup.add(wall11);
  wallGroup.add(wall12);
  wallGroup.add(wall13);
  wallGroup.add(wall14);
  wallGroup.add(wall15);
  wallGroup.add(wall16);
  wallGroup.add(wall17);
  wallGroup.add(wall18);
  wallGroup.add(wall_Top);
  wallGroup.add(wall_Bottom);
  wallGroup.add(wall_Left);
  wallGroup.add(wall_Right);
  
  wallGroup.setColorEach('blue');
  if(bulletGroup.isTouching(wallGroup)){
    bulletGroup.clear();
  }

  var coin = createSprite(Math.round(random(10, 990)), Math.round(random(10, 590)))
  coin.addImage(coin_img);
  coin.scale = 0.1;
  coinGroup.add(coin)

}

function draw() {
  background('grey');
  
  fill('green')
    textSize(18)
    text('Player 1 Score: ' + score1, 1010, 30);
    text('Player 2 Score: ' + score2, 1010, 60);
    fill('black')
    text('Player 1 Bullets:' + tank1_bullet, 1010, 100)
    text('Player 2 Bullets:' + tank2_bullet, 1010, 130)
    fill('purple')
    text('Black: WASD', 1010, 170)
    text('Black: Shoot is Q', 1010, 200)
    fill('blue')
    text('Green: Arrows', 1010, 240)
    text('Green: Shoot is Space', 1010, 270)

  if (gameState===PLAY){

    tank1.collide(Edges);
    tank2.collide(Edges);

    tank1.collide(wallGroup);
    tank2.collide(wallGroup);

    //if(tank1.isTouching(coinGroup)) {
    //  score1 += 1
    //  coin.lifeTime = 0;
    //}

    if(keyDown(LEFT_ARROW)) {
      tank1.rotation -= 3
      tank1.velocityX = 0;
      tank1.velocityY = 0;
    }
    if(keyDown(RIGHT_ARROW)) {
      tank1.rotation +=3
      tank1.velocityX = 0;
      tank1.velocityY = 0;
    }
    if(keyDown(UP_ARROW)) {
      tank1.addSpeed(-0.4, tank1.rotation);
    }
    if(keyDown(DOWN_ARROW)) {
      tank1.addSpeed(0.4, tank1.rotation);
    }
    if(keyDown('w')) {
      tank2.addSpeed(0.4, tank2.rotation);
    }
    if(keyDown('s')) {
      tank2.addSpeed(-0.4, tank2.rotation);
    }
    if(keyDown('a')) {
      tank2.rotation -= 3
      tank2.velocityX = 0;
      tank2.velocityY = 0;
    }
    if(keyDown('d')) {
      tank2.rotation += 3
      tank2.velocityX = 0;
      tank2.velocityY = 0;
    }
    console.log(tank1.angle)

    if(tank1.isTouching(coinGroup) || tank2.isTouching(coinGroup)) {
      console.log("hello")
      coinGroup.destroyEach();
      var coin = createSprite(Math.round(random(10, 990)), Math.round(random(10, 590)))
      coin.addImage(coin_img);
      coin.scale = 0.1;
      coinGroup.add(coin);
    }

    if(wallGroup.isTouching(bulletGroup)) {
      //bulletGroup.remove(bullet);
      bulletGroup.setTintEach("red");
      bulletGroup.setVisibleEach(false);
      bulletGroup.remove(bullet);
    }

    if(tank1.isTouching(bulletPowerUpGroup)) {
      tank1_bullet += 3;
      bulletPowerUpGroup.destroyEach();
    }

    if(tank2.isTouching(bulletPowerUpGroup)) {
      tank2_bullet += 3;
      bulletPowerUpGroup.destroyEach();
    }

    if(bulletGroup.isTouching(tank2)) {
      tank2.changeImage("boom")
      gameState = END;
    }

    if(bulletGroup2.isTouching(tank1)) {
      tank1.changeImage("boom")
      gameState = END;
    }

    createBullet();
    createBulletPowerUp();

  }
  else if (gameState === END) {
    bulletGroup.destroyEach();
    gameOver.visible = true;
    restart.visible = true;

    if(mousePressedOver(restart)) {
      gamestate = PLAY;
      gameOver.visible = false;
      restart.visible = false;
      tank1_bullet = 10;
      tank2_bullet = 10;
      score1 = 0;
      score2 = 0;
      console.log('restart');
    }
  }
  
  drawSprites();
}

function createBullet() {
  if(keyDown('space') && tank1_bullet >= 1 && frameCount > currentFrameCount + 20) {
    currentFrameCount = frameCount;
    console.log(currentFrameCount);
    bullet = createSprite(tank1.x, tank1.y, 10, 10);
    bullet.addImage(bullet_img);
    bullet.addSpeed(-4, tank1.rotation);
    bullet.rotation = tank1.rotation + 180
    bullet.scale = 0.08;
    bulletGroup.add(bullet);
    tank1_bullet -= 1;
  }
  if(keyDown('q') && tank2_bullet >= 1 && frameCount > currentFrameCount2 + 20) {
    currentFrameCount2 = frameCount;
    bullet2 = createSprite(tank2.x, tank2.y, 10, 10);
    bullet2.addImage(bullet_img);
    bullet2.addSpeed(4, tank2.rotation);
    bullet2.rotation = tank2.rotation
    bullet2.scale = 0.08;
    bulletGroup2.add(bullet2);
    tank2_bullet -= 1;
  }
  //if(bullet.isTouching(wall2)) {
  //  bullet.lifeTime = 0;
  //}
}

function createBulletPowerUp() {
  if(frameCount % 500 == 0) {
    bulletPowerUp = createSprite(Math.round(random(10, 990)), Math.round(random(10, 590)));
    bulletPowerUp.addImage(bulletPowerUp_img);
    bulletPowerUp.scale = 0.08;
    bulletPowerUpGroup.add(bulletPowerUp);
  }
}