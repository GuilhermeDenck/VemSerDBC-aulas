// 1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
//    e essa função imprima no console o valor de cada elemento da lista;

let listArray = [1, 'Olá', undefined, 99999, 'Texto qualquer'];

function list (listArray) {
  for(let i = 0; i < listArray.length; i++){
    console.log(listArray[i]);
  }
}
 
list(listArray);