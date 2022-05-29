function buscarPalavrasSemelhantes(palav, list) {
    palav.split(' ')
    let result = []
    let tam = palav.length
    let testTam = 0
    let x = 0

    list.forEach(element => {
        testTam = 0
        for (let i in element) {
            if (element[i] == palav[x]) {
                testTam += 1
                x+=1
                if (testTam == tam) {
                    testTam = 0
                    x=0
                    result.push(element)
                }
            }else{
                testTam = 0
                x = 0
            }
        }
    });

    return result
}

buscarPalavrasSemelhantes("ssi", ["programação", "mobile", "profissional"])