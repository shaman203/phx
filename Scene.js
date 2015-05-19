var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

var circles = new Array();


var phx;
var graphx;


function init()
{
    phx = new Physics(new Vector(0.0,0.01),0.3,500,500);
    graphx = new Graphics("myCanvas");
    
    var circle = new Circle(20, 5, new Vector(150,50), new Vector(0,0), new Vector(0,0));
	circles.push(circle); 
    
    circle = new Circle(20, 5, new Vector(120,150), new Vector(0,0), new Vector(0,0));
	circles.push(circle); 
    
    circle = new Circle(20, 3, new Vector(40,150), new Vector(0,0), new Vector(0,0));
	circles.push(circle); 
}
 
function run() {
    phx.updateObjects(circles, Date.now());
    graphx.drawObjects(circles);
	requestAnimationFrame(run);
}