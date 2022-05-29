function checarAnoBissexto(year){
    let result = true
    if(year%4 == 0 && year%100 != 0){
       return true
    }else{
        return false
    }
}

checarAnoBissexto(1992)