import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import moment from 'moment';

import Loading from "../../components/Loading/Loading.component";
import Error from "../../components/Error/Error.component";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import { ToastContainer ,toast } from 'react-toastify';
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

  const notify = () => toast("Usuário Deletado com sucesso!");
  const notifyError = () => toast("Erro ao deletar usuário!");

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
              notify();
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
      <Link to="/create-user"> Cadastrar Usuário </Link>
      <div>
      {
        persons.length ? persons.map(person => (
          <div key={person.idPessoa}>
            <h2> {person.nome} </h2>
            <p> {moment(person.dataNascimento).format('DD/MM/YYYY')} </p>
            <p> {maskCpf(person.cpf)} </p>
            <p> {person.email} </p>
            <button onClick={ () => handleDelete(person.idPessoa)}> Deletar</button>
            <button onClick={ () => navigate(`/create-user/${person.idPessoa}`)}> Atualizar </button>
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
