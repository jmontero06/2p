var numeros = [1,2,34,5,-2,54,3 ];

var min = numeros[0];

for (let x of numeros) {
    if (numeros[x] < min) {
       
        min = numeros[x];
    }
}
console.log('Valor mínimo: ' + min);