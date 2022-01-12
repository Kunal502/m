//nose_x = 0;
/*ose_y = 0;

function preload(){
  image = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(image, nose_x, nose_y,30,30);
}

function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function take_snapshot(){
    save("KUNAL RANA.png");
}
function modelLoaded(){
    console.log("Model Is Loaded");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x =  results[0].pose.nose.x -18;
        nose_y =  results[0].pose.nose.y -18;
        console.log("Nose X :" +nose_x);
        console.log("Nose Y :" +nose_y);
    }
}*/
noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 80, 35);
}

function take_snapshot(){    
  save('myFilterImage.png');
}


