var cols = 3;
var rows = 3;

var TL = true;
var TM = true;
var TR = true;
var ML = true;
var MID = true;
var MR = true;
var BL = true;
var BM = true;
var BR = true;

var counter = 0;
var oScore = 0;
var xScore = 0;

//Magic Square 15 = Winner
// 4-3-8
// 9-5-1
// 2-7-6

function setup() {
	createCanvas(600, 600);
	drawBoard();
}

function draw() {
	if (counter == 2) {
		counter = 0;
	}
	result();
}

function mouseClicked() {
	if (mouseX >= 200 && mouseX <= 400 && mouseY >= 200 && mouseY <= 400 && MID == true) {
		if (counter == 0) {
			new Naught(0, 0);
			oScore += 5;
		}
		if (counter == 1) {
			new Cross(0, 0);
			xScore += 5;
		}
		counter++;
		MID = false;
	}
	if (mouseX >= 0 && mouseX <= 200 && mouseY >= 0 && mouseY <= 200 && TL == true) {
		if (counter == 0) {
			new Naught(-200, -200);
			oScore += 4;
		}
		if (counter == 1) {
			new Cross(-200, -200);
			xScore += 4;
		}
		counter++;
		TL = false;
	}
	if (mouseX >= 200 && mouseX <= 400 && mouseY >= 0 && mouseY <= 200 && TM == true) {
		if (counter == 0) {
			new Naught(0, -200);
			oScore += 3;
		}
		if (counter == 1) {
			new Cross(0, -200);
			xScore += 3;
		}
		counter++;
		TM = false;
	}
	if (mouseX >= 400 && mouseX <= 600 && mouseY >= 0 && mouseY <= 200 && TR == true) {
		if (counter == 0) {
			new Naught(200, -200);
			oScore += 8;
		}
		if (counter == 1) {
			new Cross(200, -200);
			xScore += 8;
		}
		counter++;
		TR = false;
	}
	if (mouseX >= 0 && mouseX <= 200 && mouseY >= 200 && mouseY <= 400 && ML == true) {
		if (counter == 0) {
			new Naught(-200, 0);
			oScore += 9;
		}
		if (counter == 1) {
			new Cross(-200, 0);
			xScore += 9;
		}
		counter++;
		ML = false;
	}
	if (mouseX >= 400 && mouseX <= 600 && mouseY >= 200 && mouseX <= 600 && mouseY <= 400 && MR == true) {
		if (counter == 0) {
			new Naught(200, 0);
			oScore += 1;
		}
		if (counter == 1) {
			new Cross(200, 0);
			xScore += 1;
		}
		counter++;
		MR = false;
	}
	if (mouseX >= 0 && mouseX <= 200 && mouseY >= 400 && mouseY <= 600 && BL == true) {
		if (counter == 0) {
			new Naught(-200, 200);
			oScore += 2;
		}
		if (counter == 1) {
			new Cross(-200, 200);
			xScore += 2;
		}
		counter++;
		BL = false;
	}
	if (mouseX >= 200 && mouseX <= 400 && mouseY >= 400 && mouseY <= 600 && BM == true) {
		if (counter == 0) {
			new Naught(0, 200);
			oScore += 7;
		}
		if (counter == 1) {
			new Cross(0, 200);
			xScore += 7;
		}
		counter++;
		BM = false;
	}
	if (mouseX >= 400 && mouseX <= 600 && mouseY >= 400 && mouseY <= 600 && BR == true) {
		if (counter == 0) {
			new Naught(200, 200);
			oScore += 6;
		}
		if (counter == 1) {
			new Cross(200, 200);
			xScore += 6;
		}
		counter++;
		BR = false;
	}
}

function Naught(x, y) {
	stroke("blue");
	noFill();
	ellipse(300 + x, 300 + y, 140, 140);
}

function Cross(x, y) {
	stroke("purple");
	line(250 + x, 250 + y, 350 + x, 350 + y);
	line(250 + x, 350 + y, 350 + x, 250 + y);
}

function drawBoard() {
	stroke(0);
	strokeWeight(4);
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			var x = i * width / cols;
			var y = j * height / rows;
			rect(x, y, 200, 200);
		}
	}
}

function result() {
	this.x = 300;
	this.y = 325;
	noStroke();
	fill(0);
	textSize(72);
	textAlign(CENTER);
	if (oScore + xScore == 45) {
		text("ITS A DRAW!", this.x, this.y);
	}
	if (oScore == 15) {
		text("NAUGHTS WIN!", this.x, this.y);
	}
	if (xScore == 15) {
		text("CROSSES WIN!", this.x, this.y);
	}
}
