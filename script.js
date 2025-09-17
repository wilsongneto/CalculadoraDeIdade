'use strict'; // Ajuda a evitar erros comuns no JS

// 1) Pegar "atalhos" para os elementos da página (DOM):
const inputNome = document.getElementById('nome');// Campo de texto do nome
const inputAno = document.getElementById('ano');// Campo numérico do ano
const btnCalc = document.getElementById('btn-calcular');// Botão "Calcular idade"
const saida = document.getElementById('resultado');// Parágrafo onde sai o resultado

// 2) Descobrir o ano atual usando o objeto Date do JS:
const anoAtual = new Date().getFullYear(); // ex.: 2025

// 3) Quando o usuário clicar no botão, vamos rodar uma função:
btnCalc.addEventListener('click', () => {
  // 3.1) Ler o que o usuário digitou:
  const nome = inputNome.value.trim(); // .value pega o texto; .trim() remove espaços extras
  const anoNascStr = inputAno.value.trim();

  // 3.2) Validar o ano: precisa ser número e fazer sentido
  const anoNasc = Number(anoNascStr);  // transforma texto em número
  const anoValido = Number.isInteger(anoNasc) && anoNasc >= 1900 && anoNasc <= anoAtual;

  if (!anoValido) {
    // 3.3) Se o ano estiver errado, avisamos de forma clara
    saida.textContent = 'Por favor, digite um ano de nascimento válido (entre 1900 e o ano atual).';
    return; // Sai da função sem continuar
  }

  // 3.4) Se deu tudo certo, calcula a idade
  const idade = anoAtual - anoNasc;

  const nomeDefault = nome || 'Visitante';

  const mensagem = `Olá, ${nomeDefault}! Você tem ${idade} anos em ${anoAtual}`;

  saida.textContent = mensagem;

  inputNome.select()

});

[inputNome, inputAno].forEach(campo => {
    campo.addEventListener('keydown', (evento) => {
      if(evento.key === 'Enter') {
        btnCalc.click();
      }
    });
  });

btnCalc.addEventListener('mouseenter', () => {
  btnCalc.dataset.labelAntiga = btnCalc.textContent;
  btnCalc.textContent = 'Clique aqui!';
});
btnCalc.addEventListener('mouseleave', () => {
  btnCalc.textContent = btnCalc.dataset.labelAntiga || 'Calcular idade';
});
