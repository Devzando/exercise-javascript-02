function filtrarPorQuantidadeDeDigitos(list, num){
    const result = list.filter(element => {
        if(String(element).length == num) return element
        
    });
    return result
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 3)