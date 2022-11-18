/**
 * generate a grid for Kbox to sit on
 * @param {*} columns 
 * @param {*} rows
 */
class Grid{
    constructor(columns, rows){
        this.columns = columns;
        this.rows = rows;
        this.distx = width / (this.columns + 1);
        this.disty = height / (this.rows + 1);

        this.Positions = [];
        this.Occupied = [];

        // this.Points = this.GridSetup(); //initialize the point list upon creation of the object
        this.GridSetup(); //initialize the point list upon creation of the object
        
        
        
    }
    
    GridSetup() {
        for (var i = 1; i < this.columns + 1; i++) {
            for (var j = 1; j < this.rows + 1; j++) {
                this.Positions.push([i*this.distx, j*this.disty]);
                this.Occupied.push(false);
            }
        }
        
    }

    Show(){
        for (var i = 0; i < this.columns * this.rows; i++){
            if(this.Occupied[i]){
                push();
            
                rectMode(CENTER);
                noFill();
                stroke(255, 255, 0);
                rect(this.Positions[i][0], this.Positions[i][1], 40, 40);

                pop();
            }
            
        }
        
    }


    /**
     * get a random point within the grid (no overlapping)
     * @param {boolean} change whether to change the point occupation status
     * @returns x, y, occupied
     */
    GetRandomPoint(change){
        var RandomPointIndex = floor(random(this.columns * this.rows));

        // loop untill get point that is not occupied
        while (this.Occupied[RandomPointIndex] === true){
            var RandomPointIndex = floor(random(this.columns * this.rows));
        }
        // switch the occupation status of the point picked
        if(change === true){
            this.Occupied[RandomPointIndex] = true;
        }

        var obj = {
            Position: this.Positions[RandomPointIndex],
            Index: RandomPointIndex
        };
        print(obj);
        return obj;
        
    }

    ResetGridPoint(GridID){
        this.Occupied[GridID] = false;
    }

};
