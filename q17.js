function somarNumeros(list){
    let soma = 0;
    list.forEach(item => {
        soma+=item
    });

    return soma
}

somarNumeros([10, 10, 10])