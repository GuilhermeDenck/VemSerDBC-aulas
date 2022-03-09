// 2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
//    e todos caracteres em maiúsculo;
    // ex: minhaFuncao('      Oi, essa é uma   string   qualquer   ') => deve retornar a string: 'OI, ESSA É UMA   STRING   QUALQUER'

let stringExample = '      Oi, essa é uma   string   qualquer   ';
let returnFuction;

function retirarSpaco(string) {
  return returnFuction = string.trim().toUpperCase();
}

console.log(retirarSpaco(stringExample));

// 2a) Crie uma função que, baseada no retorno da função da questão anterior, remova também os caractéres entre as palavras 
// 	(porém mantenha ao menos um para continuar com as palavras separadas)
// 	// ex: minhaFuncao('Oi,    essa    é    uma   string    qualquer') => deve retornar a string: 'Oi, essa é uma string qualquer'

function retirarSpaco2(string) {
  let stringArray = string.split(' ');
  let newString = [];

  for( temp of stringArray ) {
    if ( !(temp == '') ) {
      newString.push(temp)
    }
  }
  return newString.join(' ');

}

console.log(retirarSpaco2(returnFuction));