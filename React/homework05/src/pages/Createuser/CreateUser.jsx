import React from 'react'
import { Formik, Field, Form } from 'formik';
import api from '../../services/api';
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = () => {

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname);

  const notify = () => toast("Usuário criado com sucesso!, você será redicerido");

  const createNewUser = async (values) => {
    try {
      values.dataNascimento = moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
      const {data} = await api.post('/pessoa', values);
      console.log(data);
      notify();
      setTimeout(() => {
        navigate('/users');
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Formik
      initialValues={{
        cpf: '',
        dataNascimento: '',
        email: '',
        nome: '',
      }}
      onSubmit={async (values) => {
        createNewUser(values);
      }}
    >
      <Form>
        <label htmlFor="nome">Nome</label>
        <Field id="nome" name="nome" placeholder="Digite seu Nome: " />

        <label htmlFor="email">E-mail</label>
        <Field id="email" type="email" name="email" placeholder="Digite seu E-mail" />

        <label htmlFor="dataNascimento">Data de Nascimento</label>
        <Field id="dataNascimento" name="dataNascimento" placeholder="Digite sua data de nacimento"/>

        <label htmlFor="cpf">CPF</label>
        <Field id="cpf" name="cpf" placeholder="Digite seu CPF: " />

        <button type="submit">Cadastrar</button>
        <ToastContainer />
      </Form>
    </Formik>
    </div>
  )
}

export default CreateUser;