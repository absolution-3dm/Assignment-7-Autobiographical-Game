/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} ID
 * @param {Array} icons an array containing a list of images
 */
class KBox{
    constructor(x, y, ID, icons){
        this.x = x;
        this.y = y;
        this.isOverlap = false;
        this.ID = ID;
        this.icons = icons;
        this.icon;

        this.BoxTypes = {"JS": 2, "CSS": 1, "HTML": 1};
        this.BoxScores = [2,1,1];
        this.Type;
        this.Score;

        this.ConnectedGridID;

        this.Setup();
        
    }
    Setup(){
        //rand knowledgebox index
        var randIndex = floor(random(this.icons.length));
        var randScore = Object.values(BoxTypes);
        var randType = Object.keys(BoxTypes);

        // properity assignment
        this.Score = randScore[randIndex];
        this.Type = randType[randIndex];
        this.icon = this.icons[randIndex];
    }

    Show(){
        push();
        imageMode(CENTER);
        image(this.icon, this.x, this.y, 25, 25);
        
        // draw ID No
        // stroke("black");
        // fill("black");
        // textSize(8);
        // text("ID:" + this.ID, this.x, this.y);
        // text("score=" + this.Score, this.x, this.y + 10);
        // text("Type:" + this.Type, this.x, this.y + 20);
        pop();
    }
    GetPosition(){
        var position = [this.x, this.y];
        return position;
    }

    /**
     * set Knowledge box position using vector 2
     * @param {vector2} position 
     */
    SetPosition(position){
        this.x = position[0];
        this.y = position[1];
    }

    SetGridID(GridID){
        this.ConnectedGridID = GridID;
    }
    GetGridID(){
        return this.ConnectedGridID;
    }
}

