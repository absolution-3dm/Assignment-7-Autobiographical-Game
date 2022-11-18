/**
 * setup Scene 0
 */
function Scene0Setup(){

    //reset protagonist
    Protagonist1.x = 50;
    Protagonist1.y = 370;
    

    // replay video
    BGVideo.loop();

    button1.show();
    button2.hide();


    // change scene NO.
    SceneNo = 0;
}


/**
 * setup scene 1
 */
function Scene1Setup(){
    
    button1.hide();
    BGVideo.stop();
    Protagonist1.locky = true;//lock y movement

    SceneNo = 1;
}


/**
 * setup scene 2
 */
function Scene2Setup(){
    // scene2 setup
    Protagonist1.locky = false;

    //reset timer
    CountDown = 60;

    //reset score
    Score = 0;

    // Generate Grid
    Grid1 = new Grid(12, 8);
    
    // // generate specified amount of knowledge box
    // for(i=0; i<KnowledgeBoxCount; i++){
    //     AllBoxs[i] = new KBox(0, 0, i, icons);  
    // }

    for (var i = 0; i < KnowledgeBoxCount; i ++){
        
        var randPoint = Grid1.GetRandomPoint(true);
        AllBoxs[i] = new KBox(0, 0, i, icons);
        AllBoxs[i].SetPosition(randPoint.Position);
        AllBoxs[i].SetGridID(randPoint.Index);
        
    }

    SceneNo = 2;
}

function Scene3Setup(){

    SceneNo = 3;
}

function CountDownTimer(){
    // when game starts, start count down
    if(SceneNo === 2 && CountDown > 0){
        CountDown --;
    }
}

setInterval(() => {
    CountDownTimer();
}, 1000);