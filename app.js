const drag = document.getElementById("drag")
const box = document.getElementById("box")

let active = false;

var bBox = box.getBoundingClientRect()
var dW = drag.offsetWidth
var dH = drag.offsetHeight

var startX; 
var startY;
var offsetX = 0;
var offsetY = 0;

var difX;
var difY;


window.addEventListener('mousedown', (e) => {
	active = true
	startX = e.clientX - offsetX
	startY = e.clientY - offsetY
})

window.addEventListener('mousemove', (e) => {
	if (active){
		e.preventDefault();
		difX = e.clientX - startX
		difY = e.clientY - startY
		offsetY = difY
		offsetX = difX
		move(difX,difY)
	}

})

window.addEventListener('mouseup', (e) => {
	active = false
	startX = startX + difX
	startY = startY + difY
})

function move(x,y){
	//left
	if (x < 0) x = 0;
	//right
	if (x+dW > bBox.width) x = bBox.width- dW;
	//top
	if (y < 0) y = 0;
	//bottom
	if (y+dH > bBox.height) y = bBox.height - dH;

	drag.style.transform = `translate(${x}px,${y}px)`
}


const timing = {
	duration: 1000,
	iterations: 1,
}

function fling(x,y){
	let dest = {transform: `translate(${x},translate${y})`}
	drag.animate({transform: translate})
}