//KnowledgeBox generator
var KnowledgeBoxCount = 20;
var AllBoxs = [];

class KnowledgeBox{
    constructor(x,y){
        this.x = x;
        this.y = y;
        
    }

    Show(){
        push();

        fill(random(255));
        circle(this.x,this.y,30);

        pop();
    }
}
