'use strict'

function palabra()
{
let cad1 = prompt("Introduce una palabra")
console.log("La cadena " + cad1 + " tiene " + cad1.length + " caracteres")

console.log("La cadena en mayusculas es: " + cad1.toUpperCase())
console.log("La cadena en minusculas es: " + cad1)

let contador= 0

    for(let i=0;i<cad1.length;i++)
    {
    if (cad1.charAt(i)=='a')

            contador++

    else if (cad1.charAt(i)=='e')

            contador++

    else if (cad1.charAt(i)=='i')

            contador++

    else if (cad1.charAt(i)=='o')

            contador++

    else if (cad1.charAt(i)=='u')

            contador++

     console.log("La cadena " + cad1 + " contiene " + contador + " vocales.")
    }

    let palabralreves=""

    for(let i=cad1.length-1; i>=0; i--){

        palabralreves=palabralreves + cad1[i]
    }

    console.log(palabralreves)
    
}

palabra()

