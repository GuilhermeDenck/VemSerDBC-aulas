import { FC, createContext, useState, useEffect, ReactNode } from 'react';
import { PersonDTO } from '../model/PersonDTO';
import api from '../service/api';
import Notiflix from "notiflix";

export const PersonContext = createContext({});

const PersonProvider: FC<ReactNode> = ({ children }) => {

  const [persons, setPersons] = useState<PersonDTO['persons']>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const deletePerson = async (id: number) => {
        Notiflix.Confirm.show(
      'Alerta de Confirmação',
      'Tem certeza que deseja apagar este usuário?',
      'Sim',
      'Não',
      async function confirmButton() {
          try {
              await api.delete(`/pessoa/${id}`)
              Notiflix.Notify.success('Você excluiu esse usuário!');
              getPersons();
          } catch (error) {
              Notiflix.Notify.failure('Ocorreu um erro ao excluir este usuário!');
              console.log(error)
          }  
      },
      function cancelButton() {
          Notiflix.Notify.warning('Operação cancelada');
      },
      {
        width: '420px',
        borderRadius: '10px',
      },
    );

    getPersons();
  }


  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      api.defaults.headers.common['Authorization'] = token;
    }
  },[])

  return (
    <PersonContext.Provider value={{getPersons, deletePerson, persons}}>
      {children}
    </PersonContext.Provider>
  )
}

export default PersonProvider;