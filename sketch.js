var spot = {
    x : 100,
    y : 50,
};
let star1;

function setup(){
    createCanvas(900,950);
    
    frameRate(20);
    star1 = new Star(100,100,1);
}

function draw(){
    background(21,47,96);

   star1.display();
   star1.move();
    //stars
    spot.x = random(0,width);
    spot.y = random(400,0);
    fill(237,223,35);
    ellipse(spot.x, spot.y, 10, 10);

    //how do i color whole dino?
    beginShape()
    fill(120, 132, 23);
    
    strokeWeight(2);
    stroke(24,10,38);
    
    //head
    //fill(186, 35, 237);
    bezier(500,515,493,485,485,455,545,460);
    bezier(545,460,575,430,620,445,535,525);
    ellipse(530,473,5,5);

    //neck
    bezier(500,515,450,690,450,630,410,720);
    bezier(535,525,495,715,490,650,465,735);

    //body
    bezier(410,720,370,730,270,750,260,860);
    bezier(440,780,430,805,425,820,400,838);
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
    bezier(310,850,360,790,420,850,430,880);
    line(430,880,515,880);
    bezier(515,880,520,855,540,855,540,905);
    line(250,905,540,905);

    //tail
    bezier(250,905,150,905,25,900,20,800);
    bezier(260,860,150,900,25,880,20,800);
    endShape();

    line(0,907,950,907);

}

class Star{
	constructor(tempX, tempY, tempSpeed){          
	this.x = tempX;
	this.y = tempY;
	this.speed = tempSpeed;
              
}
display(){
    fill(237,223,35);
	ellipse(this.x,this.y,20,20);
}


move(){
	this.x = this.x + this.speed;
	if(this.x > width)[
		this.x = 0];

}

}
