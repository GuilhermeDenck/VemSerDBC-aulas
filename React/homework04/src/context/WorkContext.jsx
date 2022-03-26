import { createContext, useState } from "react";

export const WorkContext = createContext();

const WorkProvider = ({children}) => {

  const [listWorkers, setListWorkers] = useState([]);
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profission, setProfission] = useState("");

  const addWorker = (e) => {
    e.preventDefault();

    const Woker = {
      id: id,
      name: name,
      email: email,
      profission: profission
    }
    setId(id + 1);
    
    setListWorkers([...listWorkers, Woker]);
  }

  const removeWoker = (id) => {
    const newWorkers = listWorkers.filter(worker => worker.id !== id);
    setListWorkers(newWorkers);
  }

  const alterWorker = (id, name, email, profission) => {
    setId(id);
    setName(name);
    setEmail(email);
    setProfission(profission);

    const newWorkers = listWorkers.filter(worker => worker.id !== id);
    setListWorkers(newWorkers);
  }

  console.log(listWorkers);

  return (
    <WorkContext.Provider value={{id, name, setName, email, setEmail, profission, setProfission,addWorker, removeWoker, alterWorker, listWorkers}}>
      {children}
    </WorkContext.Provider>
  )
}

export default WorkProvider;