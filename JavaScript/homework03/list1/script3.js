// 3) Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que seja 
//    chamada caso algum dos números informados seja inválido.
//    Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';

function validateNumber(number1, number2) {
  return typeof number1 != 'number' || typeof number2 != 'number' ; //botei tyupeof por se for um numero dentro de uma string ele n reconhece
}

function sum(number1, number2) {
  if(!validateNumber(number1, number2)) {
    return number1 + number2
  } else {
    return 'Algum número digitado foi inválido';
  }
}

console.log(sum(2, 2));