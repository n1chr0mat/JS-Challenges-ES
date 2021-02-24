/*
Realiza una función que simule el rellenar un array para una Primitiva. 
Para rellenar el boleto deberemos pedir seis números DIFERENTES entre el 
1 y el 49. Además de dos números más como complementarios.
*/

function $fillArray(numbers) {
	var number;
	var counter;
	var subCounter;
	counter = 0;


	while (counter < 6) {
		number = prompt("Introduce un numero");
		number = parseInt(number);
		subCounter = 0;

		
		for(let i = 0; i < numbers.length; i++) {
			if(numbers[i] == number){
				subCounter++;
			}
		}

		if(subCounter > 0) {
			alert("Los numeros no pueden repetirse");
		}

		else if (number < 1 || number > 50) {
			alert("Los numeros deben ser comprendidos entre el 1 y el 49");

		}

		else {
			numbers[counter] = number;
			counter++;
		}
	}


	return numbers;
}
