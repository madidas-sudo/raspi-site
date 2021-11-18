function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("Click to start", width/2, height/2);
}

function draw() {
    if (mouseIsPressed) {
        background(0);
        fill(255);
        text("Click to stop", width/2, height/2);
    }
}