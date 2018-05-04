function Rock() {

  var rocksArr = [rock1, rock2, rock3, rock4, rock1];
  this.which = Math.floor(Math.random()*(4-0)+0)
  this.rock = rocksArr[this.which];


  this.x = Math.random()* (770 - 30)+30;
  this.y = -100;
  this.r = 80;

  this.move = function() {
    //rotate(PI / 3.0) 
    this.y += 4;
  }

  this.show = function(){
    
    image(this.rock, this.x-70, this.y-30); 
    //rotate(PI / 3.0) 
    //fill(255);
    // rectMode(CENTER);
    // ellipse(this.x, this.y, this.r);   
  }


  this.hits = function(ship){
    var d = dist(this.x, this.y, ship.x, height-20);
    if (d < this.r + ship.r){
      return true;
    } else {
      return false;
    }
  }

  this.destroy = function(){

      image(explosion, this.x-50, this.y);
      zap3.play();  
 
  }

}