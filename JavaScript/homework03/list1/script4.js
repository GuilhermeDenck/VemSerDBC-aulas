
// 4) Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
// existe no array e também qual a posição dele (índice)
//  Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
//  Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'

function searchElement (array, element) {
  if(array.includes(element)) {
    return `O elemente existe no array e a index dele é: ${array.indexOf(element)}`;
  } else {
    return `O elemento não foi encontrado dentro do array`;
  }
}

console.log(searchElement( ['a', 'cachorro', 255], 'abacate' ));
console.log(searchElement( ['a', 'cachorro', 255], 'cachorro' ));