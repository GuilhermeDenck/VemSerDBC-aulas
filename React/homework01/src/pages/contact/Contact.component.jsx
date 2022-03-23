import { useState } from 'react';

import Input from '../../components/input/Input.component'
import styles from './Contact.module.css';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Seu nome é ${nome}, seu email ${email}, sua responsta foi ${resposta} e sua mensagem foi ${msg}`);
  }

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [resposta, setResposta] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <section className={styles.containerForm}>
      <form className={styles.formContact} onSubmit={handleSubmit}>
        
        <Input.Label htmlFor={'username'} text={'Digite seu nome completo'}> 
          <Input type={'text'} name={'username'} id={'username'} value={nome} placeholder={'Digite seu nome completo'} onChange={ (e) => setNome(e.target.value)}/>  
        </Input.Label>

        <Input.Label htmlFor={'email'} text={'Digite seu e-mail'}> 
          <Input type={'email'} name={'email'} id={'email'} value={email} placeholder={'Digite seu e-mail'} onChange={ (e) => setEmail(e.target.value)}/>  
        </Input.Label>

        <Input.Label htmlFor={'question'} text={'Qual o motivo do contato'}> 
          <Input.Select name={'question'} id={'question'} value={resposta} onChange={ (e) => setResposta(e.target.value)}>
            <Input.Option value={''} text={'Selecione uma opção'} />
            <Input.Option value={'q1'} text={'React é easy demais!'}/>
            <Input.Option value={'q2'} text={'React é suportável'}/>
            <Input.Option value={'q3'} text={'REACT É MUITOOOO DIFICILLLL 😭😭'}/>
          </Input.Select>
        </Input.Label>

        <Input.Label htmlFor={'message'} text={'Digite sua mensagem'}>
          <Input.TextArea name={'message'} id={'message'} cols={'30'} rows={'10'} placeholder={'Digite sua mensagem'} onChange={ (e) => setMsg(e.target.value)}/>
        </Input.Label>

        <Input type={'submit'} value={'Salvar'} />
      </form>
    </section>
  );
}

export default Contact;