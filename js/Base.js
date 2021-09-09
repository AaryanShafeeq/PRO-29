class Base {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;

        this.width = w;
        this.height = h;

        let options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode("CENTER");
        rect(0, 0, this.width, this.height);
        pop();
    }
}