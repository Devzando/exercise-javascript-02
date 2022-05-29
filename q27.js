function inverter(obj){
    let newObj = {}
    for(let i in obj){
        newObj[obj[i]] = String(i)
    }

    return newObj
}

inverter({ a: 1, b: 2, c: 3})