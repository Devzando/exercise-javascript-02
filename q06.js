function inverso(valor){
    typeof valor == "boolean"? !valor:
        typeof valor == "number"? valor*(-1):
        "booleano ou número esperados, mas o parâmetro é do tipo string"
}

inverso(5)