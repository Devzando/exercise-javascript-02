function despesasTotais(listObj) {
    let despesa = 0
    listObj.forEach(item => {
        despesa+=item.preco
    });

    return despesa
}

despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
])