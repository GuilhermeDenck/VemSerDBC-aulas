import { FC, createContext, useState, useEffect } from 'react';
import { PersonDTO } from '../model/PersonDTO';
import api from '../service/api'

export const PersonContext = createContext({});

const PersonProvider: FC<any> = ({ children }) => {

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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      api.defaults.headers.common['Authorization'] = token;
    }
  },[])

  return (
    <PersonContext.Provider value={{getPersons, persons}}>
      {children}
    </PersonContext.Provider>
  )
}

export default PersonProvider;