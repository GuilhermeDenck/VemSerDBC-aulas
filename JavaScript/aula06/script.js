/*
  Imaginem que temos uma Pet Shop, logo:
  - precisamos ter nossos pets (class Pet);
  - propriedades dos pets: nome, raca e peso;
  - nossos pets vao poder latirOuMiar() // método que imprime `oi, meu nome é XXX, minha raça é YYY e meu peso é ZZZ`
*/

class Pet {
  nome;
  raca;
  peso;

  constructor(nome, raca, peso) {
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
  }

  latirOuMiar = () => {
   return `oi, meu nome é ${this.nome}, minha raça é ${this.raca} e meu peso é ${this.peso}`;
  }
}

let pet1 = new Pet('Zeus', 'Vira-lata', '8kg');
let pet2 = new Pet('Bolt', 'Persa', '2kg'); 

console.log(pet1.latirOuMiar());

