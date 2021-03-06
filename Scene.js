var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

var circles = new Array();


var phx;
var graphx;


function init()
{
    phx = new Physics(new Vector(0.0,0.9),0.4,500,500);
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
   
    var circle = new Circle(radius, mass, new Vector(xPos,yPos), new Vector(xVel,yVel), new Vector(0,0)); 
    circles.push(circle);
}

function clearAll()
{
    circles = new Array();
}

function gravityChanged()
{
    if( document.getElementById("gravity").checked)
    {
        phx.g = new Vector(0.0,0.9);
        for (var i = 0; i < circles.length; i++) {
		var obj1 = circles[i];
		  obj1.creationTime = Date.now();
	   }
    }
    else
    {
        phx.g = new Vector(0.0,0);
    }
}