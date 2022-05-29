function funcaoDaSorte(num){
    let newNum = Math.floor(Math.random() * (11 - 1)) + 1
    if(num == newNum){
        return "Parabéns! O número sorteado foi o", newNum
    }else{
        return "Que pena! O número sorteado foi o", newNum
    }
}

funcaoDaSorte(10)