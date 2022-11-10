//KnowledgeBox generator
var KnowledgeBoxCount = 20;
var AllBoxs = [];

class KnowledgeBox{
    constructor(x,y,ID){
        this.x = x;
        this.y = y;
        this.isOverlap = false;
        this.ID = ID;
        this.BoxTypes = {python: 1, JS: 2, CSS: 1, HTML: 1, threeJS: 2, unity: 3};
        this.Type;
        this.Score;
        
    }

    Show(){
        push();
        //draw representation of the box
        fill(255,0,0);
        // circle(this.x,this.y,30);
        image(icon_python, this.x-20, this.y-20, 40, 40);
        
        //draw ID No
        stroke("black");
        fill("black");
        textSize(10);
        text("ID:" + this.ID, this.x, this.y);
        text("score=" + this.Score, this.x, this.y + 10);
        text("Type:" + this.Type, this.x, this.y + 20);
        pop();
    }

    SetTypeRand(){
        var keys = Object.keys(this.BoxTypes);
        var values = Object.values(this.BoxTypes);
        var RandIndex = Math.floor(random(keys.length - 1));
        this.Score = values[RandIndex];
        this.Type = keys[RandIndex];
    }
}

