// 3) Crie um programa que possui 3 variáveis do tipo Boolean (true / false);
//    nomes das variáveis: isFriday, isTwoGreaterThanFour e isValueEmpty;
//    Atribua à variável isFriday o resultado de uma pergunta feita para o usuário "Hoje é sexta-feira?";
//    Atribua à variável isTwoGreaterThanFour o resultado da comparação de "2 maior que 4";
   
//    Para a variável isValueEmpty você precisa solicitar uma informação para o usuário e armazenar na variável a verificação se essa informação é:
//    null, undefined ou um texto vazio ('')

let isFriday = confirm('Hoje é sexta-feira?');
let isTwoGreaterThanFour = 2 > 4;

let userResponse = prompt('Digite algo:');
let isValueEmpty = userResponse === null || userResponse === undefined || userResponse === '';
