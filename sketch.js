var cols = 3;
var rows = 3;

var pos = [];
pos[0] = [0, 0, 0];
pos[1] = [0, 0, 0];
pos[2] = [0, 0, 0];

var TL = true;
var TM = true;
var TR = true;
var ML = true;
var MM = true;
var MR = true;
var BL = true;
var BM = true;
var BR = true;

var counter = 0;
var start = true;

//Magic Square 15 = Winner
// 4-3-8
// 9-5-1
// 2-7-6

//null = 0, naughts = 1, crosses = 4;

function setup() {
	createCanvas(600, 600);
	drawBoard();
}

function draw() {
	if (start == true) {
		if (counter == 2) {
			counter = 0;
		}
		result();
	}
}

function mouseClicked() {
	if (mouseX >= 0 && mouseX <= 200 && mouseY >= 0 && mouseY <= 200 && TL == true) {
		if (counter == 0) {
			new Naught(-200, -200);
			pos[0][0] = 1;
		}
		if (counter == 1) {
			new Cross(-200, -200);
			pos[0][0] = 4;
		}
		counter++;
		TL = false;
	}
	if (mouseX >= 200 && mouseX <= 400 && mouseY >= 0 && mouseY <= 200 && TM == true) {
		if (counter == 0) {
			new Naught(0, -200);
			pos[0][1] = 1;
		}
		if (counter == 1) {
			new Cross(0, -200);
			pos[0][1] = 4;
		}
		counter++;
		TM = false;
	}
	if (mouseX >= 400 && mouseX <= 600 && mouseY >= 0 && mouseY <= 200 && TR == true) {
		if (counter == 0) {
			new Naught(200, -200);
			pos[0][2] = 1;
		}
		if (counter == 1) {
			new Cross(200, -200);
			pos[0][2] = 4;
		}
		counter++;
		TR = false;
	}
	if (mouseX >= 0 && mouseX <= 200 && mouseY >= 200 && mouseY <= 400 && ML == true) {
		if (counter == 0) {
			new Naught(-200, 0);
			pos[1][0] = 1;
		}
		if (counter == 1) {
			new Cross(-200, 0);
			pos[1][0] = 4;
		}
		counter++;
		ML = false;
	}
	if (mouseX >= 200 && mouseX <= 400 && mouseY >= 200 && mouseY <= 400 && MM == true) {
		if (counter == 0) {
			new Naught(0, 0);
			pos[1][1] = 1;
		}
		if (counter == 1) {
			new Cross(0, 0);
			pos[1][1] = 4;
		}
		counter++;
		MM = false;
	}
	if (mouseX >= 400 && mouseX <= 600 && mouseY >= 200 && mouseX <= 600 && mouseY <= 400 && MR == true) {
		if (counter == 0) {
			new Naught(200, 0);
			pos[1][2] = 1;
		}
		if (counter == 1) {
			new Cross(200, 0);
			pos[1][2] = 4;
		}
		counter++;
		MR = false;
	}
	if (mouseX >= 0 && mouseX <= 200 && mouseY >= 400 && mouseY <= 600 && BL == true) {
		if (counter == 0) {
			new Naught(-200, 200);
			pos[2][0] = 1;
		}
		if (counter == 1) {
			new Cross(-200, 200);
			pos[2][0] = 4;
		}
		counter++;
		BL = false;
	}
	if (mouseX >= 200 && mouseX <= 400 && mouseY >= 400 && mouseY <= 600 && BM == true) {
		if (counter == 0) {
			new Naught(0, 200);
			pos[2][1] = 1;
		}
		if (counter == 1) {
			new Cross(0, 200);
			pos[2][1] = 4;
		}
		counter++;
		BM = false;
	}
	if (mouseX >= 400 && mouseX <= 600 && mouseY >= 400 && mouseY <= 600 && BR == true) {
		if (counter == 0) {
			new Naught(200, 200);
			pos[2][2] = 1;
		}
		if (counter == 1) {
			new Cross(200, 200);
			pos[2][2] = 4;
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

	//[Down][Across] Starting from top left

	var topRow = pos[0][0] + pos[0][1] + pos[0][2];
	var midRow = pos[1][0] + pos[1][1] + pos[1][2];
	var botRow = pos[2][0] + pos[2][1] + pos[2][2];

	var leftCol = pos[0][0] + pos[1][0] + pos[2][0];
	var midCol = pos[0][1] + pos[1][1] + pos[2][1];
	var rightCol = pos[0][2] + pos[1][2] + pos[2][2];

	var diagDown = pos[0][0] + pos[1][1] + pos[2][2];
	var diagUp = pos[2][0] + pos[1][1] + pos[0][2];

	var sumBoard = topRow + midRow + botRow;

	noStroke();
	fill(0);
	textSize(72);
	textAlign(CENTER);

	if (topRow == 3 || midRow == 3 || botRow == 3 || leftCol == 3 || midCol == 3 || rightCol == 3 || diagUp == 3 || diagDown == 3) {
		text("NAUGHTS WIN!", this.x, this.y);

	} else if (topRow == 12 || midRow == 12 || botRow == 12 || leftCol == 12 || midCol == 12 || rightCol == 12 || diagUp == 12 || diagDown == 12) {
		text("CROSSES WIN!", this.x, this.y);

	} else {
		if (sumBoard == 21) {
			text("ITS A DRAW!", this.x, this.y);
		}
	}
	start == false;
}
