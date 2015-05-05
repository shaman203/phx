var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

var circles = new Array();


var phx;
var graphx;


function init()
{
    phx = new Physics(10,0.7);
    graphx = new Graphics("myCanvas");
    
    var circle = new Circle(50, 50, new Vector(50,50), new Vector(0,0), new Vector(0,0));
	circles.push(circle); 
    
    circle = new Circle(50, 50, new Vector(150,150), new Vector(0,0), new Vector(0,0));
	circles.push(circle); 
}
 
function run() {
    phx.updateObjects(circles);
    graphx.drawObjects(circles);
	requestAnimationFrame(run);
}