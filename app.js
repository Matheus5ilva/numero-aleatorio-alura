let listaNumerosSorteados = [];
let quantidade = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 100');
}

function exibirTextoNaTela(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secreto! Você gastou ${tentativas} ${tentativas > 1 ? ' tentativas' : ' tentativa'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('h1', 'Errou!');
        exibirTextoNaTela('p', `O número secreto é ${chute > numeroSecreto ? 'menor' : 'maior'} que o chute!`);
        tentativas++;
        limparCampo();
    }

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * (quantidade + 1));
    if (listaNumerosSorteados.length == quantidade) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}
