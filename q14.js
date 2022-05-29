function objetoParaArray(obj) {
    let list = []
    for (let i in obj) {
        list.push([i, obj[i]])
    }
    return list
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})