import { useContext } from 'react';
import { WorkContext } from '../../context/WorkContext';
import { AiOutlineClose, AiFillEdit } from 'react-icons/ai';

import style from './ListWorkers.module.css';
const ListWorkers = () => {

  const { alterWorker, removeWoker, listWorkers} = useContext(WorkContext);

  return (
    <div className={style.listWorkers}>
        { 
          listWorkers.length ? ( listWorkers.map(worker => (
            <table>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Profissão</th>
                <th></th>

              </tr>

              <tr>
                <td>{worker.name}</td>
                <td>{worker.email}</td>
                <td>{worker.profission}</td>
                <td colSpan={2} className={style.btnTable}>
                  <button onClick={ () => removeWoker(worker.id)}> <AiOutlineClose  /> </button>
                  <button onClick={ () => alterWorker(worker.id ,worker.name, worker.email, worker.profission)}> <AiFillEdit /> </button>
                </td>
              </tr>
            </table>
          )) ) : (
            <p>Nenhum trabalhador cadastrado</p>
          )
        }
      </div>
  );
}

export default ListWorkers;