 /*     A. Rellena un array con 5 números pedidos por teclado. 
        B. Pide un número por teclado e indica si está o no en el array, en qué 
        posición y cuántas veces se repite.

 */

 function $fillArray(numbers) {
 	var number;
 	var counter;
 	counter = 0;

 	for (let i = 0; i < 5; i++) {
 		number = prompt("Introduce un numero: ");
 		number = parseInt(number);

 		numbers[i] = number;
 	}

 	alert("Los elementos del array son: ")

 	number = parseInt(prompt("Introduce un numero para comprobar si esta en el array"));


 	for (let i = 0; i < numbers.length; i++) {
 		if (number == numbers[i]) {
 			counter++	;
 			document.write(number + " encontrado en la posicion " + i + " del array" + "<br>");
 		}
 	}

 	document.write("<br>" + "Veces encontrado: " + counter + "<br>")
 	return numbers;
 }
