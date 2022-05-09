let itens = document.querySelectorAll(".carousel-item");
let max = itens.length / 4;
let clicks = 0;

if (max % 4 !== 0)
	max = Math.floor(max) + 1;
else
	max = Math.floor(max);

function moveForward() {
	clicks++;
	
		for(let i = 0; i < itens.length; i++)
			if (clicks > max) {
				clicks = max;
				break;
			}
			else if (clicks >= 0 && clicks <= max)
		    	itens[i].style.left = (-740 * clicks) + "px";
}

function moveBack() {
	clicks--; 

		for(let i = 0; i < itens.length; i++)
			if (clicks < 0) {
				l = 0;
				break;
			}
			else if (clicks >= 0 && clicks <= max)
				itens[i].style.left = (-740 * clicks) + "px";
}

