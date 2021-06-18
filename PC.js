class PC{
    constructor(x,y,width,height){

this.body=Bodies.rectangle(x,y,width,height)
this.width=width;
this.height=height;
//this.image=loadImage("images/mario.png")
this.image=loadImage("images/mario.png")

World.add(world,this.body)


    }
    display(){
        var angle=this.body.angle;
        push ();
        
        rotate (angle);
        image(this.image,5,280,200,200)
        pop ()
    }

}