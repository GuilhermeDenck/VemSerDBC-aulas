// 5) Crie uma função que gera um número aleátorio entre 0 e 100;

function randomNumber() {
  return Math.round(Math.random() * 100);  
}

console.log(randomNumber());

// 5b) Crie uma lista vazia [] e vá adicionando números aleatórios nesta lista até que a lista tenha 10 números inseridos nela;
//     OBS: só podem ser adicionados a esta lista os seguintes números:
//     - números ímpares que estão entre 14 e 50;
//     - números múltiplos de 12;

function addRandomNumbers() {
  let list = [];
  while(list.length < 10) {
    let randomNumbers = randomNumber();
    if (randomNumbers % 2 !== 0 && randomNumbers >= 14 && randomNumbers <= 50 || randomNumbers % 12 === 0) {
      list.push(randomNumbers);
    }
  }
  return list;
}

console.log(addRandomNumbers());