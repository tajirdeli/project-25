class BOX{
    constructor(x,y,width,height){
        var a ={
            isStatic: true
          }
    this.body=Bodies.rectangle(x,y,width,height,a)
    this.width=width
    this.height=height 
    World.add(world,this.body)
    this.image = loadImage("sprites/dustbingreen.png");
    }
    display(){
    var pos=this.body.position
    rectMode(CENTER)
   fill ("red")
    rect(pos.x,pos.y,this.width,this.height)
    
    
    }
    
    
    }