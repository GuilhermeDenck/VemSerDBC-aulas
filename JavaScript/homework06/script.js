class Colaborador {
  id;
  nome;
  marcacoesPonto;

  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
    this.marcacoesPonto = [];
  }

  marcarPonto = (dia, hora) => {
    dia = parseInt(prompt("Dia: "));
    hora = parseInt(prompt("Hora: "));

    marcacoesPonto = new Marcacao({ dia, hora });
  };
}

class Marcacao {
  dia;
  horas;

  constructor(dia, horas) {
    this.dia = dia;
    this.horas = horas;
  }
}

class Validacoes {
  validateName = (name) => {
    if (name.length < 3) {
      return false;
    } else {
      return true;
    }
  };

  validateDay = (day) => {
    if (day < 1 && day > 31) {
      return false;
    } else {
      return true;
    }
  };

  validateHour = (hour) => {
    if (hour < 0 && hour > 23) {
      return false;
    } else {
      return true;
    }
  };
}

const validator = new Validacoes();

let colaboradores = [];
let id = 0;
const cadastrarColaborador = () => {
  let nome;

  let questionsAnswer = true;
  while (questionsAnswer) {
    nome = prompt("Digite o nome do colaborador");

    if (validator.validateName(nome)) {
      const colaborador = new Colaborador(id, nome);
      colaboradores.push(colaborador);
      questionsAnswer = false;
    } else {
      alert("Digite um nome com maior ou igual a 3 caracteres");
    }
  }
};

const marcarPonto = () => {
  let nome;
  let dia;
  let hora;
  let questionsAnswer = true;

  while (questionsAnswer) {
    nome = prompt("Digite o nome do colaborador");
    let colaboradorEncontrado;
    for (const i of colaboradores) {
      if (i.nome.toLowerCase() == nome.toLowerCase()) {
        colaboradorEncontrado = i;
      }
    }

    let validatePoint = validator.validateDay(dia) && validator.validateHour(hora);

    if (colaboradorEncontrado) {
      dia = parseInt(prompt("Digite o dia"));
      hora = parseInt(prompt("Digite a hora"));
      if(validatePoint){
        const marcacao = new Marcacao(dia, hora);
        colaboradorEncontrado.marcacoesPonto.push(marcacao);
        return questionsAnswer = false;
      } else {
        alert("Dia ou hora inválidos");
        dia = parseInt(prompt("Digite o dia"));
        hora = parseInt(prompt("Digite a hora"));
      }
    }

    alert("Colaborador não encontrado");
  }
};

const menu = () => {
  let option;
  do {
    option = parseInt(
      prompt(
        "Escolha uma opção\n1 - Cadastrar Colaborador;\n2 - Marcar Ponto;\n3 - Ver lista de colaboradores\n4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto\n5 - Encerrar"
      )
    );
    switch (option) {
      case 1:
        cadastrarColaborador();
        break;
      case 2:
        marcarPonto();
        break;
      case 3:
        let mostrarColaboradores = colaboradores.reduce( (acc, colaborador) => (acc += `${colaborador.nome}\n`), "" );
        alert(mostrarColaboradores);
        break;
      case 4:
        let colaboradoresSemPonto = colaboradores.filter(
          (colaborador) => colaborador.marcacoesPonto.length === 0
        );
        colaboradoresSemPonto = colaboradoresSemPonto.map(
          (colaborador) => colaborador.nome
        );
        alert(colaboradoresSemPonto);
        break;
      case 5:
        alert("Encerrando...");
        break;
    }
  } while (option !== 5);
};

menu();
