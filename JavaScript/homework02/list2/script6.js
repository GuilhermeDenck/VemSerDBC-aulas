// 6) Pergunte ao usuário se ele quer:
// 	Inserir número / Finalizar
// 	Ao selecionar inserir número solicite para o usuário um valor numérico válido
// 	Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
// 	Utilize o laço DO...WHILE;

let countUserNumbers = 0;
let numberArray = [];

do {
  userQuestionNumber = parseInt(prompt('1 - Inserir número\n2 - Finalizar'))
  if(userQuestionNumber === 1) {
    let numberSelect = parseInt(prompt('Digite um numero: '));    
      if (!isNaN(numberSelect)) {
        numberArray.push(numberSelect)
        countUserNumbers += numberSelect;
      } else {
        alert('Digite numeros valido');
      }
  } 
} while (userQuestionNumber !== 2);
  
alert(`A soma dos numeros ${numberArray} é : ${countUserNumbers}`);