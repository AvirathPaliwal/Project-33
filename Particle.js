class Particle{
    constructor(x,y,radius){
        var position ={
            isStatic:false,
            restitution:0.4
        }
        this.body =Bodies.circle(x,y,radius,position)
        this.r=radius
        this.color=color(random(0,255), random(0,255), random(0.255));
        World.add(world,this.body);  
    }
    display(){
        var pos=this.body.position;
        var angle =this.body.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        
        
        pop()

    }
}