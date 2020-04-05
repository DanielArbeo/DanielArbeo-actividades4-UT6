let cadena = prompt("Introduce una palabra")
console.log("La cadena " + cadena + " contiene " + cadena.length + " caracteres")
console.log("La cadena en mayusculas es " + cadena.toUpperCase())
console.log("La cadena en minisculas es " + cadena.toLowerCase())

let contador = 0;
cadena = cadena.toLowerCase()
for( let x=0; x < cadena.length ; x++ ) 
{
 if ((cadena.charAt(x)=='a') || (cadena.charAt(x)=='e') || (cadena.charAt(x)=='i') || (cadena.charAt(x)=='o') || (cadena.charAt(x)=='u'))
{ 
    contador++;
}
}
console.log("La palabra " + cadena + "contiene " + contador + " vocales");