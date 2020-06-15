function factorial(n){
    let f=1
    for(let a=2;a<=n;a++){
        f=f*a
    }
    return f
}
function permtacion(n,r){
    let per=factorial(n)/factorial(n-r)
    return per
}
console.log(permtacion(8,5))