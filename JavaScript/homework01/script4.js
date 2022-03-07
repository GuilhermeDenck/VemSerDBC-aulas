// 4) Crie um programa que recebe dois números e uma operação desejada e mostre o resultado dessa operação (operações válidas: '+', '-', '*', '/'), 
// 	adicione também uma validação para caso a operação escolhida não seja uma das operações válidas OU se um dos números digitados seja um valor inválido também;
//    Caso a validação encontre um erro mostre um alerta informando o usuário;
//    Obs: Lembrando também que não é possível dividir por zero (ou seja, tratem isso também);

let number1 = parseFloat(prompt('Digite o primeiro valor: '));
let operation = prompt('Digite a operação desejada: ');
let number2 = parseFloat(prompt('Digite o segundo valor: '));

let isNumber = !isNaN(number1) && !isNaN(number2);
let isInfinity = number1 / number2 === Infinity ;

if(!isNumber) {
  confirm('Digite algum número válidos');
} else {
  switch(operation) {
    case '+':
      alert(`Resultado da soma de ${number1} + ${number2} é igual a: ${number1 + number2}`);
      break;
    case '-':
      alert(`Resultado da subtração de ${number1} - ${number2} é igual a: ${number1 - number2}`);
      break;
    case '*':
      alert(`Resultado da multiplicação de ${number1} * ${number2} é igual a: ${number1 * number2}`);
      break;
    case '/':
      if(isInfinity) {
        alert('Não é possível dividir por zero');
      } else {
        alert(`Resultado da divisão de ${number1} / ${number2} é igual a: ${number1 / number2}`);
      }
      break;
    default:
      alert('Operação inválida');
  }
}