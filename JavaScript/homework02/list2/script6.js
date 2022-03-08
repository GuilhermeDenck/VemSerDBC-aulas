// 6) Pergunte ao usuário se ele quer:
// 	Inserir número / Finalizar
// 	Ao selecionar inserir número solicite para o usuário um valor numérico válido
// 	Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
// 	Utilize o laço DO...WHILE;

let userQuestionNumber = parseInt(prompt('1 - Inserir número\n2 - Finalizar'))

let countUserNumbers = 0;
let numberArry = [];

do {
    while (userQuestionNumber === 1) {
      let numberSelect = parseInt(prompt('Digite um numero: '));
      userQuestionNumber = parseInt(prompt('1 - Inserir número\n2 - Finalizar'))
      if (!isNaN(numberSelect)) {
        numberArry.push(numberSelect)
        countUserNumbers += numberSelect
      }
      else {
        alert('Digite numeros valido');
      }
    }
  alert(`A soma dos numeros ${numberArry} é : ${countUserNumbers}`);
} while (userQuestionNumber !== 2);