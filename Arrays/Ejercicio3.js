/*
    Realiza una función que rellene un array de 5 números. 
    Cada número debe estar comprendido entre 1 y 49 y para ellos 
    deberemos realizar una función que controle que los valores 
    introducidos en un array están comprendidos entre los números 
    1 y 49. Si el valor está fuera de este rango mostraremos un 
    mensaje de alerta y pediremos otro.

*/

function $fillArray(number, numbers) {

	var counter;
	counter = 0;
	while (counter < 5) {
		number = prompt("Introduce un numero");
		number = parseInt(number);

		if (number >= 1 && number <= 49) {

			numbers[counter] = number;
			counter++;

		}
	}

	return numbers;

}
