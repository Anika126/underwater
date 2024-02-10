var splashscreen;
var about
var play




function preload() {
splashscreen = loadImage("underwater shooter.gif");
about = loadImage("about.jpg");
play = loadImage("play.png")   
}

function setup(){
play = createImg("play.png")
about = createImg("about.jpg")
}

function draw(){
    background(splashscreen)
}