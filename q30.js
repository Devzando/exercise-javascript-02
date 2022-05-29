function recerberMelhorEstudante(obj) {
    let media = 0
    let mediaM = 0

    for(let i in obj){
        obj[i].forEach(element => {
          media+=element  
        });
        if(media/obj[i].length > mediaM) mediaM = media/obj[i].length

        obj[i].push(media/obj[i].length)
        media = 0
    }
    const result = {}

    for(let i in obj){
        obj[i].forEach(item =>{
            if(item == mediaM){
                result.name = i
                result.media = mediaM
            }
        })
    }

    return result

}

recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
})