function repetir(valor, rep){
    let list = []
    while(rep > 0){
        list.push(valor)
        rep-=1
    }

    return list
}

repetir(3, 4)