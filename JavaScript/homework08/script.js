
let idColab = 0;
let colabList = [];
class Colaborador {
  id;
  nome;
  data;
  email;
  senha;

  constructor(nome, data, email, senha) {
    this.id = idColab;
    this.nome = nome;
    this.data = data;
    this.email = email;
    this.senha = senha;
  }
}

const validarNome = (event) => {
  const input = event ? event.target : document.getElementById('nome-input');
  const { value: nome } = input;
  let error = document.getElementById('nome-erro');

  let caracteresNome = nome.split(' ').join('');
  let finalName = [...caracteresNome];

  let valido = finalName.every( c => c.toUpperCase() !== c.toLowerCase() && isNaN(c));

  if(!valido) {
    error.classList.remove('d-none');
    error.classList.add('text-danger');
  } else {
    error.classList.add('d-none');
  }
  return valido;
}

const validarEmail = (event) => {
    /* 
        adicionar um eventListener para o evento "onkeyup" do input email-input que terá como ação esta função de validarEmail
        deve validar as seguintes regras:
        1 - obrigatório ter uma letra como primeiro caractér;
        2 - obrigatório possuir um '@';
        3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
        4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';
        6 - deve possuir o domínio 'dbccompany'
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="email-erro" para fique com um display visível ou invisível (dependendo da situação)
    */
    const input = event ? event.target : document.getElementById('email-input');
    const { value: email } = input;
    let error = document.getElementById('email-erro');

    let caracteresEmail = [...email];

    let primeiroCaracterLetra = caracteresEmail[0].toUpperCase() !== caracteresEmail[0].toLowerCase();
    let possuirArroba = caracteresEmail.some( c => c === '@');
    let possuirPonto = caracteresEmail.some( c => c === '.');
    let naoPossuirPontoDepoisArroba = caracteresEmail[caracteresEmail.indexOf('@') + 1] === '.';
    let naoTerminarComPonto = caracteresEmail[caracteresEmail.length - 1] !== '.';
    let possuirDoisCaracteresDepoisPonto = caracteresEmail.some( (c, i) => c === '.' && caracteresEmail[i + 2] !== undefined && caracteresEmail[i + 2].toUpperCase() !== caracteresEmail[i + 2].toLowerCase());
    let possuirDominio = email.includes('@') && email.includes('dbccompany');

    const ehValido = primeiroCaracterLetra && possuirArroba && !naoPossuirPontoDepoisArroba && possuirDominio && possuirPonto && naoTerminarComPonto && possuirDoisCaracteresDepoisPonto;

    if(!ehValido) {
      error.classList.remove('d-none');
      error.classList.add('text-danger');
    } else {
      error.classList.add('d-none');
    }

    return ehValido;
}


const validarSenha = (event) => {
    /* 
      adicionar um eventListener para o evento "onkeyup" do input senha-input que terá como ação esta função de validarSenha
      deve validar as seguintes regras:
      1 - obrigatório ter ao menos uma letra minúscula;
      2 - obrigatório ter ao menos uma letra maiúscula;
      3 - obrigatório ter ao menos um número;
      4 - obrigatório ter ao menos um carácter especial;
      5 - obrigatório ter ao menos 8 caractéres;
      6 - a senha não pode conter espaços em branco;

      obs: caso a senha (value) que está no input for válido/inválido deverá alterar a span com id="senha-erro" para fique com um display visível ou invisível (dependendo da situação)
    */
    const input = event ? event.target : document.getElementById('senha-input');
    const { value: senha } = input;
    let error = document.getElementById('senha-erro');

    input.value = input.value.replaceAll(' ', '');

    let caracteresSenha = [...senha];

    let possuiLetraMinuscula = caracteresSenha.some( c => c.toLowerCase() === c);
    let possuiLetraMaiuscula = caracteresSenha.some( c => c.toUpperCase() === c);

    let possuiEspecial = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && isNaN(c));
    let possuiNumero = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && !isNaN(c));

    let peloMenosOito = senha.length >= 8;

    const ehValido = possuiLetraMinuscula && possuiLetraMaiuscula && possuiEspecial && possuiNumero && peloMenosOito;

    if(!ehValido) {
      error.classList.remove('d-none');
      error.classList.add('text-danger');
    } else {
      error.classList.add('d-none');
    }

    return ehValido;
}


