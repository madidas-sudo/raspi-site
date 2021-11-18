function setup() {
    //3d sketch
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(52);
    //create cube that spins with the mouse
    push();
    rotateX(mouseX* 0.01);
    rotateY(mouseY * 0.01);
    box(100);
    pop();
}