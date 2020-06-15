function radio(a,b,c){
    s=(1/2)*(a+b+c)
    return (Math.sqrt(s*(s-a)*(s-b)*(s-c)))/(s)
}
console.log(radio(5,6,7))