function filtrarNumeros(list){
    const result = list.filter((item) => {
        if(typeof item == 'number') return item
    })

    return result
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20])
