import { useState, useEffect } from 'react';

import Input from '../../components/Input/Input.component';
import Terminal from '../../components/Terminal/Terminal.component';
import style from './Contact.module.css'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!')
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Terminal width={'Gg'} > 
          <div className={style.formContact}>
            <h2 className={style.titleForm}>Entre em contato preenchendo o Formulário abaixo</h2>
            <Input 
              label={'name'} 
              labelText={'Insira seu nome'} 
              type={'text'} name={'name'} 
              id={'name'}
              onChange={ (e) => setName(e.target.value)}
            />
            <Input 
              label={'email'} 
              labelText={'Insira seu Email'}
              type={'email'} name={'email'} 
              id={'email'} 
              onChange={ (e) => setEmail(e.target.value)}
            />
            <Input.TextArea 
              label={'msg'}
              labelText={'Insira sua Mensagem'}
              name={'msg'} 
              id={'msg'} 
              cols={'20'} 
              rows={'10'} 
              onChange={ (e) => setMsg(e.target.value)}
            />
            <Input.ButtonSubmit typeBtn={'submit'} value={'Enviar'}/>
          </div>
        </Terminal>
      </form>
    </div>
  );
}

export default Contact;