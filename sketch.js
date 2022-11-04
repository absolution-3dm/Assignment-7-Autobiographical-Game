var Protagonist1;
var Score;
var Scene = 1; // scene variable to control different scenes

function setup() {
  createCanvas(600, 400);
  frameRate(60);
  // setup protagonist object
  Protagonist1 = new Protagonist(width/2,height/2,5);

  // generate specified amount of knowledge box
  for(i=0; i<KnowledgeBoxCount; i++){
    AllBoxs[i] = new KnowledgeBox(random(width),random(height), i);  
  }
  // print(AllBoxs);

}

function draw() {
  switch (Scene) {
    case 1:
      // console.log("case_1");
      background("pink");
      
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
          console.log("knowledge box NO." + AllBoxs[i].ID + " collected");
          AllBoxs.splice(i, 1); // remove the collected box
          i --; //reduce i to avoid flikering, because after remove the loop index upper limit will -1, which caused skip calculation of the next box
        }
        // console.log(AllBoxs.length);
        // console.log(i);
      }



      Protagonist1.Show(); //show the protagonist graphics. 
      Protagonist1.Movement(); //listen to key pressed event, updates every frame. 
      // CollitionDetection();


      // console.log("case_2");d
      break;

    default:
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
    Scene = 2;
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