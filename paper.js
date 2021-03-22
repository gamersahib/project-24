class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3  
        }
    };
    this.body=Bodies.circle(150, 600, 20, options)
    this.width = width;
      this.height = height;
      World.add(world, this.body);
}
display(){
    ellipseMode(RADIUS);
}

