// 5) Crie um programa que recebe 3 notas (T1, T2 e P1) como números reais (float, ex: 5.2), realize a média dessas notas e realize a seguinte verificação:
//    (menor que 5 = alerta de reprovado, de 5 até 7 = alerta de recuperação e acima de 7 = alerta de parabenização)
//    Obs: adicione as validações para ter certeza que os números inseridos estão certos;

let t1 = parseFloat(prompt('Digite a nota da T1: '));
let t2 = parseFloat(prompt('Digite a nota da T2: '));
let p1 = parseFloat(prompt('Digite a nota da P1: '));

let isNumber = !isNaN(t1) && !isNaN(t2) && !isNaN(p1);

let result = (t1 + t2 + p1) / 3;

if(!isNumber) {
  alert('Digite um número válido');
} else {
  if(result < 5) {
    alert('Reprovado');
  } else if(result >= 5 && result < 7) {
    alert('Recuperação');
  } else {
    alert('Parabéns');
  }
}