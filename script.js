'use strict'; //Ajuda evitar erros no JS

const inputNome = document.getElementById('nome');
//campo de texto do nome
const inputAno = document.getElementById('ano');
//campo numérico do ano
const botaoCalcular = document.getElementById('btn-calcular')
//botão de calcular idade
const resultado = document.getElementById('resultado'); //parágrafo onde aparece o resultado

//Descobrir ano atual
const anoAtual = new Date().getFullYear();

//ler o que o usuário digitou
botaoCalcular.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    const anoNascStr = inputAno.value.trim();

    const anoNasc = Number(anoNascStr);
    const anoValido = Number.isInteger(anoNasc) && anoNasc >= 1900 && anoNasc <=anoAtual;

    if(!anoValido) {
        resultado.textContent = 'Por favor, coloque um ano válido';
        return; //sai da função sem continuar
    }

    const idade = anoAtual - anoNasc;
})




