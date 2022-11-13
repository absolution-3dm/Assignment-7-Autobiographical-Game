//KnowledgeBox generator
var KnowledgeBoxCount = 10;
var AllBoxs = [];

class KnowledgeBox{
    constructor(x, y, ID, icon){
        this.x = x;
        this.y = y;
        this.isOverlap = false;
        this.ID = ID;
        this.icon = icon;
        this.BoxTypes = {python: 1, JS: 2, CSS: 1, HTML: 1, unity: 3};
        this.Type;
        this.Score;
        
    }

    Show(){
        push();
        imageMode(CENTER);
        image(this.icon, this.x, this.y, 25, 25);
        
        //draw ID No
        stroke("black");
        fill("black");
        textSize(8);
        text("ID:" + this.ID, this.x, this.y);
        text("score=" + this.Score, this.x, this.y + 10);
        text("Type:" + this.Type, this.x, this.y + 20);
        pop();
    }

    // SetTypeRand(){
    //     var keys = Object.keys(this.BoxTypes);
    //     var values = Object.values(this.BoxTypes);
    //     var RandIndex = Math.floor(random(keys.length - 1));
    //     this.Score = values[RandIndex];
    //     this.Type = keys[RandIndex];
    //     return this.Type;
    // }
}

