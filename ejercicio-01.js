/*
Construyamos una calculadora que pueda calcular el promedio de un número arbitrario de argumentos.
La prueba espera que proporcione un objeto Calculadora con un método promedio:
Calculator.average()
La prueba también espera que cuando no pase argumentos, devuelva 0. Se espera que los argumentos sean números enteros.
Espera Calculator.average(3,4,5)volver 4.
*/
const Calculator = {
    average: function(...argument) {
     // Your code here... 
    const result = ([...argument] === 0)? 0 : result = [...argument].reduce( (acc, item)=> {
        acc = acc + item
        return acc / [...argument].length
    },0)
    return (result)
    }
   };
const {average} = Calculator
console.log(average(1,2,3,34,4,5,3,32));
