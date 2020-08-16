class Paper {
    constructor(x,y) {

        var options1 = {
            isStatic:false,
            restitution:0.7,
            friction:2.0,
            density:0.2
        }
        this.body = Bodies.circle(x,y,20, options1);
        this.width=20;
        this.height= 20;
this.image = loadImage("sprites/paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
imageMode(CENTER);
image(this.image,0,0,70,70);
        pop();
    }
};