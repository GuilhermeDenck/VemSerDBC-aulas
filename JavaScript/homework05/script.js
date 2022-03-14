let listProducts = [
  {
    id: 1,
    description: 'Iphone 13 pro max',
    price: 10000.49
  }
];

let numberId = listProducts[listProducts.length - 1].id + 1;

const registerProduct = () => {
  let id = numberId++;
  let description;
  let price;

  let questionsAnswer = true;
  while (questionsAnswer) {
    description = prompt('Digite a descrição do produto: ');
    price = prompt('Digite o preço do produto: ');
    formatPrice = price.replace(',', '.');
    formatPrice = parseFloat(formatPrice);

    let validateNumbers = isNaN(formatPrice);
    let validateText = description.length <= 3 || description == ' ';

    if(validateNumbers || validateText) {
      alert('Por favor, digite os dados corretamente.');
    } else {
      questionsAnswer = false;
    }
  }
  const Product = {
    id: id,
    description: description,
    price: formatPrice
  }

  let confirmUser = confirm(`Deseja cadastrar mesmo este produto? \nDescrição - '${Product.description}' \nPreço - R$ ${Product.price.toString().replace('.', ',')}?`);
  if(confirmUser) {
    alert(`Produto cadastrado com sucesso!\nId - ${id}\nDescrição - ${description}\nPreço - R$ ${price.toString().replace('.', ',')}`);
    return listProducts.push(Product);
  } else {
    alert('Cadastro cancelado!');
  }
}

const findProductById = () => {
  let id;
  let findProduct;

  let questionsAnswer = true;
  while(questionsAnswer) {
    id = parseInt(prompt('Digite o Id do produto que deseja encontrar: '));
    findProduct = listProducts.find(product => id == product.id);

    let validateNumbers = isNaN(id);
    if(validateNumbers) {
      alert('Por favor, digite um Id válido.');
    } else if(!findProduct) {
      alert('Não foi encontrado nenhum produto com este Id.');
    } else {
      questionsAnswer = false;
    }
  }

  return alert(`Id do seu produto - ${findProduct.id}\nDescrição - '${findProduct.description}'\nPreço R$ ${findProduct.price.toString().replace('.', ',')}`);
}

const removeProductById = () => {
  let id;

  let findProduct;
  let questionsAnswer = true;
  while(questionsAnswer) {
    id = parseInt(prompt('Digite o Id do produto que deseja remover: '));
    findProduct = listProducts.find(product => id == product.id);

    let validateNumbers = isNaN(id);
    if(validateNumbers) {
      alert('Por favor, digite um Id válido.');
    } else if(!findProduct) {
      alert('Não foi encontrado nenhum produto com este Id.');
    } else {
      questionsAnswer = false;
    }
  }

  let newArray = listProducts.filter( product => id != product.id);

  let confirmUser = confirm(`Deseja mesmo remover este produto? \nDescrição - '${findProduct.description}'\nPreço - R$ ${findProduct.price.toString().replace('.', ',')}?`);
  if(confirmUser) {
    alert(`Produto removido com sucesso!\nId - ${id}\nDescrição - ${findProduct.description}\nPreço - R$ ${findProduct.price.toString().replace('.', ',')}`);
    return listProducts = newArray;
  } else {
    alert('Remoção cancelada!');
  }
}

const sumEquity = () => {

  let arrayProducts = listProducts.map( product => {
    return product.price;
  });

  let sum = arrayProducts.reduce((beforeValue, afterValue) => {
    return beforeValue + afterValue;
  });

  return alert(`A soma dos produtos é ${sum.toFixed(2)}`);
}

const subMenu = () => {
  let option;
    option = parseInt(prompt('Digite a opção desejada: \n1 - Imprimir lista de produtos cadastrados\n2 - Imprimir lista de descrição dos produtos cadastrados\n3 - Encontrar Produto por descrição e consultar preço dele\n4 - Voltar'));
    switch (option) {
      case 1:
        console.table(listProducts);
        break;
      case 2:
        console.table(listProducts, ['description']);
        break;
      case 3:
        let findDescription = prompt('Digite a descrição do produto que deseja encontrar: ');
        foundProducts = listProducts.filter(product => product.description.toLowerCase().includes(findDescription.toLowerCase()));
        console.table(foundProducts);
        break;
      case 4:
        menu();
        break;
    }
}


const menu = () => {
  let option; 
  
  do {
    option = parseInt(prompt('Digite a opção desejada: \n1 - Cadastrar produto\n2 - Remover produto por Id\n3 - Encontrar produto por Id\n4 - Detalhes em console\n5 - Verificar patrimonio da loja\n6 - Verificar se todos os Produtos estão com preço válido\n7 - Sair'));
    switch (option) {
      case 1:
        registerProduct();
        break;
      case 2:
        removeProductById();
        break;
      case 3:
        findProductById();
        break;
      case 4:
        subMenu();
        break;
      case 5:
        sumEquity();
        break;
      case 6:
        let validate = listProducts.every(product => product.price > 0);
        if(validate) {
          alert('Todos os preços estão válidos.');
        } else {
          alert('Existem produtos com preço inválido.');
        }
        break;
    }
  } while (option != 7);
  alert('Obrigado por utilizar nosso sistema!');
}

alert('Bem-vindo ao Sistema!!')
menu();