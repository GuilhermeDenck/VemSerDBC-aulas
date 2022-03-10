// 2) Crie uma função que recebe um array de números e encontre o segundo menor e o segundo maior número do array
// e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
// Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) neste caso, imprime: 3 e imprime: 7
// Exemplo: minhaFuncao( [1, 3, 5] ) neste caso, imprime somente o: 3

function pegaSegundoMaiorEMenor(array) {
  let segundoMenor = array[1];
  let segundoMaior = array[array.length - 2];

  return `${segundoMenor} e ${segundoMaior}`
}

console.log(pegaSegundoMaiorEMenor([1, 3, 5, 7, 9]));