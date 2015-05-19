function Vector (x, y) {
	this.X = x;
    this.Y = y;
}

Vector.prototype.add = function(vect)
{
	return new Vector(this.X+vect.X, this.Y+vect.Y);
};

Vector.prototype.subtract = function(vect)
{
	return new Vector(this.X - vect.X, this.Y-vect.Y);
};

Vector.prototype.dotProduct = function(vect)
{
	return this.X * vect.X + this.Y-vect.Y;
};

Vector.prototype.vectLength = function()
{
	return Math.sqrt(this.X * this.X + this.Y*this.Y);
};

Vector.prototype.normalize = function()
{
	var size = Math.sqrt(this.X*this.X + this.Y*this.Y);
	return new Vector(this.X / size, this.Y / size);
};

Vector.prototype.multScalar = function(s)
{
	return new Vector(this.X * s, this.Y * s);
};