function Circle (radius, mass, position, velocity, acceleration) {
	this.radius = radius;
    this.mass = mass;
	this.position = position;
	this.velocity = velocity;
	this.acceleration = acceleration;
	this.type = "circle";
}
 
Circle.prototype.collision = function(obj) {
	if(obj.hasOwnProperty('field') && (obj.type === "circle"))
	{
		//if()
	}
    return false; 
};

