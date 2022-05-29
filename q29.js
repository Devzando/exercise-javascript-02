function segundoMaior(list){
    list.sort((a, b) => {
        if(a > b ) return 1
        if(a < b ) return -1
        return 0

    })
    return list[list.length - 2]
}

segundoMaior([12, 16, 1, 5])