// 슬라이더는 여기에 그려야 보일듯....

let coolors = ["#A1A9A3", "#E4E3CA", "#C0A1BA","#C5E7BF"];
let colorIndex = 1; // 시작하는 인덱스 자리 => 0부터 시작함

let sliderA;
let sliderA_value = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	noStroke();
	rectMode(CORNER);
	angleMode(DEGREES);
	ellipseMode(RADIUS);
		
	sliderA = createSlider(0, 100, 1, 1);
	sliderA.position(40, 800);
	}

function draw() {
	// 배경에 비내리기
	rainBg();
	loadPixels();
	fill(254, 111, 94);
	
	text('1. slider', 40, 800);	
	sliderA_value = sliderA.value();
	
	// summer
	push();
	//fill(coolors[colorIndex]);
	scale(0.5);
	translate(width*0.5,height*0.7);
	myLetterS();
	myLetterU();
	myLetterM();
	myLetterM2();
	myLetterE();
	myLetterR();
	pop();
	
	// vibes
	push();
	fill(coolors[colorIndex])
	scale(0.8);
	translate(width*0.3,height*0.2);
	myLetterV();
	myLetterI();
	myLetterB();
	myLetterE2();
	pop();
		}