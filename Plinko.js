class Plinko{
    constructor(x,y){
        var position ={
            isStatic:true
        }
        //radius=10
      this.body = Bodies.circle(x,y,10,position)
      //this.r=radius
      World.add(world,this.body)  
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,7,7)       
    }
}