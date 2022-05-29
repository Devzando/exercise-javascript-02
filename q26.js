function removerVogais(text){
    let vogais = 'aeiou'
    let result = ''
    let controller = true

        for(let i in text){
            controller = true
            for(let x in vogais){
                if(text[i] != vogais[x] && controller){
                    controller = true
                }else{
                    controller = false
                }
            }
            if(controller) result += text[i]
        }

    return result
}

removerVogais("Fundamentos")