import { useContext } from 'react';
import { WorkContext } from '../context/WorkContext';

import Input from '../components/Input/Input.component';
import ListWorkers from '../components/ListWorkers/ListWorkers.component';
import style from './Home.module.css'
const Home = () => {

  const { id, name, setName, email, setEmail, profission, setProfission, addWorker, listWorkers } = useContext(WorkContext);

  const validateName = /^[a-z ,.'-]+$/i;
  const validateEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
  const validateProfission = /^[a-z ,.'-]+$/i;

  const resetForm = () => {
    setName('');
    setEmail('');
    setProfission('');
  }

  const validateForm = (e) => {
    e.preventDefault();

    addWorker(e);

    // validateEmail.test(email) && validateName.test(name) && validateProfission.test(profission) 
    // ? addWorker(e) 
    // : alert('Preencha todos os campos corretamente', resetForm());
  }

  return (
    <div className={style.formWork}>
      <h1>Trabalhadores</h1>

      <form onSubmit={validateForm}>
        <Input
          textoLabel={'Digite o seu nome'}
          type={'text'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          textoLabel={'Digite o seu email'}
          type={'text'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          textoLabel={'Digite a sua profissão'}
          type={'text'}
          value={profission}
          onChange={(e) => setProfission(e.target.value)}
        />

        <input type="submit" value='Cadastrar'/>
      </form>

      <ListWorkers />
    </div>
  )
}

export default Home;