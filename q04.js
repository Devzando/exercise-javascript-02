function nomeDoMes(numMes) {
    let date = new Date(2021, numMes, 17)
    return date.toLocaleDateString('pt-br', {month: 'long'})
}

nomeDoMes(0)