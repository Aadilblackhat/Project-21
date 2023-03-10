class Ground{
 constructor(x, y, width, height) {

    const options = {
        isStatic:true
    }
  
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;

    World.add(world, this.body);
 }

 display() {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
 }
}