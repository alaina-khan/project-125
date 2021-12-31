function setup() {
    video= createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCapture(550,550); 
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
  function gotPoses(results) {
if(results.length > 0)
{
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
rigthWristX = results[0].pose.leftWrist.x;
difference= floor(leftWristX - rightWristx);
}

  }
  function draw(){
      background('#6C91C2');
      textSize(10);
      fill('#FFE787');
      text('Peter', 50,400);
  }