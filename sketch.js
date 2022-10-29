var Protagonist1;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
  // setup protagonist object
  Protagonist1 = new Protagonist(width/2,height/2,5);


  // generate specified amount of knowledge box
  for(i=0; i<KnowledgeBoxCount; i++){
    // var elements = new KnowledgeBox(random(width),random(height));
    // AllBoxs.push(elements);
    AllBoxs[i] = new KnowledgeBox(random(width),random(height));
    
  }
  print(AllBoxs);

}

// const Scene = 2;

function CollitionDetection(){
  for(i=0; i<KnowledgeBoxCount; i++){
    // AllBoxs[i].Show();
    var distance = dist(AllBoxs[i].x, AllBoxs[i].y, Protagonist1.x, Protagonist1.y);
    if(distance < 20){
      AllBoxs.splice(i,1);
      KnowledgeBoxCount --;
    }
    // console.log(distance);
  }
}

function draw() {
  background(200);


  for(i=0; i<KnowledgeBoxCount; i++){
    AllBoxs[i].Show();
    
  }


  Protagonist1.Show(); //show the protagonist graphics. 
  Protagonist1.Movement(); //listen to key pressed event, updates every frame. 

  CollitionDetection();


  // switch (Scene) {
  //   case 1:
  //     print("case_1");
  //     console.log("case_1");
  //     break;
  //   case 2:
  //     print("case_2");
  //   default:
  //     break;
  // }
  
}




