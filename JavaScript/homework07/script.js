let listToDo = [];
let id = 0;

const createToDo = () => {
  let btnAdd = document.getElementById('btn-todo');

  btnAdd.addEventListener('click', addTask);
}

const addTask = () => {
  let noToDo = document.getElementById('no-todo');
  let containerDiv = document.getElementById('to-do');
  let divToDo = document.createElement('ul');
  let inputToDo = document.getElementById('input-todo');
  let li = document.createElement('li');
  let texto = document.createTextNode(inputToDo.value);
  let p = document.createElement('p');
  p.appendChild(texto);
  
  removeTask(li);
  
  if(!inputToDo.value || inputToDo.value < 3) {
    alert('Por favor, preencha o campo');
  } else {
    divToDo.setAttribute('class', 'task-to-do')
    containerDiv.appendChild(divToDo);
    divToDo.appendChild(li);

    listToDo.push({
      id: id,
      description: inputToDo.value
    })

    if(listToDo.length > 0) {
      noToDo.style.display = 'none';
    }
    
    li.appendChild(p)
    li.setAttribute('class', 'task-text');
    li.setAttribute('task_id', id);
    id++
    inputToDo.value = '';
    changeColor(divToDo, li);
  }
}

const removeTask = (li) => {
  li.innerText = '  ';
  let remove = document.createElement('button');
  let icon = document.createElement('i');

  remove.setAttribute('style', 'background-color: transparent; outline: none; border: none')

  remove.appendChild(icon);
  icon.setAttribute('class', 'fas fa-trash-alt');

  li.appendChild(remove);
  remove.addEventListener('click', (event) => {
    let parentEvent = event.target.parentElement.parentElement;
    let idTask = parentEvent.attributes.task_id.value;
    let novoArray = listToDo.filter( item => parseInt(idTask) !== item.id );

    listToDo = novoArray;
    li.parentElement.remove();
  })
}

const changeColor = (div, pai) => {
  let buttonChange = document.createElement('button');
  let icon = document.createElement('i');

  buttonChange.appendChild(icon);
  buttonChange.setAttribute('class', 'btn-change');
  icon.setAttribute('class', 'fa-solid fa-check');
  pai.appendChild(buttonChange);

  buttonChange.addEventListener('click', () => { 
    div.classList.remove('class', 'task-to-do');
    div.classList.add('class', 'div-green');
    
    icon.setAttribute('class', 'fa-solid fa-x');
  })
}

createToDo();