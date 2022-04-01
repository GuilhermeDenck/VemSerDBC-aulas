import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer ,toast } from 'react-toastify';
import api from '../../services/api';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';

import style from './CreateUser.module.css';
const CreateUser = () => {

  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ dataNascimento, setDataNascimento ] = useState('');
  const [ cpf, setCpf ] = useState('');

  const {id} = useParams();

  const getUserById = async () => {
    try {
      const {data} = await api.get(`pessoa/{idPessoa}?idPessoa=${id}`);

      let dataNascimento = moment(data.dataNascimento).format('DD/MM/YYYY');

      setNome(data.nome);
      setEmail(data.email);
      maskDate(dataNascimento);
      maskCpf(data.cpf);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(id)  {
      getUserById();
      setUpdate(true);
    }
  }, [])


  const notifySucess = (text) => {
    toast.success(text, {
      position: toast.POSITION.TOP_CENTER
    });
  } 

  const notifyError = (text) => {
    toast.error(text, {
      position: toast.POSITION.TOP_CENTER
    });
  } 

  const createNewUser = async (e) => {
    e.preventDefault();
    let dataFormatada = dataNascimento;
    dataFormatada = moment(dataFormatada, 'DD/MM/YYYY').format('YYYY-MM-DD');
    let cpfFormatado = cpf;
    cpfFormatado = cpfFormatado.replace(/\D/g, '');
    const User = {
      nome: nome,
      email: email,
      dataNascimento: dataFormatada,
      cpf: cpfFormatado
    }
    try {
      const {data} = await api.post('/pessoa', User);
      console.log(data);
      notifySucess("Usuário criado com sucesso!, você será redirecionado");
      setTimeout(() => {
        navigate('/users');
      }, 6500);
    } catch (error) {
      notifyError("Error ao cadastrar novo usuário!");
      console.log(error);
    }
  }

  const updateUser = async (e) => {
    e.preventDefault();
    let dataFormatada = dataNascimento;
    dataFormatada = moment(dataFormatada, 'DD/MM/YYYY').format('YYYY-MM-DD');
    let cpfFormatado = cpf;
    cpfFormatado = cpfFormatado.replace(/\D/g, '');
    const User = {
      nome: nome,
      email: email,
      dataNascimento: dataFormatada,
      cpf: cpfFormatado
    }
    try {
      const {data} = await api.put(`/pessoa/${id}`, User);
      console.log(data);
      notifySucess("Usuário alterado com sucesso!, você será redirecionado");
      setTimeout(() => {
        navigate('/users');
      }, 6500);
    } catch (error) {
      notifyError("Error ao alterar usuário!");
      console.log(error);
    }
  }

  const maskDate = value => {
    return setDataNascimento(value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1"));
  };

  const maskCpf = value => {
    return setCpf(value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"));
  };

  return (
    <div className={style.createUser}>
      <div className={style.containerForm}>
        <h1> { update ? 'Atualizar Usuário' : 'Cadastrar Usuário' } </h1>
          <form className={style.form} onSubmit={ e => update ? updateUser(e) : createNewUser(e)}>
            <div>
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" value={nome} placeholder="Digite seu Nome: " onChange={ (e) => setNome(e.target.value) }/>
            </div>

            <div>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" name="email" value={email}  placeholder="Digite seu E-mail" onChange={ (e) => setEmail(e.target.value) }/>
            </div>

            <div>
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input id="dataNascimento" name="dataNascimento" value={dataNascimento}  placeholder="Digite sua data de nacimento" onChange={ (e) => maskDate(e.target.value) }/>
            </div>

            <div>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" name="cpf" value={cpf}  placeholder="Digite seu CPF: " onChange={ (e) => maskCpf(e.target.value) }/>
            </div>
            
            <button type="submit">{ update ? 'Atualizar' : 'Cadastrar'}</button>
            <ToastContainer />
          </form>
      </div>
    </div>
  )
}

export default CreateUser;