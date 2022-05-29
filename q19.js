function calcularMedia(list){
    let media = 0
    list.forEach(item => {
        media+=item
    });

    return media/list.length
}

calcularMedia([0, 10])