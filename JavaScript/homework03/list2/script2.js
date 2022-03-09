// 2) Crie uma função que receba como parâmetro um array de números e retorne
//  	um array ordenado (NÃO pode usar a função array.sort());
//    ex. funcaoOrdenaArray( [4, 5, 7, 3, 0, 5, 2, 2] ) ===> retorna o array [ 0, 2, 2, 3, 4, 5, 5, 7 ] 

function ordernarArray(array) {
  let aux = [];
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if (array[i] < array[x]) {
        aux = array[i];
        array[i] = array[x];
        array[x] = aux;
      }
    }
  }
  return array;
}

console.log(ordernarArray([4, 5, 7, 3, 0, 5, 2, 2]));