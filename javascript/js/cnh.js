function verificarIdade() {
    var nome = document.querySelector('input[name=nome]')
    var idadeNum = document.querySelector('input[name=idade]')


    if (idadeNum.value.length == 0) {
        alert('Idade e um campo obrigatorio')
        return
    } else if (nome.value.length == 0) {
        alert('Nome e um campo obrigatorio')
        return
    }

    var idade = parseInt(idadeNum.value)
    if (idade >= 18) {
        alert('Ok! Voce pode tirar sua CNH')
    } else if (idade > 4) {
        alert('Voce e menor de idade, sugiro andar de bicicleta')
    } else {
        alert('Melhor voce tomar leite')
    }

}