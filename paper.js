class paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body= Bodies.circle(x,y,r,options)
        this.r=r;
        this.image=loadImage("paper.png")       
        
        World.add(world,this.body);}

 display(){
var pos=this.body.position;
var angle=this.body.angle;
this.image.scale=0.2;
push();
translate(pos.x,pos.y);
rotate();
ellipseMode(RADIUS);
fill("white")
ellipse(0,0,this.r,this.r)

imageMode(CENTER)
image(this.image,0,0,70,70)

pop();
}}
