import { useContext } from 'react';
import { WorkContext } from '../context/WorkContext';

import ListWorkers from '../components/ListWorkers/ListWorkers.component';
const Home = () => {

  const { name, setName, email, setEmail, profission, setProfission, addWorker } = useContext(WorkContext);

  return (
    <div>
      <h1>Trabalhadores</h1>

      <form onSubmit={addWorker}>
        <div>
          <label htmlFor="name">Digite o seu nome</label>
          <input type="text" id='name' value={name} onChange={ (e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Digite o seu email</label>
          <input type="email" id='email' value={email} onChange={ (e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="prof">Digite a sua profissão</label>
          <input type="text" id='prof' value={profission} onChange={ (e) => setProfission(e.target.value)}/>
        </div>

        <input type="submit" value='Cadastrar'/>
      </form>

      <ListWorkers />
    </div>
  )
}

export default Home;