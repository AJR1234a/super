const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var pendulam1,pendulam2,pendulam3,pendulam4,pendulam5;
var sling1,sling2,sling3,sling3,sling4,sling5;
var engine,world;

function setup(){
canvas=createCanvas(windowWidth /2 , windowHeight / 1.5);
engine =Engine.create()
world=engine.world;

let canvasmouse=Mouse.create(canvas.elt);
canvasmouse.pixelRatio =pixelDensity();
let options = {
        mouse:canvasmouse

}
mConstaint =Mouse.constraint.create(engine,options);
World.add(world,mConstaint);

}
function draw(){
pendulam1.display();
pendulam2.display();
pendulam3.display();
pendulam4.display();
pendulam5.display();
sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();
}


function mouseDragged(){
     Matter.Body.setPosition(pendulam1.body,{x:mouseX,y:mouseY})



}







