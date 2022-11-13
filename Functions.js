
function SwitchScene0(){
    // change scene NO.
    SceneNo = 0;

    
    //reset things

    //reset protagonist
    Protagonist1.x = 50;
    Protagonist1.y = 370;
    //reset timer
    CountDown = 60;
    //reset score
    Score = 0;
    // replay video
    BGVideo.loop();

    
    //reset knowledge boxes
    // generate specified amount of knowledge box
    for(i=0; i<KnowledgeBoxCount; i++){
        //rand knowledgebox index
        var randIndex = floor(random(icons.length));
        var randScore = Object.values(BoxTypes);
        var randType = Object.keys(BoxTypes);
        //create new knowledgeboxes
        AllBoxs[i] = new KnowledgeBox(random(width),random(height), i, icons[randIndex]);  

        // properity assignment
        AllBoxs[i].Score = randScore[randIndex];
        AllBoxs[i].Type = randType[randIndex];
        
        // print(str(AllBoxs[i].Type) + str(AllBoxs[i].Score));
    }
    
    

}

function SwitchScene1(){
    SceneNo = 1;
    button1.hide();
    BGVideo.stop();
    Protagonist1.locky = true;//lock y movement
}

function SwitchScene2(){
    SceneNo = 2;
    // scene2 setup
    Protagonist1.locky = false;
}

function SwitchScene3(){
    SceneNo = 3;
}

function CountDownTimer(){
    // when game starts, start count down
    if(SceneNo===2 && CountDown>0){
        CountDown --;
    }
    
}

setInterval(() => {
    CountDownTimer();
}, 1000);

function Portal(x,y,protagonist) {
    // draw the portal
    push();
    fill(0,0,0);

    stroke("Cyan");
    strokeWeight(3);
    ellipse(x, y, 30, 60);
    pop();

    // switch scene if protagonist overlaps with portal
    if(dist(x,y,protagonist.x,protagonist.y) < 10){
    SwitchScene2();
    }
}

// function to detect collition between knowledge boxes and protagonist
function CollitionDetection(obj1, obj2){
    var distance = dist(obj1.x, obj1.y, obj2.x, obj2.y);
    if(distance < 20){
    return true;
    }else{
    return false;
    }

}

function ScoreUI(x,y){
    push();
    rectMode(CORNER);
    fill(255,255,255,200);
    noStroke();
    rect(x,y,60,40);

    fill("black");
    text("Score=" + Score, x, y+10);
    text("Time: " + CountDown, x, y+30);
    pop();
}

function RandKnowledgeBox(){

}