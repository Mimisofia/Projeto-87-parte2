
// Create canvas variable
var canvas = new fabric.canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// para enviar imagens
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
		
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});	
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{
		// enviar ranger escarlate
		new_image('docinho.png');
		console.log("d");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('florzinha.jpeg');
		console.log("f");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('lindinha.png');
		console.log("l");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
		new_image('professor.png');
		console.log("p");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('macacolouco.jpg');
		console.log("m");
	// enviar ranger índigo
	
	}
	
}

