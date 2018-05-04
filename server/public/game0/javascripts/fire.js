function Fire(x, y) {
  this.x = x;
  this.y = y-60;
  this.r = 8;
  this.toDelete = false;

  this.show = function(upgrade){
  	noStroke();

    if (upgrade === true) {
      fill(255, 0, 255);
      rect(this.x, this.y, this.r*2.5, this.r*4)
    } else {
      fill(255, 255, 0);
      rect(this.x, this.y, this.r, this.r*3)

      // ellipse_shot
      // image(ellipse_shot, this.x-40, this.y, 275/3, 160/3)
      // this.r = 25
    }
  }

  this.evaporate = function(){
    this.toDelete = true;
  }

  this.hits = function(invader){
    var d = dist(this.x, this.y, invader.x, invader.y);
    //console.log(d)
    if (d < this.r + invader.r){
    	return true;
    } else {
    	return false;
    }

  }
  
  this.move = function(){
  	this.y = this.y - 10;
  }


}