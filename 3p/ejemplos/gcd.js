//algoritmo de euclides
function euclides(a,b){
    while (b!=0){
        let x=b
        b=a%b
        a=x
    }
    return a
}
