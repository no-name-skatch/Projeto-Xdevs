const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
const btnVoltar = document.getElementById("btn-voltar");

btnAvancar.addEventListener("click", function () {

    const ultimoCartao = cartaoAtual === cartoes.length -1;

    if (ultimoCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartaoSelecionado();

})

btnVoltar.addEventListener("click", function () {

    const primeiroCartao = cartaoAtual === 0;

    if (primeiroCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartaoSelecionado();
})

function mostrarCartaoSelecionado() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

