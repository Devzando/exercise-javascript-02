function receberSomenteOsParesDeIndicesPares(list){
    let result = []
    list.forEach((item, idx) => {
        if(item%2 == 0 && idx%2 == 0) result.push(item)
    })

    return result

}

receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])