'use strict;'
let cadena = prompt("Dime una palabra: ")

function invertir(cadena) {
	
	var x = cadena.length;
	var cadenaInvertida = "";

	while (x>=0) {
		cadenaInvertida = cadenaInvertida + cadena.charAt(x);
		x--;
	}
	
	return cadenaInvertida;
}


if ( cadena!=invertir(cadena) )
console.log("No es un palindromo")
else
console.log("Es un palindromo")