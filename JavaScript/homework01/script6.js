// 6) Crie um programa que solicite para o usuário que escolha uma das opções do menu:
//    1 - Fazer checkin (exibe um alert de boas vindas);
//    2 - Fazer checkout (mostra uma caixa de confirmação perguntando se tem certeza e se disser que sim exibe um alerta de despedida);
//    3 - Estender hospedagem (pergunta pro usuário quantos dias gostaria de estender e se for um número válido exibe um alerta de sucesso informando que a hospedagem foi estendida em X dias)
//    4 - Sair (exibe alerta de "Ok")
   
//    Obs: caso não seja nenhuma dessas opções exiba um alerta de opção inválida

let userResponse = prompt(` 1 - Fazer checkin\n 2 - Fazer checkout\n 3 - Estender hospedagem\n 4 - Sair\n Digite uma das opções do menu: `);

switch(userResponse) {
  case '1':
    alert('Bem vindo!');
    break;
  case '2':
    let isConfirm = confirm('Tem certeza que deseja sair?');
    if(isConfirm) {
      alert('Até mais!');
    }
    break;
  case '3':
    let days = parseInt(prompt('Digite quantos dias gostaria de estender sua hospedagem: '));
    if(!isNaN(days)) {
      alert(`Sua hospedagem foi estendida em ${days} dias`);
    } else {
      alert('Digite um número válido');
    }
    break;
  case '4':
    alert('Ok');
    break;
  default:
    alert('Opção inválida');
}