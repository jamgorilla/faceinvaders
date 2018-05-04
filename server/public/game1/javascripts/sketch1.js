var ship;
var power;
var boss;
var invaders = [];
var fires = [];
var enemyfires = [];
var delay = 0;
var ran = Math.random()*10000;
var img;
var fireUpgrade = false;
var play = 0;
var play2 = 0;
var endScreen = 0;
var waveNum = 1;
var stars = [];
var rocks = [];
var dropEnemies = [];
var drop2Count = 5;
var gif;
var minions = [];
var downUp = 0;
var wait = 0;
var endVideo;
var myBlue;

function preload() {
  myRed = loadImage('game1/images/jam_army.png');
  myGreen = loadImage('game1/images/kar_army2.png');
  myPurple = loadImage('game1/images/purple.png');

  //ship2 = loadImage('game1/images/spaceship.png');
  explosion = loadImage('game1/images/explosion-1.png');
  flower = loadImage('game1/images/flower.png');
  trump1 = loadImage('game1/images/trump1.png');
  trump2 = loadImage('game1/images/trump2.png');
  gameOver = loadImage('game1/images/game_over.png');
  youSuck = loadImage('game1/images/you_suck.png');
  star1 = loadImage('game1/images/star1.png');
  rock1 = loadImage('game1/images/rock1.png');
  rock2 = loadImage('game1/images/rock2.png');
  rock3 = loadImage('game1/images/rock3.png');
  rock4 = loadImage('game1/images/rock4.png');
  rockmonster = loadImage('game1/images/rock_monster.png');
  crabman = loadImage('game1/images/enemy1.png');
  minionEn = loadImage('game1/images/jamie_alien.png');
  gif = loadGif('game1/images/big_boss1.gif');
  explode_fire = loadGif('game1/images/Explode_fire.gif');
  whiteGlow = loadImage('game1/images/white_glow.png');
  whiteCrab = loadImage('game1/images/crabman_white.png');
  projectile1 = loadImage('game1/images/proj1.png');


  boss_laser = loadSound('game0/sounds/boss_laser.mp3');
  boss_explodes = loadSound('game0/sounds/boss_explodes.mp3');
  zap1 = loadSound('game0/sounds/zap1.mp3');
  zap2 = loadSound('game0/sounds/zap2.mp3');
  zap3 = loadSound('game0/sounds/zap3.mp3');
  upgrade1 = loadSound('game0/sounds/upgrade1.mp3');
  heavyLaser = loadSound('game0/sounds/heavy_laser.mp3');
  tune = loadSound('game0/sounds/Platformer2.mp3');
  fall = loadSound('game0/sounds/end_fall.mp3');
  resist = loadSound('game0/sounds/error.mp3');
  dragonfood = loadSound('game0/sounds/Dragonfood.mp3');
  loser_wind = loadSound('game0/sounds/loser_wind.mp3');
  keyboard_typing = loadSound('game0/sounds/keyboard.mp3');
}



function setup() {
  createCanvas(screenWidth, screenHeight); 
  ship = new Ship();
  
  power = new Power(Math.random()* (770*widthRata - 30*widthRata)+30*widthRata,0);
   
  var j = 0;
  var p = 0;
  for (var i = 0;i < 18; i++){
    if (i < 6) {
      invaders[i] = new Invader(i*80*widthRata+80*widthRata, 20*heightRata);
    } else if (i < 12) {
      invaders[i] = new Invader(j*80*widthRata+80*widthRata, 80*heightRata); 
      j++;
    } else {
      invaders[i] = new Invader(p*80*widthRata+80*widthRata, 140*heightRata); 
      p++;
    }
  }
  boss = new BigBoss();
  //minion = new Minion();
  for (var j = 0; j < 2;j++) {
    minions[j] = new Minion(j*500*widthRata+180*widthRata, -500)
  }
  endVideo = createVideo(['game0/videos/end_movie2.mov']);
  endVideo.hide();
}


