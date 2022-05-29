function estaEntre(num, min, max, inclu = false){
    if (inclu && num == min || num == max){
        return true
    }else if(num > min && num < max){
        return true
    }else{
        return false
    }

}

estaEntre(18, 100, 160, true)