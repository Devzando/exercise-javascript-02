function simboloMais(rep){
    let valor = '+';

    while(rep > 0){
        valor+='+'
        rep-=1
    }
    
    return valor
}

simboloMais(3)