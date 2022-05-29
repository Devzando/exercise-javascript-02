function contarCaractere(carac, text){
    let quant = 0
    for(let i in text){
        if(text[i] == carac) quant+=1 
    }

    return quant
    
}

contarCaractere("r", "A sorte favorece os audazes")