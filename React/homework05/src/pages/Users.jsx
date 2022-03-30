import { useEffect, useContext, useState } from "react";
import { AuthContext } from '../context/AuthContext';
import moment from 'moment';
import api from "../services/api";

const Users = () => {

  const { isLogged } = useContext(AuthContext);
  const [persons, setPersons] = useState([]);
  
  const getPersons = async () => {
    try {
      const {data} = await api.get('/pessoa');
      setPersons(data);
    } catch (error) {
      console.log(error);
    }
  }

  const formatCpf = (cpf) => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  useEffect( () => {
    isLogged();
    getPersons();
  }, []);
  
  return (
    <div>
      <h1>Users</h1>
      <div>
        {
          persons.length ? (
            persons.map( person => (
              <div key={person.idPessoa}>
                <h2>{person.nome}</h2>
                <p>{ formatCpf(person.cpf) }</p>
                <p>{person.email}</p>
                <p>{ moment(person.dataNascimento).format('DD/MM/YYYY') }</p>
              </div>
            )
          )) : (
            <h3> Sem pessoas para exibir </h3>
          )
        }
      </div>
    </div>
  );
}

export default Users;