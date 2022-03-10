// 2) Crie uma função que recebe um array de números e encontre o segundo menor e o segundo maior número do array
// e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
// Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) neste caso, imprime: 3 e imprime: 7
// Exemplo: minhaFuncao( [1, 3, 5] ) neste caso, imprime somente o: 3

function pegaSegundoMaiorEMenor(array) {
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

  let arrayOrdenado =  array;
  let segundoMenor = arrayOrdenado[1];
  let segundoMaior = arrayOrdenado[arrayOrdenado.length - 2];

  if(segundoMenor === segundoMaior) {
    return `${segundoMenor}`
  } else {
    return `${segundoMenor} e ${segundoMaior}`
  }  
}

console.log(pegaSegundoMaiorEMenor( [1, 3, 5, 7, 9] ));