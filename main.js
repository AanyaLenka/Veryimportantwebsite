function setup()
{
canvas=createCanvas(280,280);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MF9J5CLJE/model.json',modelLoaded);
}
https://teachablemachine.withgoogle.com/models/E9qkexuvQ/
function draw()
{
image(video,0,0,280,280);
classifier.classify(video,gotResult);
}

function modelLoaded()
{
console.log("Model Loaded");
}

function gotResult(error,results)
{
if(error)
{
console.log(error);
}
else
{
console.log(results);
document.getElementById("name_of_object").innerHTML=results[0].label;
document.getElementById("accuracy_of_object").innerHTML=results[0].confidence.toFixed(3);
}
}