// 1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
//     Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
//     A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;

//     A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
//     Faça um programa que determine imprima o salário desse funcionário com o passar dos anos até o ano atual;

let currentYear = 2022;
let salary = 1000.00;

let salaryIncrease = 0.015;

let newSalary;

for(let year = 2016; year <= currentYear; year++){

    if(year < 2018){
      newSalary = salary += (salary * salaryIncrease);
      console.log(`O salário do funcionário em ${year} foi até R$ ${newSalary.toFixed(2)}`);
    }

    if(year >= 2018){
      newSalary = salary += (salary * (salaryIncrease = salaryIncrease * 2));
      console.log(`O salário do funcionário em ${year} foi até R$ ${newSalary.toFixed(2)}`);
    }
}


//Melhorando o exercício anterior:
for(let year = 2016; year <= currentYear; year++){
  let increaseRate = ((year < 2018) ? salaryIncrease : (salaryIncrease = salaryIncrease * 2));
  newSalary = salary += (salary * increaseRate);
  console.log(`O salário do funcionário em ${year} foi até R$ ${newSalary.toFixed (2)}`);
}