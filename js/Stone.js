class Stone {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;

        this.width = w;
        this.height = h;

        let options = {
            restituition: 0.9,        
        }

        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }

    display() {
        push();

        translate(this.body.position.x, this.body.position.y);
        ellipseMode("CENTER");
        fill("white");
        ellipse(0, 0, this.width, this.height);

        pop();
    }
}