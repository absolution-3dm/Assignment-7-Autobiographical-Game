//KnowledgeBox generator
var KnowledgeBoxCount = 20;
var AllBoxs = [];

class KnowledgeBox{
    constructor(x,y,ID){
        this.x = x;
        this.y = y;
        this.isOverlap = false;
        this.ID = ID;
    }

    Show(){
        push();
        //draw representation of the box
        fill(255,0,0);
        circle(this.x,this.y,30);
        
        //draw ID No
        stroke("black");
        fill("black");
        textSize(30);
        text(this.ID, this.x, this.y)

        
        pop();
    }
}
