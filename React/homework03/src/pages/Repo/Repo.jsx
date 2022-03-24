import { useState, useEffect } from "react";
import axios from "axios";

import Terminal from "../../components/Terminal/Terminal.component";
import Error from "../../components/Error/Error.component";
import { TailSpin } from  'react-loader-spinner'
import style from './Repo.module.css';

const Repo = () => {

  const [repo, setRepo] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://api.github.com/users/GuilhermeDenck/repos');
        setRepo(data);
        setLoad(true);
      } catch (error) {
        console.log('Erro ao puxar dados da API',error); 
        setError(true);
      }
    })()
  }, []);

  if(error) return <Error />

  return (
    <>
      <div className={style.divRepo}>
        <h2 className={style.h2Repo}>Repositórios</h2>

        <div className={style.cardRepo}>
          {
            load ? repo.map( repo => (
              <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
                <Terminal width={'Card'}  >
                  <h2> {repo.name} </h2>
                  <p> Descrição: {repo.description} </p>
                  <p> Linguaguem mais utilizada: {repo.language} </p>
                </Terminal>
              </a>
            )) : (
              <TailSpin 
                color="#00BFFF" 
                height={80} 
                width={80} 
                wrapperClass={style.loader}
              />
            )
          }
        </div>
      </div>
    </>
  );
}

export default Repo;