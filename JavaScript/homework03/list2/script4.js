// 4a) Tendo uma lista vazia [], crie uma função que recebe um elemento 
// 	 qualquer como parâmetro e que adiciona esse elemento à lista;

function addElement(element) {
  let list = [element];
  return list;
}

console.log(addElement('test'));

// 4b) Crie duas funções, uma para remover o último elemento da lista e outra para remover o primeiro elemento da lista;

let list = ['test', 'test2', 'test3'];
let list2 = ['test', 'test2', 'test3'];

function removeFirstElement(array) {
  array.shift();
  return array;
}

function removeLastElement(array) {
  array.pop();
  return array;
}

console.log(removeFirstElement(list));
console.log(removeLastElement(list2));

// 4c) Crie uma função para remover um elemento específico da lista;
// 	   ex: Imagine que temos a lista [ 'a', 4, 'Tiago', 187 ]
// 	   e chamamos a função  removeElemento('Tiago')
// 	   deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
// 	 Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.

function removerElement(array, element) {
  let index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
    return array;
  } else {
    return 'Elemento não encontrado';
  }
  
}

console.log(removerElement(['a', 'b', 'c', 'd'], 'f'));