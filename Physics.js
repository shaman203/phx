function Physics (g, reductionConstant) {
	this.g = g;
    this.rC = reductionConstant;
}

Physics.prototype.updateObjects= function(objlist)
{
	for (var i = 0; i < objlist.length; i++) {
       var obj = objlist[i];
		if(obj.hasOwnProperty('type') && (obj.type === "circle"))
		{
			
			obj.position.X = obj.position.X+1;
			/*float newXPos = obj->position.getX() + obj->velocity.getX()*dt;
			float newYPos = obj->position.getY() + obj->velocity.getY()*dt;
	
			float newXvelo = obj->velocity.getX() + obj->acceleration.getX() *dt;
			float newYvelo = obj->velocity.getY() + obj->acceleration.getY() *dt;
		
			float radius = ((phx::Circle*)obj)->getRadius();
		
			if (newYPos < radius) //if we touch the ground
			{
				newYPos = ((phx::Circle*)obj)->getRadius();
				newXvelo = newXvelo*reductionConstant;
				newYvelo = -1 * newYvelo*reductionConstant;
			}
			if (newXPos < radius) //if we touch left wall
			{
				newXPos = ((phx::Circle*)obj)->getRadius();
				newYvelo = newYvelo*reductionConstant;
				newXvelo = -1 * newXvelo*reductionConstant;
			}
			if (newXPos > this->maxWidth - radius) //if we touch right wall
			{
				newXPos = this->maxWidth - radius;
				newYvelo = newYvelo*reductionConstant;
				newXvelo = -1 * newXvelo*reductionConstant;
			}
		
			if (newYPos > this->maxHeight - radius) //if we touch the ceiling
			{
				newYPos = this->maxHeight - radius;
				newXvelo = newXvelo*reductionConstant;
				newYvelo = -1 * newYvelo*reductionConstant;
			}
		
			if (newYvelo < 60)
				newYvelo = 0;
			if (newXvelo < 60)
				newXvelo = 0;
			obj->setPosition(newXPos, newYPos);
			obj->setVelocity(newXvelo, newYvelo);
			*/
		}
	}
};