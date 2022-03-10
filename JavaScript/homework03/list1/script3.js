// 3) Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que seja 
//    chamada caso algum dos números informados seja inválido.
//    Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';

function validateNumber() {
  return 'Algum número digitado foi inválido';
}

function sum(number1, number2, callback) {
  if(typeof number1 != 'number' || typeof number2 != 'number') {
    return callback;
  } else {
    return number1 + number2;
  }
}

console.log(sum(1, 2, validateNumber() ));