// 3) Crie um programa que, através de laços de repetição, percorra uma determinada lista com os seguintes números: [1, 2, 7, 10, 18]
//    e imprima no console a soma de todos os elementos, neste caso seria 38;

let numbers = [1, 2, 7, 10, 18];
let adder = 0;
let result;

for (let i = 0; i < numbers.length; i++) {
  result = adder += numbers[i];    
}

console.log(result);