var numOfBoxes = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisp = document.querySelector("#colorDisp");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var level = document.querySelectorAll(".level")

init();

function init(){
	setupLevel();
	setupSquares();
	resizeContainer();
}

function setupLevel(){
	for(var i = 0; i < level.length; i++){
		level[i].addEventListener("click", function(){
			level[0].classList.remove("selected");
			level[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfBoxes = 3 : numOfBoxes = 6;
			resizeContainer();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//adding click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				msg.textContent = "Correct :)";
				changeColors(clickedColor);
				h1.style.background = pickedColor;
				reset.textContent = "Play Again"
			}
			else{
				this.style.background = "#232323";
				msg.textContent = "Try Again :(";
			}
		});
	}
}

function resizeContainer(){
	//generate all new colors
	colors = generateRandomColors(numOfBoxes);
	//pick a random color from the array of generated colors
	pickedColor = pickColor();
	//change colorDisp to match  pickesColor
	colorDisp.textContent = pickedColor;
	//apply color change all squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	reset.textContent = "New Colors"
	msg.textContent = "";
}

// easy.addEventListener("click", function(){
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	numOfBoxes = 3
// 	colors = generateRandomColors(numOfBoxes);
// 	pickedColor = pickColor();
// 	colorDisp.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.background = "steelblue";
// 	reset.textContent = "New Colors"
// 	msg.textContent = "";
// });

// hard.addEventListener("click", function(){
// 	easy.classList.remove("selected");
// 	hard.classList.add("selected");
// 	numOfBoxes = 6
// 	colors = generateRandomColors(numOfBoxes);
// 	pickedColor = pickColor();
// 	colorDisp.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}
// 	h1.style.background = "steelblue";
// 	reset.textContent = "New Colors"
// 	msg.textContent = "";
// });

reset.addEventListener("click", function(){
	// //generate all new colors
	// colors = generateRandomColors(numOfBoxes);
	// //pick a random color from the array of generated colors
	// pickedColor = pickColor();
	// //change colorDisp to match  pickesColor
	// colorDisp.textContent = pickedColor;
	// //apply color change all squares
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
	// reset.textContent = "New Colors"
	// msg.textContent = "";
	resizeContainer();
});


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each square's color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	//math.floor(math.random()*6+1)
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array to store all the random colors
	var colorsArr = [];
	//repeate n times
	for(var i = 0; i < num; i++){
		//get random colors and push inti the array
		colorsArr.push(randomColor());
	}
	return colorsArr;
}

function randomColor(){
	//random valur for Red color from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//random valur for green color from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//random valur for blue color from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"
}
