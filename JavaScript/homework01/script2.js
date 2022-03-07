// 2) Crie um programa que solicita para o usuário dois valores de texto, nome do cliente e nome do atendente;
//    Exiba um alerta para o usuário com a mensagem "Olá cliente eu me chamo atendente, em que posso ajudar?" (String interpolation)

let nameClient = prompt('Digite o nome do(a) cliente:');
let nameAttendant = prompt('Digite o nome do(a) atendente:');

alert(`Olá ${nameClient} eu me chamo ${nameAttendant}, em que posso ajudar?`);
