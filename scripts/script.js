let itens = document.querySelectorAll(".carousel-item");
let max = itens.length / 4;
let clicks = 0;

if (max % 4 !== 0)
	max = Math.floor(max) + 1;
else
	max = Math.floor(max);

function moveForward() {
	clicks++;

	if (clicks > max)
		clicks = max;
	else
	    for(let i = 0; i < itens.length; i++)
		    itens[i].style.left = (-740 * clicks) + "px";
}

function moveBack() {
	clicks--;

	if (clicks < 0)
		clicks = 0;
	else
	    for(let i = 0; i < itens.length; i++)
	        itens[i].style.left = (-740 * clicks) + "px";
}