import { useContext } from 'react';
import { WorkContext } from '../../context/WorkContext';

import style from './ListWorkers.module.css';
const ListWorkers = () => {

  const { alterWorker, removeWoker, listWorkers} = useContext(WorkContext);

  return (
    <div className={style.listWorkers}>
        { 
          listWorkers.length ? ( listWorkers.map(worker => (
            <div key={worker.id}>
              <h2>{worker.name}</h2>
              <p>{worker.email}</p>
              <p>{worker.profission}</p>
              <button onClick={ () => removeWoker(worker.id)}>Remover</button>
              <button onClick={ () => alterWorker(worker.id ,worker.name, worker.email, worker.profission)}>Alterar</button>
            </div>
          )) ) : (
            <p>Nenhum trabalhador cadastrado</p>
          )
        }
      </div>
  );
}

export default ListWorkers;