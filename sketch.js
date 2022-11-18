// acknowledgements
// protagonist generated using https://kenney.itch.io/creature-mixer
// NYC art work: 
// Retro background video https://www.youtube.com/watch?v=ItJJ0JrKlL8

var Protagonist1;
var Score = 0;
var CountDown = 60;
var SceneNo = 0; // scene variable to control different scenes
// var SceneList = {ModeSel: 0, Scene1: 1, Scene2: 2, Scene3: 3};
var button1, button2, button3;

var Creature;

//variable for knowledgeboxs
var icons = [];
// this object controls value settings of knowledgeboxes
const BoxTypes = {JS: 2, CSS: 1, HTML: 1};




var NYC;
var BGVideo;

//KnowledgeBox generation setup
var KnowledgeBoxCount = 20;
var AllBoxs = [];
//Grid setup
var Grid1;


function setup() {
  createCanvas(600, 400);
  frameRate(60);
  noSmooth();
  // setup protagonist object
  Protagonist1 = new Protagonist(50, 370, 2);
  
  // //setup grid
  // Grid1 = new Grid(12, 8);

  //button1 setup
  button1 = createButton("START GAME");
  button1.size(150,50);
  button1.position(width/2-button1.width/2,height/2-button1.height/2);
  button1.hide();

  //button2 setup
  button2 = createButton("RESTART");
  button2.size(150,50);
  button2.position(width/2-button1.width/2,height/2-button1.height/2);
  button2.hide();

  //button3 setup
  button3 = createButton("NORMAL MODE");
  button3.hide();

  BGVideo = createVideo("assets/EyesClosedTypeBeat.mp4");
  BGVideo.loop();
  BGVideo.hide();
}

function preload(){
  // protagonist assets
  Creature = loadImage("assets/Creature.gif");
  // BG video
  // BGVideo = createVideo("assets/EyesClosedTypeBeat.mp4");
  // BGVideo.loop();
  // BGVideo.hide();

  //load icons
  icons[0] = loadImage("assets/knowledge_icons/01_JS.png");
  icons[1] = loadImage("assets/knowledge_icons/02_CSS.png");
  icons[2] = loadImage("assets/knowledge_icons/03_HTML.png");
  // scene 1 BG
  NYC = loadImage("assets/missambear_pixel_nyc_subway.gif");
}

function draw() {
  switch (SceneNo) {
    case 0:
      image(BGVideo, 0, 0, 600, 400);
      // createVideo("assets/EyesClosedTypeBeat.mp4");
      button1.show();
      button2.hide();
      button1.mousePressed(Scene1Setup);
      break;

    case 1:
      background(NYC);
      Portal(400, 370, Protagonist1); //draw the portal
      Protagonist1.Show(); //show the protagonist graphics. 
      Protagonist1.Movement(); //listen to key pressed event, updates every frame. 
      break;

    case 2:
      background(230);
      Grid1.Show();

      //show and detect collision the knowledgeboxes been created
      for(i=0; i < KnowledgeBoxCount; i++){
        AllBoxs[i].Show();
        AllBoxs[i].isOverlap = CollisionDetection(AllBoxs[i], Protagonist1); // calculate collision status of two game objects
        
        // if overlap, remove(regenerate) this object
        if(AllBoxs[i].isOverlap){
          Score += AllBoxs[i].Score;
          console.log("knowledge box NO." + AllBoxs[i].ID + " collected. " + "Score: " + Score); 
          Grid1.ResetGridPoint(AllBoxs[i].GetGridID());
          
          var randPoint = Grid1.GetRandomPoint(true);
          AllBoxs[i] = new KBox(0, 0, i, icons);
          AllBoxs[i].SetPosition(randPoint.Position);
          AllBoxs[i].SetGridID(randPoint.Index);

          // AllBoxs.splice(i, 1); // remove the collected box
          // i --; //reduce i to avoid flikering, because after remove the loop index upper limit will -1, which caused skip calculation of the next box

          

        }
        
      }

      Protagonist1.Show(); //show the protagonist graphics. 
      Protagonist1.Movement(); //listen to key pressed event, updates every frame. 
      // CollitionDetection();

      ScoreUI(20, 20);
      // console.log("case_2");

      if(CountDown <= 0){
        clear();
        Scene3Setup();
      }

      break;

    case 3:
      background(0,0,0);
      button2.show();
      button2.mousePressed(Scene0Setup);
      // button2.mousePressed(button2.hide());
      break;
  }
  
}