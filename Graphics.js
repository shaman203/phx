function Graphics (canvasId) {
    
    this.mainCanvas = document.getElementById(canvasId);
    this.mainContext = this.mainCanvas.getContext('2d');
}

Graphics.prototype.drawObjects = function(objlist)
{
    this.mainContext.clearRect(0, 0, 500, 500);

    for (var i = 0; i < objlist.length; i++) {
       var obj = objlist[i];
       if(obj.hasOwnProperty('type') && (obj.type === "circle"))
	   {
    		this.mainContext.beginPath();
            //x,y,r,sAngle,eAngle,counterclockwise                 
            this.mainContext.arc(obj.position.X,obj.position.Y,obj.radius,0,2*Math.PI);
                             
            this.mainContext.closePath();
    
            this.mainContext.fillStyle = 'rgba(185, 211, 238, 255)';
            this.mainContext.fill();
    	}
    }
};