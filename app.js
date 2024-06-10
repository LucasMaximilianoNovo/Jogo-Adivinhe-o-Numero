let listaDeNumerosSorteados = []; 

let numeroLimite = 10

let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo adivinhe o número');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    let mensagemTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    let mensagemTentativas = `Você descobriu o número secreto com 
    ${tentativas} ${mensagemTentativa}!`

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');

        exibirTextoNaTela('p', mensagemTentativas);

        limparCampo()
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');

        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');

        }

        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    } 

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function jogarNovamente() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}   
