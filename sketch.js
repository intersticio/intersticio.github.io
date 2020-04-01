var rotando = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    
    rotando ++;

    background(0);


    push();
    cruz();
    pop();

    var bruit = 0.001;
    var bruit_size = noise(millis() * bruit) * 60;


    //var tamango = random(30);
    

}

function cruz(){
	var bruit = 0.001;
    var bruit_size = noise(millis() * bruit) * 40;
    var bruitcursor = 0.001;
    var bruit_cursor = noise(millis() * bruitcursor) * 10;
    //var tamango = random(30);
    rectMode(CENTER);
    noStroke();
    fill(255);


    translate(mouseX, mouseY);
    rotate(bruit_cursor);
    rect(0, 0, 4, bruit_size);
    //rect(0, 0, bruit_size, 4);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}