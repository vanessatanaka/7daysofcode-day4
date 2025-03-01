// 7Daysofcode - Dia 4

// Variáveis
let numero = 7;
let tentativa = 3;

// Chute do número com 3 tentativas
while(tentativa > 0) {
  let chute = parseInt(prompt(`Qual o valor que você deseja chutar entre 0 e 10?`));
  if(chute === numero) {
    alert(`Parabéns! Você acertou!`);
    break;
  }
  else {
    tentativa--;
    if(tentativa > 0) {
      alert(`Você tem mais ${tentativa} tentativa(s).`);
    }
    else {
      alert(`Suas tentativas acabaram. O número correto era ${numero}`);
    }
  }
}