const adicionarMascaraData = (input) => {
  // aqui vamos adicionar uma máscara ao input
  let dateInfo = document.getElementById("data-input").value;
  dateInfo = dateInfo.replaceAll("/", "");
  let day = dateInfo.substring( 0, 2);
  let month = dateInfo.substring( 2, 4);
  let year = dateInfo.substring(4);

  let dateNumbers = [...dateInfo];

  if(dateNumbers.length === 2){
    document.getElementById("data-input").value = `${day}/`
  } else if(dateNumbers.length === 5){
    document.getElementById("data-input").value = `${day}/${month}/${year}`
  }
}


const validarData = (event) => {
    /* 
        adicionar um eventListener para o evento "onkeyup" do input data-input que terá como ação esta função de validarSenha
        deve validar as seguintes regras:
        1 - deve ser uma data válida;
        2 - não pode ser uma data futura;
        3 - deve ser uma data entre 18 e 26 anos; (idade > 18)
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="data-erro" para fique com um display visível ou invisível (dependendo da situação)
    */
    const input = event ? event.target : document.getElementById('data-input');
    const { value: data } = input;
    let error = document.getElementById('data-erro');

    const date = moment();// data atual
    const formaDate = moment(data, 'DDMMYYYY');  //recebendo do input

    const dateIsValid = formaDate.isValid();
    const dateNoFuture = date.isAfter(formaDate);
    const twentySixYears = moment().subtract(26, 'years');
    const eighteenYears = moment().subtract(18, 'years');

    const dateIsBetween = formaDate.isBetween(twentySixYears, eighteenYears);

    const ehValido = dateIsValid && dateNoFuture && dateIsBetween;

    if(!ehValido) {
      error.classList.remove('d-none');
      error.classList.add('text-danger');
    } else {
      error.classList.add('d-none');
    }

    return ehValido;
}

const newColab = () => {
  const inputName = document.getElementById('nome-input');
  const { value: nome } = inputName;
  const inputEmail = document.getElementById('email-input');
  const { value: email } = inputEmail;
  const inputSenha = document.getElementById('senha-input');
  const { value: senha } = inputSenha;
  const inputData = document.getElementById('data-input');
  const { value: data } = inputData;

  const colab = new Colaborador(nome, data, email, senha);

  colabList.push(colab);
  idColab++;
  addList();
  return;
}

const addList = () => {
  let div = document.getElementById('id-table');
  let noColab = document.getElementById('no-colab');
  let tBody = document.getElementById('t-body');
  let tr = document.createElement('tr');
  noColab.classList.add('d-none');
  div.classList.remove('d-none');
  
  tBody.appendChild(tr);

  let tdNome = document.createElement('td');
  let tdNasc = document.createElement('td');
  let tdEmail = document.createElement('td');
  tr.appendChild(tdNome);
  tr.appendChild(tdNasc);
  tr.appendChild(tdEmail);

  const inputName = document.getElementById('nome-input');
  const { value: nome } = inputName;
  const inputData = document.getElementById('data-input');
  const { value: data } = inputData;
  const inputEmail = document.getElementById('email-input');
  const { value: email } = inputEmail;

  let nomeTable = document.createTextNode(nome);
  let nascTable = document.createTextNode(data);
  let emailTable = document.createTextNode(email);
  tdNome.appendChild(nomeTable);
  tdNasc.appendChild(nascTable);
  tdEmail.appendChild(emailTable);
  return;
}

const validarCadastro = (event) => {
  event.preventDefault();
  let validate = validarNome() && validarData() && validarEmail() && validarSenha();
  console.log(validarNome());
  console.log(validarData());
  console.log(validarEmail());
  console.log(validarSenha());
  console.log(`Cadastro ${validate ? 'válido!' : 'inválido'}`);
  if(validate)
    newColab();
}

const showColab = (event) => {
  event.preventDefault();
  let array = [...document.getElementById('t-body').children].map(element => element.innerText)

  let mappedArray = array.map(element => {
    let splitted = element.split('\t')
    
    return {
      Nome: splitted[0],
      Nascimento: splitted[1],
      Email: splitted[2]
    }
  })

  console.table(mappedArray)
}