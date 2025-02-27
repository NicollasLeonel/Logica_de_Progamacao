alert('Jogo do Numero Secreto');
let numeroMaximo = 150;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativa = 1;

// Loop para manter o jogo acontecendo ate que você acerte o numero
while (chute != numeroSecreto) {

    // Validação
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    }
    else{
        if (chute > numeroSecreto) {
            alert(`O numero secreto e menor é que ${chute}`)
        } else {
            alert(`O numero secreto e maior é que ${chute}`)

        }
        //Incremento
        tentativa++;
    }
}
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'

alert(`Voce descobriu o numero secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}!`);



