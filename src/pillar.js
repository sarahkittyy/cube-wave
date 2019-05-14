class Pillar
{
	constructor(x, y)
	{	
		this.s = 20;
		
		this.x = x * this.s;
		this.y = y * this.s;
		
		this.shift = 0;
	}
	
	update()
	{
		let id = (this.x + this.y);
		this.shift = sin((millis()/7) + id) * 30;
	}
	
	show()
	{
		let id = (this.x + this.y);
		let hue = (sin(millis()/7 + id) * 360/2) + 180;
		translate(this.x, this.y, this.shift);
		fill(color(hue, 100, 100));
		box(this.s);
		translate(-this.x, -this.y, -this.shift);
	}
}