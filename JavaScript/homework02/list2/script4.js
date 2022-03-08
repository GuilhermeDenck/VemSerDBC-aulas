// 4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;

let number = 1;

for(let i = 1; i <= 100; i++){
  if(i % 2 === 0){
    number = i ** 2;
    console.log(number);
  }
}