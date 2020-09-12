class Particles {
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

    this.y = y;
    this.x = x;
    this.r = radius;
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.body = Matter.Bodies.circle(this.x, this.y, this.r/2, options);
    World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        stroke("blue");
        fill("blue");
        ellipse(0, 0, this.r, this.r)
        pop();
    }
}