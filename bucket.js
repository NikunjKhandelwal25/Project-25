class drop{
    constructor(x,y,width,height){
        var option= {
            isStatic :true
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
        this.image=loadImage("dustbingreen.png")   
     }
     display(){
         var pos=this.body.position;
         rectMode(CENTER);
         fill("red")
        push();
        imageMode(CENTER)
image(this.image,1430,480,0,0)
pop();
         rect(pos.x,pos.y,this.width,this.height);
     }
    
}