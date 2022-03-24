import { useState, useEffect } from "react";
import axios from "axios";

import Terminal from "../../components/Terminal/Terminal.component";
import Error from "../../components/Error/Error.component";
import { TailSpin } from  'react-loader-spinner'
import style from "./Perfil.module.css";

const Perfil = () => {

  const [user, setUser] = useState({});
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get("https://api.github.com/users/GuilhermeDenck");
        setUser(data);
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
      {
        load ? (
          <div className={style.aboutMe}>
            <figure>
              <img src={user.avatar_url} alt="Foto de Perfil" />
            </figure>

            <Terminal width={'Lg'} >
              <Terminal.Tag classe={'sobreMim'}>
                <Terminal.Prop textTag={'Nome'} textProp={user.name}/>
                <Terminal.Prop textTag={'Cidade'} textProp={user.location}/>
                <Terminal.Prop textTag={'Company'} textProp={user.company}/>
                <Terminal.Prop textTag={'Stack'} textProp={'Front-end'}/>
                <Terminal.Prop textTag={'Bio'} textProp={user.bio}/>
              </Terminal.Tag>

              <Terminal.Tag classe={'educacao'}>
                <Terminal.Prop textTag={'cursoTenico'} textProp={'Técnico em Informática para Internet'}/>
                <Terminal.Prop textTag={'faculdade'} textProp={'Análise e Desenvolvimento de Sistemas'}/>
              </Terminal.Tag>
            </Terminal>
          </div>
        ) : (
            <TailSpin 
              color="#00BFFF" 
              height={80} 
              width={80} 
              wrapperClass={style.loader}
            />
        )
      }
    </>
  );
}

export default Perfil;