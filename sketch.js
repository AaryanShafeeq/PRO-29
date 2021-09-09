const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let bridge;
let wall1, wall2, ground;

let jointPoint, jointLink;

let stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });

  wall1 = new Base(220, height / 2, 100, 100);
  wall2 = new Base(width - 600, height / 2, 100, 100);

  ground = new Base(0, height - 10, width * 2, 20);
  jointPoint = new Base(width - 600, height / 2 + 10, 40, 20);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for (let i = 0; i <= 8; i++) {
    let x = random(width / 2 - 400, width / 2 + 400);
    let y = random(-10, 130);

    let stone = new Stone(x, y, 50, 50);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show();

  wall1.display();
  wall2.display();

  ground.display();

   for (let i = 0; i < stones.length; i++) {
    stones[i].display();
  } 
}
