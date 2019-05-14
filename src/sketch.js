let pillars = [];

function setup()
{
	createCanvas(500, 500, WEBGL);
	
	for(let y = -5; y < 5; ++y)
	{
		for(let x = -5; x < 5; ++x)
		{
			pillars.push(new Pillar(x, y));
		}
	}
	angleMode(DEGREES);
}

function draw()
{
	background(127, 127, 255);
	
	orbitControl(8, 8);
	
	colorMode(HSB, 360, 100, 100);
	for(let pillar of pillars)
	{
		pillar.update();
		pillar.show();
	}
	colorMode(RGB, 255);
}