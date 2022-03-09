// 1) Crie uma função que recebe como parâmetros um caracter e um array de 
// 	caracteres e que remova todas as ocorrências daquele caracter no array; 
//    ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
//    => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a');

function removerCaracter(caracter, array) {
  let newArray = [];
  for(valor of array) {
    if( !(caracter == valor) ) {
      newArray.push(valor)
    }
  }
  console.log(newArray);
}

removerCaracter('texto', [ 'c', 'a', 'texto', 'a' ])