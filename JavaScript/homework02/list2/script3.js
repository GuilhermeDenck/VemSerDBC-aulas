// 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;

let tabuada = 5;
let result = 0;

for(let i = 0; i <= 10; i++) {
  result = tabuada * i;
  console.log(`${tabuada} x ${i} = ${result}`);
}