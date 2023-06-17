/** 알파벳 함수 그리기**/


function rainBg() {
	background(0, 20);
	frameRate(25); 
	fill(random(0,255),random(0,255),random(0,255));
	rect(random(0,windowWidth),random(0,windowHeight),4,sliderA_value);
	rect(random(0,windowWidth),random(0,windowHeight),2,20);
}

function myLetterS(){
	push();
	fill(251, 96, 127);
	ellipseMode(RADIUS);
  translate(10,100);
	//arc(40, 40, 50, 50, -90, -180);
	rect(0, 0, 60, 30);
	rect(0, 60, 60, 20);
  rect(0, 0, 20, 60);
	rect(40, 60, 30, 60);
	rect(0, 100, 60, 20);
	pop();
	}

function myLetterU(){
	push();
	fill(0, 255, 191);
	translate(100,100);
	rect(0, 0, 40, 70);
	rect(100, 0, 20, 70);
	arc(60, 70, 60, 50, 360, -180);
	pop();
	}
	
function myLetterM(){
	push();
	fill(92, 147, 179);
  translate(240,120);
  rect(0, 0, 60, 100);
	rect(80, 20, 20, 80);
	rect(120, 20, 20, 80);
	rect(140, 80, 20, 20);
	rect(0, 10, 120, 40);
	pop();
	}

function myLetterM2(){
	push();
	fill(0, 255, 191);
  translate(420,110);
  rect(0, 0, 40, 100);
	rect(60, 20, 20, 80);
	rect(120, 20, 20, 80);
	rect(0, 10, 120, 40);
	rect(0, -20, 20, 20);
	pop();
	}
	
function myLetterE(){
	push();
	fill(0, 255, 191);
	translate(580,140);
  rect(0, 0, 60, 30);
	rect(0, 100, 80, 10);
  rect(0, 0, 30, 100);
	rect(0, 60, 80, 30);
	pop();
	}

function myLetterR(){
	push();
	fill(0, 255, 191);
	translate(680,120);
	rect(0, -10, 30, 110);
	arc(30, 30, 50, 40, -90, 90);
	rectMode(CORNER);
	rotate(-15);
	rect(20, 60, 20, 50);
	fill(0);
	arc(30, 30, 15, 10, -90, 90);
	pop();
	}
	
function myLetterV(){
	push();
	translate(10,500);
	rectMode(CORNER);
	rotate(-25);
	rect(10, 20, 50, 150);
	rect(0, 20, 10, 120);
	circle(100, 70, 20);
	pop();
	}
	
function myLetterI() {
	push();
	translate(180,480);
	rect(0, 0, 40, 10);
	rect(0, 20, 10, 120);
	rect(10, 10, 10, 160);
	rect(20, 0, 20, 170);
	pop();
	}
	
function myLetterB() {
	push();
	fill(237, 122, 155);
	translate(180,500);
	rect(60, -20, 20, 160);
	arc(80, 30, 40, 40, -90, 90);
	arc(80, 100, 70, 60, -90, 90);
	fill(0);
	arc(90, 30, 15, 10, -90, 90);
	arc(90, 90, 20, 10, -90, 90);
	pop();
}
	
function myLetterE2() {
	push();
	translate(350,500);
  rect(0, 0, 60, 30);
	rect(0, 140, 120, 10);
	rect(0, 0, 130, 30);
  rect(0, 0, 60, 140);
	rect(0, 60, 120, 30);
	pop();
	}
	
function myLetterS2(){
	push();
	ellipseMode(RADIUS);
  translate(100,500);
	arc(60, 100, 40, 40, -90, 90);
	rect(0, 0, 60, 30);
	rect(0, 60, 60, 20);
  rect(0, 0, 20, 60);
	rect(0, 110, 60, 40);
	pop();

	push();
	translate(620,600);
	rect(0,0,20,20);
	pop();
	
	push();
	translate(660,600);
	rect(0,0,20,20);
	pop();

	push();
	translate(700,620);
	rect(0,0,20,20);
	pop();
	}
	
