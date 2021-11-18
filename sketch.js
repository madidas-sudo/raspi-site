function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(52);
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(mouseX, mouseY, 80, 80);
}