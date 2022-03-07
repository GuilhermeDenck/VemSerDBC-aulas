// 1) Crie um programa que, a partir de um texto que o usuário digitar (prompt), verifique:
//    - Se o texto for igual à 'SIM' informe um alerta para o usuário informando o texto "Parabéns";
//    - Se o texto for igual à 'Não' solicite novamente para o usuário informar algum texto e após isso mostre para ele o texto digitado em um alerta;
//    - Se for digitado qualquer outra string solicite uma confirmação para o usuário com o texto: 'Você tem noções dos seus atos?'

let result = prompt('Diga se você gostou da última aula?' );

if(result == 'sim'){
    alert('Parabéns, que bom que você gostou da última aula!');
} else if(result == 'não'){
    result = prompt('Digita novamente se você gostou da última aula:');
    alert(result)
} else {
  confirm('Você tem noções dos seus atos?');
}