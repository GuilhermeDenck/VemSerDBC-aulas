import { useEffect, useContext, useState } from "react";
import { AuthContext } from '../../context/AuthContext';
import moment from 'moment';
import api from "../../services/api";

import Loading from "../../components/Loading/Loading.component";
import Error from "../../components/Error/Error.component";

import style from './Users.module.css';
const Users = () => {

  const { isLogged } = useContext(AuthContext);
  const [persons, setPersons] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const getPersons = async () => {
    try {
      const {data} = await api.get('/pessoa');
      setPersons(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  }

  const formatCpf = (cpf) => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  useEffect( () => {
    isLogged();
    getPersons();
  }, []);

  if(loading) return <Loading />;

  if(error) return <Error />;
  
  return (
    <div className={style.users}>
      <h1>Users</h1>
      <div>
      {
        persons.length ? (
          <table className={style.tablePersons}>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>E-mail</th>
              <th>Data de Nascimento</th>
            </tr>
            {
              persons.map(person => (
                <tr key={person.id}>
                  <td>{person.nome}</td>
                  <td>{formatCpf(person.cpf)}</td>
                  <td>{person.email}</td>
                  <td>{moment(person.dataNascimento).format('DD/MM/YYYY')}</td>
                </tr>
              ))
            }
          </table>
        ) : (
          <h3> Sem pessoas para exibir </h3>
        )   
      }
      </div>
    </div>
  );
}

export default Users;