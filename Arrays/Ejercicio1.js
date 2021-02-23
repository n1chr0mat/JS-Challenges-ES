/*
    1. Rellena un array de 5 posiciones de forma que el número de la casilla 0 
    sea un valor introducido por el usuario y el resto de números sean el resultado 
    de ir sumando 2 a ese valor inicial.
Por ejemplo, si el usuario introduce un 7, el array resultante estaría formado por 
los números: 7, 9, 11, 13 , 15.
*/

function $fillArray(numbers) {

	var number;

	number = prompt("Introduce un numero");
	number = parseInt(number);

	for (let i = 0; i < 5; i++) {
		numbers[i] = number;
		number = number + 2;
	}

	return numbers;

}
