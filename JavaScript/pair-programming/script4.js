// 4) Crie uma função que receba uma string e imprime uma mensagem com a quantidade de vogais e a quantidade de consoantes na string 
//   da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';
  
//   // ex: contarVogaisConsoantes('Oi, tenho 5 anos de idade!!! ;D')  
//   =>  imprime:  A string "Oi, tenho 5 anos de idade!!! ;D" tem 10 vogais e 9 consoantes

function contarVogaisConsoantes(str) {
  let totalVogais = 0;
  let totalConsoantes = 0;
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let arrayStr = str.toLowerCase().split('');

  for(let i = 0; i < arrayStr.length; i++) {
    for(let x = 0; x < vogais.length; x++) {
      if(arrayStr[i] === vogais[x]) {
        totalVogais++;
      }
    }
    for(let z = 0; z < consoantes.length; z++) {
      if(arrayStr[i] === consoantes[z]) {
        totalConsoantes++;
      }
    }
  }
  return `A string "${str}" tem ${totalVogais} vogais e ${totalConsoantes} consoantes`;
}

console.log(contarVogaisConsoantes('Oi, tenho 5 anos de idade!!! ;D'));