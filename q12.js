function removerPropriedade(obj, prop){
    let jsonObj = JSON.stringify(obj)
    let newObj = JSON.parse(jsonObj)

    for(let i in newObj){
        if(String(i) == prop) delete newObj[prop]
    }

    return newObj
}

removerPropriedade({a: 1, b: 2}, "a")