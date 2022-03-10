// 3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
//    Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
//    neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';

function capitalize(string) {
  let lower = string.toLowerCase().split(" ");
  for(let i = 0; i < lower.length; i++) {
    let palavra = lower[i];
    lower[i] = palavra.charAt(0).toUpperCase() + palavra.slice(1);
  }
  return lower.join(" ");
}

console.log(capitalize("hoje faremos o trabalho em dupla, que legal - sqn"));