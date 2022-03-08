// 4) Crie um programa que mostre um prompt para o usuário pedindo para selecionar uma das opções: 
// 	  1 - Continuar perguntando / 2 - Parar de perguntar
//    se ele digitar algo diferente de 1 ou de 2 deve mostrar um alerta para ele informando o erro e deve solicitar novamente que escolha uma opção

let userQuestion;

while (userQuestion !== 2) {
  userQuestion = parseInt(prompt('Escolha uma das opções:\n 1 - Continuar perguntando\n 2 - Parar de perguntar'));
  userQuestion < 1 || userQuestion > 2 ? alert('Opção inválida, digite novamente') : null;
}