// 5) Crie uma função que imprima no console todas as possíveis combinações de uma string;
//   ex: imprimirCombinacoes('tri')
//   => possiveis combinações da string "tri":  
//   't', 'tr', 'ti', 'tri', 'tir', 'r', 'rt', 'ri', 'rit', 'rti', 'i', 'ir', 'it', 'irt', 'itr'

function imprimirCombinacoes(string) {
  let possibilidades = [];
  for(let i = 0; i < string.length; i++) {
    let letra = string[i];
    let letras = string.split(letra);
    for(let j = 0; j < letras.length; j++) {
      let possibilidade = letra + letras[j];
      possibilidades.push(possibilidade);
    }
  }
  return possibilidades;
}

console.log(imprimirCombinacoes("tri"));