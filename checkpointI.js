function microondas(receita,tempo){
    //receita 1 = pipoca
    if(receita == 1){ 
        if(tempo>=(2*10) && (tempo<(3*10))){
            return "A comida queimou!"
        }
        else if(tempo<10){
            return "Tempo insuficiente."
        }
        else if(tempo>=(3*10)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }
    //receita 2 = macarrão
    else if(receita == 2){ 
        if(tempo>=(2*8) && (tempo<(3*8))){
            return "A comida queimou!"
        }
        else if(tempo<8){
            return "Tempo insuficiente."
        }
        else if(tempo>=(3*8)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }
    //receita 3 = carne
    else if(receita == 3){ 
        if(tempo>=(2*15) && (tempo<(3*15))){
            return "A comida queimou!"
        }
        else if(tempo<15){
            return "Tempo insuficiente."
        }
        else if(tempo>=(3*15)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }
    //receita 4 = feijão
    else if(receita == 4){
        if(tempo>=(2*12) && (tempo<(3*12))){
            return "A comida queimou!"
        }
        else if(tempo<12){
            return "Tempo insuficiente."
        }
        else if(tempo>=(3*12)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }
    //receita 5 = brigadeiro
    else if(receita == 5){
        if(tempo>=(2*8) && (tempo<(3*8))){
            return "A comida queimou!"
        }
        else if(tempo<8){
            return "Tempo insuficiente."
        }
        else if(tempo>=(3*8)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }
    else{
        if (receita<1 || receita>5) {
            return "Prato inexistente. Escolha 1 para Pipoca, 2 para Macarrão, 3 para Carne, 4 para Feijão e 5 para Brigadeiro."
        }
        console.log("1 - Pipoca – 10 segundos (padrão)")
        console.log("2 - Macarrão – 8 segundos (padrão)")
        console.log("3 - Carne – 15 segundos (padrão)")
        console.log("4 - Feijão – 12 segundos (padrão)")
        console.log("5 - Brigadeiro – 8 segundos (padrão)")
        console.log("Informe o código de uma das 5 opções de comida e o tempo que deseja deixá-la cozinhando:")
        console.log(" ")
        return " "
    }
}
console.log(microondas(9,24))