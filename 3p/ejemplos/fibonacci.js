//serie de fibonacci
function serie(n){
    let x=0,y=1,z=1
    if(n<=2){
        switch (n) {
            case 0:
                console.log('numero invalido')
            break;
            case 1:
                console.log('0')
            break;
            case 2:
                console.log('0 '+'1')
            break;
        }
    }
    else{
        console.log(x)
        console.log(y)
        for(var i=1;i<(n-1);i++){
            z=x+y
            console.log(z)
            x=y
            y=z
        }
    }
}
serie(10)
