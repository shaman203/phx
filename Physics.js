function Physics (g, reductionConstant, maxHeight, maxWidth) {
	this.g = g;
    this.rC = reductionConstant;
	this.maxHeight = maxHeight;
	this.maxWidth = maxWidth;
}

Physics.prototype.updateObjects= function(objlist, time)
{
	for (var i = 0; i < objlist.length; i++) {
       var obj = objlist[i];
		if(obj.hasOwnProperty('type') && (obj.type === "circle"))
		{
			
			if(obj.position.Y == this.maxHeight - obj.radius)
			{
				obj.timeOnGround+=1;
				if(obj.timeOnGround > 5)
				{
					obj.velocity.Y = 0;
					obj.acceleration.Y = 0;
					obj.timeOnGround = 0;
				}	
			}
			else
			{
				obj.timeOnGround=0;
				obj.acceleration.X = this.g.X;
				obj.acceleration.Y = this.g.Y;
			}
			

			
			obj.velocity.X += obj.acceleration.X*(obj.creationTime - time)/1000;
			obj.velocity.Y += obj.acceleration.Y*(obj.creationTime - time)/1000;
	
			obj.position.X += obj.velocity.X*(obj.creationTime - time)/1000;
			obj.position.Y += obj.velocity.Y*(obj.creationTime - time)/1000;
	
			var h = this.maxHeight - obj.position.Y - obj.radius;
		
			if(h < 0)
			{
				console.log(obj.velocity);
				obj.position.Y += h; 
				obj.velocity.Y = -obj.velocity.Y*this.rC; 
			}
			
		}
	}
};