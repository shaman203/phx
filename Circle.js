function Circle (radius, mass, position, velocity, acceleration) {
	this.radius = radius;
    this.mass = mass;
	this.position = position;
	this.velocity = velocity;
	this.acceleration = acceleration;
	this.type = "circle";
	this.creationTime = Date.now();
	this.timeOnGround = 0;
}
 
Circle.prototype.getCollision = function(obj) {
	if(obj.hasOwnProperty('type') && (obj.type === "circle"))
	{
		var r1 = obj.radius; 
		var r2 = this.radius;
		
		var x1 = obj.position.X;
		var x2 = this.position.X;
		var y1 = obj.position.Y;
		var y2 = this.position.Y;

		return (r1+r2) - Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
	}
    return 0; 
};

