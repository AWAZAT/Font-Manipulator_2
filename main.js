d = 0;
rwX = 0;
lwx = 0;

function setup()
{
    canvas = createCanvas(560,420);
    canvas.position(660,100);
    video = createCapture(VIDEO);
    video.size(500,420);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
    video.position(24,100);
}

function modelLoaded()
{
console.log("Model Is Initialized");
}

function gotposes(result)
{
if (result.length > 0)
{
    console.log(result);
    lwX = result[0].pose.leftWrist.x;
    rwX = result[0].pose.rightWrist.x;
    d = floor(lwX - rwX);
    console.log(lwX + " - " + rwX + " = " + d);
}
}

function draw()
{
background("white");
textSize(d);
fill("teal");
text("Developed By - Anish Waza",50,200);
}
