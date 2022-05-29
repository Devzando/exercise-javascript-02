function menorNumero(list){
    let menor = list[0]
    list.forEach(item => {
        if(item < menor) menor = item
    });

    return menor
}

menorNumero([10, 5, 35, 65])