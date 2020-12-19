class Paper {
    constructor(x, y,radius ) {
      var options = {
          isStatic:false,
          restitution :0.3,
          density:1.2,
          friction: 0.5
      }
      
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
    this.image = loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
     fill("pink");
      
      ellipseMode(CENTER);
     
     image(this.image,pos.x,pos.y,this.radius,this.radius );
      
    }
  };