function potencia(base,potencia){
    let res=1
    for(let a=1;a<=potencia;a++){
        res=res*base
    }
    return res
}
console.log(potencia(2,3))