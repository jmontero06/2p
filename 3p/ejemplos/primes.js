    // n numeros primos

function primo(num){
    let contador=0
    for(var a=1;a<=num;a++){
        if(num%a===0){
            contador++
        }
        if(contador>2){
            return false
        }
    }
    if(contador<=2){
        return true
    }
}
function imprecion(cuantos){
    let contador=0,ciclo=1
    do {
       if(primo(ciclo)==true){
           console.log(ciclo)
           contador++
       }
       ciclo++
    } while(contador<cuantos);
}
imprecion(20)