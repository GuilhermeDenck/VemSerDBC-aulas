// 5) Faça um algoritmo que imprima no console os valores como se fosse um relógio durante 1 minuto;
// 	Exemplo do console:
// 	00 // note que é 00 e não apenas 0
// 	01 // note que é 01 e não apenas 1
// 	02 // note que é 02 e não apenas 2
// 	03 // note que é 03 e não apenas 3
// 	...
// 	58
// 	59
// 	60 (aqui é para parar de imprimir)

let time = 55;

const cronometro = setInterval(() => {
  time < 10 ? console.log(`0${time}`) : console.log(time);
  time++;
  if(time > 60){
    clearInterval(cronometro);
  }
}, 1000)

