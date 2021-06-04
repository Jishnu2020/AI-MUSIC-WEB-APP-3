peter_pan = "";
harry_potter = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload() {
peter_pan = loadSound("PeterPan.mp3");
harry_potter = loadSound("HarryPotter.mp3");
}
function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPoses);
}
function draw() {
image(video, 0, 0, 600, 500);
}
function modelLoaded() {
console.log('PoseNet Is Initialized');
}
function getPoses(results) {
if(results.length > 0) {
console.log(results);
leftWristX = floor(results[0].pose.leftWrist.x);
leftWristY = floor(results[0].pose.leftWrist.y);
rightWristX = floor(results[0].pose.rightWrist.x);
rightWristY = floor(results[0].pose.rightWrist.y);
console.log("leftWristX = " + leftWristX + ", leftWristY = " + leftWristY);
console.log("rightWristX = " + rightWristX + ", rightWristY = " + rightWristY);
}
}