function draw() {
  background(0);
  ship.show();
  ship.move();


  delay++;

  if (delay > ran) {
    power.show();
    power.move(); 

    if (power.hits(ship)) {
      power.eliminate();
      ship.upgrade();
      fireUpgrade = true;
    }
  }


  if (play < 1) {
    tune.play();
    play++;
  }


  //RUNNING ORDER
  if (invaders.length === 0) {
    if (waveNum === 1) {
      invaderWave(5, 1);
      waveNum++;
    } else if (waveNum === 0) {
      invaderWave(8, 2)
      waveNum++;
    } else if (waveNum === 2 && drop2Count >= 1) {
      if (intervalGenerator(30, 20) === true) {
        var star = new Star();
        stars.push(star);
        var rock = new Rock();
        rocks.push(rock);
      }
      if (intervalGenerator(150, 20) === true) {
        var enem = new DropEnemies();
        dropEnemies.push(enem);
      }
      if (stars.length > 1) {
        loopWhatsThere(stars);
      }
      if (rocks.length > 1) {
        loopWhatsThere(rocks)
      }
      if (dropEnemies.length > 1) {
        loopWhatsThere(dropEnemies, 1)
      }
    } else if (drop2Count < 1) {
      if (stars.length > 1) {
        loopWhatsThere(stars);
      }
      if (rocks.length > 1) {
        loopWhatsThere(rocks)
      }
      if (dropEnemies.length > 1) {
        loopWhatsThere(dropEnemies)
      }
      //big boss
      if (gif.loaded()) {
        wait = 1;
        boss.show();
        boss.move();
        for (var b = 0; b < minions.length;b++) {
          //minions.push(minion)
          minions[b].show(1);
          minions[b].move();
          if (minions[b].y > 10) {
            wait = 0;
            minions[b].backForth();
          }
        }
      }

    }
  }

 
  

  // fire hit enemy collision detection
  if (ship.x > width || ship.x < 0){ship.setDir(0)}

  for (var i = 0;i < fires.length; i++){
    fires[i].show(fireUpgrade);
    fires[i].move();
    for (var j = 0;j < invaders.length; j++){
      if (fires[i].hits(invaders[j])){
        invaders[j].destroy();
        invaders.splice(j, 1); 
        fires[i].evaporate();
      } 
    }
    for (var k = 0;k < rocks.length; k++){
      if (fires[i].hits(rocks[k])){
        rocks[k].destroy();
        rocks.splice(k, 1); 
        fires[i].evaporate();
      } 
    }
    for (var n = 0;n < dropEnemies.length; n++){
      if (fires[i].hits(dropEnemies[n])){
        var which = dropEnemies[n].destroy();
        if (which === 0) {
        dropEnemies.splice(n, 1); 
        }
        fires[i].evaporate();
      } 
    }
    //boss
    if (boss.y > 10) {
      if (fires[i].hits(boss)) {
        if (boss.lives >= 1) {
          boss.hit();
          fires[i].evaporate();
        } else {
          boss.destroy();
          fires[i].evaporate();
          videoPlay();
        }
      }
    }


      //minions fire hit detection
    if (minions[0].y > 10) {
      for (var l = 0;l < minions.length; l++){
        if (fires[i].hits(minions[l])){
          minions[l].hit();
          fires[i].evaporate();
        } 
      } 
    }
  }


  if (boss.destroyed === 1) {
     image(endVideo, 100*widthRata,10*heightRata, 621*widthRata, 395*heightRata)
  }


    // invaders fire
    if (intervalGenerator(100, 40) === true) {
    var max = invaders.length;
      if (max > 1) {
    populateEnemyFire(invaders, 1);
       }
  }
  
   //dropEnemies fire
  if (intervalGenerator(6, 3) === true) {
    var maxim = dropEnemies.length;
      if (maxim > 1) {
    populateEnemyFire(dropEnemies, 6);

    }
  }

  //minions fire
  if (minions[0].y > 10) {
    if (intervalGenerator(6, 3) === true) {
      var cart = minions.length;
        if (cart > 1) {
      populateEnemyFire(minions, 6, 1);

      }
    }
  }

  //boss fires
  if (boss.y > 10) {
    if (bossTiming(delay, 1) === true) {
      populateBossFire(boss, 6, 2);
      if (boss.destroyed === 0) {
        boss_laser.play();
      }
    }
    if (bossTiming(delay, 2) === true) {
      downUp = 1
    }
    if (downUp === 1) {
      boss.downUp();
    }
  }

  
  ///enemy fire
     for (var i = 0;i < enemyfires.length; i++) {

        enemyfires[i].show();
        enemyfires[i].move();

      if (enemyfires[i].hits(ship)){
        ship.blowup();
        endScreen++;
      }
    for (var j = 0;j < invaders.length; j++){
       if (invaders[j].y > 380) {
        ship.blowup();
        endScreen++;
      }
    }
  }


  //collision with rocks 
  for (var f = 0;f < rocks.length; f++) {
      if (rocks[f].hits(ship)){
        ship.blowup();
        endScreen++;
      } 
  }

  //collision with dropEnemies
  for (var z = 0;z < dropEnemies.length; z++) {
      if (dropEnemies[z].hits(ship)){
        ship.blowup();
        endScreen++;
      } 
  }

  //collision with boss
      if (boss.collides(ship)){
        ship.blowup();
        endScreen++;
      } 



  if (endScreen > 0) {

    if (play2 < 1) {
    fall.play();
    play2++;
    }

    tint(255, 255)
    image(gameOver, 250*widthRata, 200*heightRata, 274.5*widthRata, 61.5*heightRata);
     //console.log(endScreen)
    if (endScreen > 500) {
      var tinted = endScreen-150/10;
      tint(255, tinted);
      image(youSuck, 300*widthRata, 270*heightRata, 170.4*widthRata, 50.4*heightRata);
    }
    endScreen++;
    if (endScreen > 1500) {
      //console.log('reroute');
      window.location = './menu.html';
    }
  }


  var edge = false;
  
  for (var i = 0;i < invaders.length; i++){
    invaders[i].show(1);
    invaders[i].move();
    if (invaders[i].x > width || invaders[i].x < 0){
    	edge = true;
    }
  }

  if (edge) {
    for (var i = 0;i < invaders.length; i++){
      invaders[i].shiftDown();
    }
  }


  for (var i = fires.length-1;i >= 0; i--){
    if (fires[i].toDelete){
    	fires.splice(i, 1);
    } 
  }
}

function videoPlay(){
  endVideo.play();
  endVideo.onended(videoEnded)
  keyboard_typing.loop();
}

function videoEnded(){
  keyboard_typing.pause();
  window.location = './menu.html';
}


function keyReleased() {
  if (key != ' '){
	ship.setDir(0);
  }
}


function keyPressed(){
  if (key === ' ' && wait === 0) {
    
  	var fire = new Fire(ship.x, height);
    if (fireUpgrade === false) {
     zap1.play();
    } else {
     heavyLaser.play();
    }
  	fires.push(fire);
  }

  if (keyCode === RIGHT_ARROW){
  	ship.setDir(1);
  } else if (keyCode === LEFT_ARROW){
  	ship.setDir(-1);
  }
}