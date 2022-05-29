function receberPrimeiroEUltimoElemento(valor){
    let newArray = []
    valor.forEach((element, idx) => {
        if (idx == 0 || idx == valor.length -1) newArray.push(element)
    });

    return newArray
}

receberPrimeiroEUltimoElemento([1,2,3])