function Physics (g, reductionConstant, maxHeight, maxWidth) {
	this.g = g;
    this.rC = reductionConstant;
	this.maxHeight = maxHeight;
	this.maxWidth = maxWidth;
	this.friction = 0.9;
	this.maxVelocity = 10;
}

Physics.prototype.updateObjects= function(objlist, time)
{
	for (var i = 0; i < objlist.length; i++) {
		var obj1 = objlist[i];
		
		for(var j = i+1; j < objlist.length; j++)
		{
			var obj2 = objlist[j];
			var col = obj1.getCollision(obj2);
			if(col > 0)
			{
				this.resolveCollision(obj1,obj2,col);
			}	
		}	
		
		this.updateAttributes(obj1,time);
		
				
	}
};

Physics.prototype.resolveCollision= function(obj1, obj2,col)
{
	if( obj1.hasOwnProperty('type') && (obj1.type === "circle")
	&& obj2.hasOwnProperty('type') && (obj2.type === "circle"))
	{
			   	var delta = obj1.position.subtract(obj2.position);
			    var d =  obj1.position.subtract(obj2.position).vectLength();
			    // minimum translation distance to push balls apart after intersecting
			    var mtd = delta.multScalar((obj1.radius + obj2.radius-d)/d); 
			
			
			    // resolve intersection --
			    // inverse mass quantities
			    var im1 = 1 / obj1.mass; 
			    var im2 = 1 / obj2.mass;
			
			    // push-pull them apart based off their mass
			    obj1.position = obj1.position.add(mtd.multScalar(im1 / (im1 + im2)));
			    obj2.position = obj2.position.subtract(mtd.multScalar(im2 / (im1 + im2)));
			
			    // impact speed
			    var v = (obj1.velocity.subtract(obj2.velocity));
			    var vn = v.dotProduct(mtd.normalize());
			
			    // sphere intersecting but moving away from each other already
			    if (vn > 0.0) return;
			
			    // collision impulse
			    var i = (-(1.0 + 0.4) * vn) / (im1 + im2);
			    var impulse = mtd.multScalar(i);
			
			    // change in momentum
			    obj1.velocity = Math.min(this.maxVelocity, obj1.velocity.add(impulse.multScalar(im1)));
			    obj2.velocity = Math.min(this.maxVelocity, obj2.velocity.subtract(impulse.multScalar(im2)));
		
		
		/*obj1.position = obj1.position.subtract(obj1.velocity.normalize().multScalar(col/2));
		obj2.position = obj2.position.subtract(obj2.velocity.normalize().multScalar(col/2));
		
		
		var connector12 = obj1.position.subtract(obj2.position); 
		var connector21 = obj2.position.subtract(obj1.position); 
		var v1 = obj1.velocity;
		var v2 = obj2.velocity;
		
		var c12 = 2*obj2.mass/(obj1.mass+obj2.mass)*connector12.dotProduct(v1.subtract(v2))/connector12.vectLength()/connector12.vectLength();
		var c21 = 2*obj1.mass/(obj1.mass+obj2.mass)*connector21.dotProduct(v2.subtract(v1))/connector21.vectLength()/connector21.vectLength();
		
		obj1.velocity = v1.subtract(connector12.multScalar(c12));
		obj2.velocity = v2.subtract(connector21.multScalar(c21));*/
		/*console.log(col);
		connector = connector.multScalar(col/2);
		console.log(connector);
		obj2.position = obj2.position.add(connector);
		obj1.position = obj1.position.subtract(connector);
		
		var v1X = obj1.velocity.X;
		var v1Y = obj1.velocity.Y;
		var v2X = obj2.velocity.X;
		var v2Y = obj2.velocity.Y;
		var m1 = obj1.mass;
		var m2 = obj2.mass;
		
		obj1.velocity.X = v1X + 2*(v2X-v1X)*m2/(m1+m2);
		obj1.velocity.Y = v1Y + 2*(v2Y-v1Y)*m2/(m1+m2);
		
		obj2.velocity.X = v2X + 2*(v1X-v2X)*m1/(m1+m2);
		obj2.velocity.Y = v2Y + 2*(v1Y-v2Y)*m1/(m1+m2);*/
	}
};

Physics.prototype.updateAttributes= function(obj,time)
{
		if(obj.hasOwnProperty('type') && (obj.type === "circle"))
			{
				
				if(obj.position.Y >= this.maxHeight - obj.radius)
				{
					obj.timeOnGround+=1;
					if(obj.timeOnGround > 5)
					{
						obj.velocity.Y = 0;
						obj.acceleration.Y = 0;
						obj.timeOnGround = 0;
					}
					obj.velocity.X = obj.velocity.X * this.friction;	
				}
				else
				{
					obj.timeOnGround=0;
					obj.acceleration.X = this.g.X;
					obj.acceleration.Y = this.g.Y;
				}
				
				obj.velocity.X =  Math.min(this.maxVelocity, obj.velocity.X + obj.acceleration.X*(obj.creationTime - time)/1000);
				obj.velocity.Y = Math.min(this.maxVelocity, obj.velocity.Y + obj.acceleration.Y*(obj.creationTime - time)/1000);
		
				if(obj.velocity.X < this.g)
				{
					obj.velocity.X = 0;
				}
				
				if(obj.velocity.Y < this.g)
				{
					obj.velocity.Y = 0;
				}
			
				obj.position.X += obj.velocity.X*(obj.creationTime - time)/1000;
				obj.position.Y += obj.velocity.Y*(obj.creationTime - time)/1000;
		
				//ground check
				var h = this.maxHeight - obj.position.Y - obj.radius;
			
				if(h < 0)
				{
					obj.position.Y += h; 
					obj.velocity.Y = -obj.velocity.Y*this.rC; 
				}
				//left check
				if(obj.position.X - obj.radius < 0)
				{
					obj.position.X = obj.radius;
					obj.velocity.X = -obj.velocity.X*this.rC;
				}
				
				//right check
				if(obj.position.X + obj.radius > this.maxWidth)
				{
					obj.position.X = this.maxWidth - obj.radius;
					obj.velocity.X = -obj.velocity.X*this.rC;
				}
				//top check
				if(obj.position.Y - obj.radius < 0)
				{
					obj.position.Y = obj.radius;
					obj.velocity.Y = -obj.velocity.Y*this.rC;
				}
	}
};