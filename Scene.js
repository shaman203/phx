var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

var circles = new Array();


var phx;
var graphx;


function init()
{
    phx = new Physics(new Vector(0.0,0.01),0.4,500,500);
    graphx = new Graphics("myCanvas");
    
    var circle = new Circle(20, 5, new Vector(150,50), new Vector(0,0), new Vector(0,0));
	circles.push(circle); 

}
 
function run() {
    phx.updateObjects(circles, Date.now());
    graphx.drawObjects(circles);
	requestAnimationFrame(run);
}

function addCircle()
{
    var mass = parseFloat(document.getElementById('mass').value);
    var radius = parseFloat(document.getElementById('radius').value);
    var xPos = parseFloat(document.getElementById('xPos').value);
    var yPos = parseFloat(document.getElementById('yPos').value);
    var xVel = parseFloat(document.getElementById('xVel').value);
    var yVel = parseFloat(document.getElementById('yVel').value);
   
    var circle = new Circle(mass, radius, new Vector(xPos,yPos), new Vector(xVel,yVel), new Vector(0,0)); 
    circles.push(circle);
}