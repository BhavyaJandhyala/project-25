class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image= loadImage("sprites/paper.png");
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      image(this.image,pos.x, pos.y, this.radius);
    }
    


}