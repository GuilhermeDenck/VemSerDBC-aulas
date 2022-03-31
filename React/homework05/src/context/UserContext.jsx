import { createContext, useState } from "react";
import api from "../services/api";

export const UserContext = createContext();

const UserProvider = ({children}) => {

  const [persons, setPersons] = useState([]);
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

  return (
    <UserContext.Provider value={{getPersons, loading, persons, error}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;