var intervalGenerator = function(range, guess){
  var max = range;
  var min = 0;

  if (guess === Math.floor(Math.random()*(max-min)+min)) {
    return true;
  } else {
    return false;
  }
} 
 
var invaderWave = function(speed, colour) {
  var start = -150;
  var j = 0;
  var p = 0;
  for (var i = 0;i < 18; i++){
    if (i < 6) {
      invaders[i] = new Invader(i*80*widthRata+80*widthRata, 20*heightRata+start, speed, colour);
    } else if (i < 12) {
      invaders[i] = new Invader(j*80*widthRata+80*widthRata, 80*heightRata+start, speed, colour); 
      j++;
    } else {
      invaders[i] = new Invader(p*80*widthRata+80*widthRata, 140*heightRata+start, speed, colour); 
      p++;
    }
  }
}

var populateEnemyFire = function(enemyArray, speed = 1, type = 0) {
    
     var max = enemyArray.length;
    // if (max > 1) {
      var ranEnemy = Math.floor(Math.random()*(max-0)+0);
      var newFire = new Enemyfire(enemyArray[ranEnemy].x, enemyArray[ranEnemy].y, speed, type)
        enemyfires.push(newFire);
        //console.log(enemyfires)
    //}
}

var populateBossFire = function(boss, speed = 1, type = 0) {
    
     //var max = enemyArray.length;
    // if (max > 1) {
      //var ranEnemy = Math.floor(Math.random()*(max-0)+0);
      for (var i = 0;i < 3 ;i++) {

        var newFire = new Enemyfire(boss.x, boss.y, speed, type)
          enemyfires.push(newFire);
     
      }
        //console.log(enemyfires)
    //}
}

var loopWhatsThere = function(array, game = 0){

    for (var j = 0;j < array.length;j++) {
      if (game === 0) {
       array[j].show(); 
      } else {
        array[j].show(game);
      }
    array[j].move();
  }
}

var bossTiming = function(delay, which){

  if (which === 1) {
    if (delay%200==0) {
      return true;
    }  
  } else if (which === 2) {
    if (delay%600==0) {
      return true;
    } 
  }

}














