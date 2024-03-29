var numberOfSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();
function init(){
//mode buttons event listeners
setupModeListener();
setupSquares();
reset();

}
function setupModeListener(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? numberOfSquares=3: numberOfSquares=6;
			reset();
			//figure out how many squares to show
			//pick new colors
			//pick a new picked color
			//update page to reflect change


		});
	}
}
function setupSquares(){
 //correct incorrect logic
		for(var i=0;i<squares.length;i++){
		
		//add click listeners to squares
		squares[i].addEventListener("click",function(){
			//grab color of picked square
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedColor)
			{
				messageDisplay.textContent="correct";
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
				resetButton.textContent="Play Again?"
			}
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";
			}
			//compare color to picked color
		});

	}
}
function reset(){
	//generate all new colors
colors=generateRandomColors(numberOfSquares);
//pick anew random color from array
pickedColor=pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent=pickedColor;
//change color of squares
for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.display="block";
	squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display="none";
		}
	
	}
//change h1 background back to default
h1.style.backgroundColor="steelblue";
messageDisplay.textContent="";
resetButton.textContent="New Colors";
}
//compacted this code
// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numberOfSquares=3;
// 	colors=generateRandomColors(numberOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor=colors[i];

// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}
// });
// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberOfSquares=6;
// 	colors=generateRandomColors(numberOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
		
// 			squares[i].style.backgroundColor=colors[i];
// 			squares[i].style.display="block";
		
// 	}
// });

colorDisplay.textContent=pickedColor;
resetButton.addEventListener("click",function(){
reset();


});


function changeColors(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
	//change each color to match given color
	squares[i].style.backgroundColor=color;


	}
}
//to pick a random color of colors array
function pickColor(){
	var random=Math.floor(Math.random() *colors.length)
	return(colors[random]);
}
//generates randon colors
function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for(i=0;i<num;i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return(arr); 

}
function randomColor(){
	//pick a red from zero to 255
	var r=Math.floor(Math.random()*256);
	//pick a green from 0 to 255
	var g=Math.floor(Math.random()*256);
	//pick a blue color from 0 to 255
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";

}