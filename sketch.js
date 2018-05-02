var spot = {
    x : 100,
    y : 50,
};
let star1;
let star2;
let star3;


function setup(){
    createCanvas(windowWidth, windowHeight);
    
    
    frameRate(10);
    star1 = new Star(100,100,3);
    star2 = new Star(200,400,5);
    star3 = new Star(150,150,7);
}

function draw(){
    background(21,47,96);

    if(mouseX < 700){
        noStroke();
        fill(255);
        textSize(37);
        text("I'M SIGNIFICANT", 600, 400);
    }
    if(mouseX > 700){
        noStroke();
        fill(255);
        textFont('SF Toontime BLotch');
        textSize(30);
        text("Screamed the dust speck", 860, 150);
    }
    
    textSize(20);
    text("Bill Watterson", 1400,900);

   star1.display();
   star1.move();
   star2.display();
   star2.move();
   star3.display();
   star3.move();
    //stars
    spot.x = random(0,width);
    spot.y = random(400,0);
    fill(237,223,35);
    ellipse(spot.x, spot.y, 10, 10);

    //how do i color whole dino?
    beginShape()
    fill(120, 132, 23);
    
    strokeWeight(4);
    stroke(24,10,38);
    
    //head
    //fill(186, 35, 237);
    fill(120, 132, 23);
    bezier(500,515,493,485,485,455,545,460);
    bezier(545,460,575,430,620,445,535,525);
    noFill();   
    ellipse(530,473,5,5);

    //neck
     noFill();
    bezier(500,515,450,690,450,630,410,720);
    fill(120, 132, 23);     
    bezier(535,525,495,715,490,650,465,735);

    //body
    bezier(410,720,370,730,270,750,260,860);
    noFill();
    bezier(440,780,430,805,425,820,400,838);
    fill(120, 75, 23);  
    ellipse(400,750,15,24);
    ellipse(390,776,15,10);
    ellipse(350,770,20,13);
    ellipse(300,790,12,19);
    ellipse(300,820,10,14);
    ellipse(330,800,16,18);
    ellipse(370,750,7,9);

    //legs
    line(465,735,475,880);
    line(440,780,450,880);
    noFill();
    bezier(310,850,360,790,420,850,430,880);
    fill(120, 132, 23);  
    line(430,880,515,880);
    noFill();
    bezier(515,880,520,855,540,855,540,905);
    line(250,905,540,905);

    //tail
    fill(120, 132, 23);
    bezier(250,905,150,905,25,900,20,800);
    noFill();
    
    bezier(260,860,150,900,25,880,20,800);
    endShape();

    //ufo
    fill(116, 110, 119);
    ellipse(1350,140,60,60);
    fill(0,0,0);
    bezier(1320,135, 1240,155,1450,150,1380,135);
    line(1330,180,1335,168);
    line(1360,168,1365,180);
    fill(254, 252, 255);
    ellipse(1355,144,8);
    ellipse(1340,144,8);
    ellipse(1325,143,8);
    ellipse(1310,142,8);
    ellipse(1370,143,8);
    ellipse(1387,141,8);

    fill(37, 40, 2);
    rect(0,907,1950,900);

    noStroke();
    fill(237,223,35);
    ellipse(50,50,10,10);
    ellipse(90,300,10,10);
    ellipse(150,90,10,10);
    ellipse(400,500,10,10);
    ellipse(700,600,10,10);
    ellipse(500,200,10,10);
    ellipse(70,400,10,10);
    ellipse(700,50,10,10);
    ellipse(1840,400,10,10);
    ellipse(80,560,10,10);
    ellipse(940,700,10,10);
    ellipse(84020,10,10);
    ellipse(640,500,10,10);
    ellipse(840,20,10,10);
    ellipse(1040,300,10,10);
    ellipse(1000,40,10,10);
    ellipse(940,500,10,10);
    ellipse(1000,200,10,10);
    ellipse(1400,410,10,10);
    ellipse(1200,100,10,10);
    ellipse(1600,130,10,10);
    ellipse(1340,300,10,10);
    ellipse(1300,600,10,10);



}

class Star{
	constructor(tempX, tempY, tempSpeed){          
	this.x = tempX;
	this.y = tempY;
	this.speed = tempSpeed;
              
}
display(){
    fill(237,223,35);
    ellipse(this.x,this.y,10,10);
    ellipse(this.x,this.y,10,10);
    ellipse(this.x,this.y,10,10);
    
    
}


move(){
	this.x = this.x + this.speed;
	if(this.x > width)[
		this.x = 0];
//move(){
   // star3 = star3 + this.speed;
    //if(star3 = width)[
      //  this.speed = -1 ]
    //]
//}
}

}
