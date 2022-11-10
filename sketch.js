var Protagonist1;
var Score = 0;
var SceneNo = 0; // scene variable to control different scenes
var SceneList = {ModeSel: 0, Scene1: 1, Scene2: 2};
var button1, button2, button3;

var BoyWalk = [];
var icon_python; NYC;

function setup() {
  createCanvas(600, 400);
  frameRate(60);
  noSmooth();
  // setup protagonist object
  Protagonist1 = new Protagonist(width/2,height/2,2);

  // generate specified amount of knowledge box
  for(i=0; i<KnowledgeBoxCount; i++){
    AllBoxs[i] = new KnowledgeBox(random(width),random(height), i);  
    AllBoxs[i].SetTypeRand();
  }
  // print(AllBoxs);

  button1 = createButton("START GAME");
  button1.size(150,50);
  button1.position(width/2-button1.width/2,height/2-button1.height/2);
  button1.hide();

  button2 = createButton("ZEN MODE");

  button2.hide();

  button3 = createButton("NORMAL MODE");
  button3.hide();


}

function preload(){
  // for(i = 1; i<=15; i++){
  //   var path = "assets/Boy/Walk ("+ str(i) + ").png"
  //   BoyWalk[i] = loadImage(path);
  // }
  // BoyWalk = loadImage();
  icon_python = loadImage("assets/knowledge_icons/python.png");
  NYC = loadImage("assets/missambear_pixel_nyc_subway.gif");
}

function draw() {
  switch (SceneNo) {
    case 0:
      background("black");
      button1.show();
      button1.mousePressed(SwitchScene);
      
      break;
    case 1:
      // console.log("case_1");
      background("pink");
      background(NYC);


      button1.hide();
      Protagonist1.Show(); //show the protagonist graphics. 
      Protagonist1.Movement(); //listen to key pressed event, updates every frame. 
      
      Portal(400,100,Protagonist1); //draw the portal
      break;

    case 2:
      background(200);

      //show the knowledgeboxes been created
      for(i=0; i<AllBoxs.length; i++){
        AllBoxs[i].Show();
        AllBoxs[i].isOverlap = CollitionDetection(AllBoxs[i], Protagonist1); // calculate collision status of two game objects
        
        // if overlap, remove this object
        if(AllBoxs[i].isOverlap){
          Score += AllBoxs[i].Score;
          console.log("knowledge box NO." + AllBoxs[i].ID + " collected. " + "Score: " + Score);

          // console.log(Score);
          
          AllBoxs.splice(i, 1); // remove the collected box
          i --; //reduce i to avoid flikering, because after remove the loop index upper limit will -1, which caused skip calculation of the next box
          
        }
        // console.log(AllBoxs.length);
        // console.log(i);
      }



      Protagonist1.Show(); //show the protagonist graphics. 
      Protagonist1.Movement(); //listen to key pressed event, updates every frame. 
      // CollitionDetection();

      ScoreUI(50,50);
      // console.log("case_2");d
      break;

    default: //default scene, UI 
      circle(10,10,10);
      break;
  }
  
}


function Portal(x,y,protagonist) {
  // draw the portal
  push();
  noFill();
  stroke("Blue");
  ellipse(x, y, 30, 60);
  pop();

  // switch scene if protagonist overlaps with portal
  if(dist(x,y,protagonist.x,protagonist.y) < 10){
    SceneNo = 2;
  }
}

// function to detect collition between knowledge boxes and protagonist
function CollitionDetection(obj1, obj2){
  // for(i=0; i<KnowledgeBoxCount; i++){
    // AllBoxs[i].Show();
    var distance = dist(obj1.x, obj1.y, obj2.x, obj2.y);
    if(distance < 20){
      return true;
    }else{
      return false;
    }
    // console.log(distance);
  // }

}

function ScoreUI(x,y){
  push();
  rectMode(CORNER);
  rect(x,y,60,40);
  text("Score=" + Score, x, y+10);
  text("Time: " + round(millis()/1000, 0), x, y+30);
  pop();
}