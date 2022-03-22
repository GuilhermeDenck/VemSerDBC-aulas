import React, {useState} from 'react';

const Form = () => {

  const CadastrarUsuario = (e) => {
    e.preventDefault();
    console.log(`Seu login é ${login}, e sua senha é ${senha}`);
  }

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <>
      <h1>Meu Formulário</h1>
      <form onSubmit={CadastrarUsuario}>
        <div>
          <input type="text" placeholder="Digite seu Login" value={login} onChange={ (e) => setLogin(e.target.value)} />
        </div>

        <div>
          <input type="password" placeholder='Digite a sua senha' value={senha} onChange={ (e) => setSenha(e.target.value)} />
        </div>

        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Form;