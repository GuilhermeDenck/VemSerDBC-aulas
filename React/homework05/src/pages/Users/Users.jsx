import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from "../../context/UserContext";
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer ,toast } from 'react-toastify';
import api from "../../services/api";
import moment from 'moment';

import Loading from "../../components/Loading/Loading.component";
import Error from "../../components/Error/Error.component";

import 'react-confirm-alert/src/react-confirm-alert.css'; 
import 'react-toastify/dist/ReactToastify.css';

import style from './Users.module.css';
const Users = () => {

  const navigate = useNavigate();

  const { isLogged } = useContext(AuthContext);
  const { getPersons, loading, persons, error} = useContext(UserContext);
  
  const maskCpf = (cpf) => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  useEffect( () => {
    isLogged();
    getPersons();
  }, []);

  const notifySucess = () => {
    toast.success("Usuário Deletado com sucesso!", {
      position: toast.POSITION.TOP_CENTER
    });
  } 

  const notifyError = () => {
    toast.error("Erro ao deletar usuário!", {
      position: toast.POSITION.TOP_CENTER
    });
  } 

  const handleCreateUser = () => {
    navigate("/create-user");
  }

  const handleDelete = (idPessoa) => {
    confirmAlert({
      title: 'Confirme',
      message: 'Tem certeza que deseja excluir?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            try {
              const response = await api.delete(`/pessoa/${idPessoa}`);
              console.log(response);
              notifySucess();
            } catch (error) {
              console.log(error);
              notifyError();
            }
          }
        },
        {
          label: 'Não',
        }
      ]
    });
  }

  if(loading) return <Loading />;

  if(error) return <Error />;
  
  return (
    <div className={style.users}>
      <h1>Users</h1>
      <button onClick={handleCreateUser} className={style.btnCreate}> Cadastrar Usuário </button>
      <div className={style.gridUsers}>
      {
        persons.length ? persons.map(person => (
          <div key={person.idPessoa} className={style.boxUser}>
            <p> <span> Nome: </span>  {person.nome} </p>
            <p> <span> data de nascimento: </span>  {moment(person.dataNascimento).format('DD/MM/YYYY')} </p>
            <p> <span> CPF: </span> {maskCpf(person.cpf)} </p>
            <p> <span> E-mail: </span>  {person.email} </p>
            <div className={style.btns}>
              <button className={style.btnAtt} onClick={ () => navigate(`/create-user/${person.idPessoa}`)}> Atualizar </button>
              <button className={style.del} onClick={ () => handleDelete(person.idPessoa)}> Deletar</button>
            </div>
            <ToastContainer />
          </div>
        )) : (
          <h3> Sem pessoas para exibir </h3>
        )   
      }
      </div>
    </div>
  );
}

export default Users;
