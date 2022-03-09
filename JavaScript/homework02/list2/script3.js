// 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;

let numberSelected = prompt('Digite o número que deseja ver a tabuada: ');
let result = 0;

if(isNaN(numberSelected)){
  alert('Digite um número válido');
  numberSelected = prompt('Digite o número que deseja ver a tabuada: ');
} else {
  for(let i = 0; i <= 10; i++) {
    result = parseInt(numberSelected) * i;
    console.log(`${parseInt(numberSelected)} x ${i} = ${result}`);
  }
}