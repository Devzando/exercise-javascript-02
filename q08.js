let x = 0
let valor = 0
function multiplicar(num1, num2){
    if (num1 == num2){
        return num1**2
    }else if(num1 > num2){
        x = num1

        while( x > 0 ){
            valor+=num2
            x-=1
        }

    }else{
        x = num2
        while( x > 0 ){
            valor+=num1
            x-=1
        }
    }

    return valor
}


multiplicar(4, 4)