let itens = document.querySelectorAll(".carousel-item");
let max = itens.length / 4; //o max é o numero maximo de avanços que o carrossel pode ter, tendo 4 itens por tela.
let clicks = 0;

if (max % 4 !== 0)
	max = Math.floor(max) + 1;
else
	max = Math.floor(max);

function moveForward() {
	/*
	    Aqui, todos os elementos são empurrados 740px * quantidade de avanços (clicks) para a direita,
	    fazendo o avanço do carrossel. Se clicks == 0, mostrará a posição original da lista, se clicks == 1,
	    todos os elementos vão avançar 740px para a direita. Se clicks == 2, o avanço será de 1.480,
	    e assim sucessivamente até chegar ao último avanço possível.
	*/


	clicks++;

	if (clicks > max)
		clicks = max;
	else 
	    for(let i = 0; i < itens.length; i++)
		    itens[i].style.left = (-740 * clicks) + "px";
}

function moveBack() {
	/*
        Aqui, a função vai ser chamada quando for pedido para voltar para um estado anterior. Por exemplo,
        caso antes da chamada essa função o valor atual de clicks fosse 2, quer dizer que antes os elementos já teriam 
        avançado 1.480 pixels para a direita. Quando invocada a função, clicks passa a ser 1, então todos os elementos 
        vão ter que regredir para que voltem a ter uma distância de (-740 * clicks) da esquerda.
    */

	clicks--;

	if (clicks < 0)
		clicks = 0;
	else //aqui
	    for(let i = 0; i < itens.length; i++)
	        itens[i].style.left = (-740 * clicks) + "px";
}