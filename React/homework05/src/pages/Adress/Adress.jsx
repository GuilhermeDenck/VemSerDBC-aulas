import {useState, useEffect} from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

import style from './Adress.module.css';

function Adress() {

  const handleCep = async(values, setFieldValue) => {
    const { value } = values.target;
    if(values.target.value.length === 9) {
      try {
        const finalCep = value.split('-').join('');
        const {data} = await axios.get(`https://viacep.com.br/ws/${finalCep}/json/`);
        setFieldValue('rua', data.logradouro);
        setFieldValue('complemento', data.complemento);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('estado', data.uf);
        setFieldValue('ddd', data.ddd);
        return data;
      } catch (error) {
        alert('CEP não encontrado');
        console.log(error);
      }
    }
  }

  const validateCep = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (/[1-9]/g.test(value)) {
      error = 'Invalid cep address';
    }
    return error;
  }

  const regexOnlyNumbers = /\D/g;

  const maskCep = (e, setFieldValue ) => {
    setFieldValue('cep', e.target.value.replace(regexOnlyNumbers, '').replace(/(\d{5})(\d)/, '$1-$2'));
  }

  const maskTel = (e, setFieldValue ) => {
    setFieldValue('tel', e.target.value.replace(regexOnlyNumbers, '').replace(/(\d{5})(\d)/, '$1-$2'));
  }

  return (
    <div className={style.pageAdress}>
      <div className={style.containerCep}>
        <h1>Cep</h1>
        <Formik
          initialValues={{
            cep: '',
            rua: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: '',
            ddd: '',
            tel: ''
          }}
          render={({ setFieldValue }) => (
            <Form className={style.form}>
              <div>
                <label htmlFor="cep">Cep</label>
                <Field id="cep" name="cep" validate={validateCep} maxLength="9" placeholder="digite seu CEP" onBlur={ e => handleCep(e, setFieldValue)} onChange={ e => maskCep(e, setFieldValue)} />
              </div>
              <div>
                <label htmlFor="rua">Rua</label>
                <Field id="rua" name="rua" placeholder="digite sua Rua" />
              </div>
              <div>
                <label htmlFor="complemento">Complemento</label>
                <Field id="complemento" name="complemento" placeholder="digite seu Complemento" />
              </div>
              <div>
                <label htmlFor="bairro">Bairro</label>
                <Field id="bairro" name="bairro" placeholder="digite seu Bairro" />
              </div>
              <div> 
                <label htmlFor="cidade">Cidade</label>
                <Field id="cidade" name="cidade" placeholder="digite sua Cidade" />
              </div>
              <div>
                <label htmlFor="estado">Estado</label>
                <Field id="estado" name="estado" placeholder="digite seu Estado" />
              </div>
              <div>
                <label htmlFor="ddd">DDD</label>
                <Field id="ddd" name="ddd" placeholder="digite seu DDD" />
              </div>
              <div>
                <label htmlFor="tel">Telefone</label>
                <Field id="tel" name="tel" placeholder="digite sua Telefone" maxLength="10" onChange={ e => maskTel(e, setFieldValue)} />
              </div>
          </Form>
          )}
        />
      </div>
    </div>
  );
}

export default Adress