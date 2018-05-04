function Enemyfire(x, y, speed = 0, type = 0) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.shotType = type;
  this.play = 0;

  this.show = function(){
  	noStroke();
    if (type === 0) {

      fill(255, 255, 255);
    	ellipse(this.x-20, this.y+30, this.r*2, this.r*2);
    } else if (type === 1) {
      
      fill(255, 0, 0);
      rect(this.x-20, this.y+70, this.r*1, this.r*6)
    } else if (type === 2) {
      if (this.play === 0) {
        //boss_laser.play();
        this.play += 1;
      }  
        //fill(255, 0, 255);
        //ellipse(this.x-25, this.y+100, this.r*6, this.r*6);
        image(projectile1, this.x-60, this.y+140);

    }

  }
 
  this.evaporate = function(){
    this.toDelete = true;
  }

  this.hits = function(ship){
    var d = dist(this.x-20, this.y+30, ship.x, height-20);

    if (this.shotType === 0) {
      if (d < this.r + ship.r){
      	return true;
      } else {
      	return false;
      }
    } else if (this.shotType === 1) {
      if (d < 3 + ship.r){
        return true;
      } else {
        return false;
      }
    } else if (this.shotType === 2) {
      if (d < this.r*4 + ship.r){
        return true;
      } else {
        return false;
      }
    }
    //console.log(d, this.x, this.y, ship.x, height-20)

  }
  
  this.move = function(){
  	this.y = this.y + 5 + speed;
  }

}