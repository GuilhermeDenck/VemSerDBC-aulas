// 5) Crie uma função que imprima no console todas as possíveis combinações de uma string;
//   ex: imprimirCombinacoes('tri')
//   => possiveis combinações da string "tri":  
//   't', 'tr', 'ti', 'tri', 'tir', 'r', 'rt', 'ri', 'rit', 'rti', 'i', 'ir', 'it', 'irt', 'itr'

const imprimirCombinacoes = str => {
  let arrayStr = str.split('');
  let arrayCombinations = [];
  let aux = '';
  for(let i = 0; i < arrayStr.length; i++) {
    aux += arrayStr[i];
    arrayCombinations.push(aux)
    for(let j = 0; j < arrayStr.length; j++) {
      if(i != j) {
        aux += arrayStr[j]
        arrayCombinations.push(aux)
      }
    }
    aux = arrayStr[i]
    for(let k = (arrayStr.length - 1); k >= 0; k--) {
      if(i != k) {
        aux += arrayStr[k]
        arrayCombinations.push(aux)
      }
    }
    aux = '';
  }
  return arrayCombinations;
}

console.log(imprimirCombinacoes("tri"));