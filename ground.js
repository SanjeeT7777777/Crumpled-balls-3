class Ground {
    constructor(x,y) {

        var options1 = {
            isStatic:true,
        }

        this.body = Bodies.rectangle(x,y,1600,20, options1);
        this.width=1600;
        this.height=20;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
       fill("green");
        rect(pos.x,pos.y,this.width,this.height);
        
    }
};