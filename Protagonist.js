class Protagonist {
  constructor(x,y,speed) {
    this.x = x;
    this.y = y;
    // this.w = w;
    // this.h = h;
    this.speed = speed;
    this.CollideBox = {w:30, h:30};
    this.Score = 0;
  }

  // draw the geometry of the character
  Show(){
    rectMode("center");
    // image(BoyWalk[3], this.x-20, this.y-40, 80, 80);
    point(this.x,this.y);
    rect(this.x, this.y, 50, 50);
  }

  Movement() {
    if(key === "a" || key ==="A"){
      if(keyIsDown(65)){
        // console.log("key \"A\" Pressed");
        this.x -= this.speed;
      }
    }

    if(key === "d" || key ==="D"){
      if(keyIsDown(68)){
        // console.log("key \"D\" Pressed");
        this.x += this.speed;
      }
    }

    if(key === "s" || key ==="S"){
      if(keyIsDown(83)){
        // console.log("key \"S\" Pressed");
        this.y += this.speed;
      }
    }

    if(key === "w" || key ==="W"){
      if(keyIsDown(87)){
        // console.log("key \"W\" Pressed");
        this.y -= this.speed;
      }
    }
  }

}
