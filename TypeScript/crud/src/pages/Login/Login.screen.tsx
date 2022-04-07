import { useContext, useEffect, useState } from 'react';
import {Formik, Field, Form, FormikHelpers} from 'formik';
import { LoginDTO } from '../../model/LoginDTO';
import { ContainerLogin, TitleForm, DivForm, DivInput, LabelLogin, InputLogin, ButtonLogin, DivSignUp } from './Login.styles';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import VemSerColorido from '../../images/VemSerColorido.png'
import eye from '../../images/active.svg'

const Login = () => {

  const navigate = useNavigate();

  const {handleLogin} = useContext<any>(AuthContext);

  const [typeInput, setTypeInput] = useState<boolean>(true);

  useEffect( () => {
    const hasToken = localStorage.getItem('token');
    if(hasToken) {
      navigate('/');
    }
  }, [])

  return (
    <div>
      <ContainerLogin>
        <Formik
          initialValues={{
            usuario: '',
            senha: '',
          }}
          onSubmit={(
            values: LoginDTO,
            { setSubmitting }: FormikHelpers<LoginDTO>
          ) => {
            handleLogin(values);
            setSubmitting(false);
          }}
        >
          <DivForm>
            <img src={VemSerColorido} alt="Logotipo do VemSer" width={340} height={90} />
            <TitleForm> Log in to Dashboard Kit </TitleForm>
            <p>Digite seu usuário e senha abaixo</p>
            <Form>
              <DivInput>
                <LabelLogin htmlFor="usuario"> Usuário </LabelLogin>
                <Field name="usuario" as={InputLogin} id="usuario" placeholder="Digite o nome do usuário"/>
              </DivInput>
            
              <DivInput>
                <LabelLogin htmlFor="senha"> Senha </LabelLogin>
                <div>
                  <Field name="senha" as={InputLogin} id="senha" type={ typeInput ? 'password' : 'text'  } placeholder="Digite a sua senha"/>
                  <a onClick={ () =>  setTypeInput(!typeInput) }> <img src={eye} alt="olho" width={30} height={30} /> </a>
                </div>
              </DivInput>

              <ButtonLogin type='submit'> Entrar </ButtonLogin>

              <DivSignUp>
               <p>Não tem uma conta? <span> Cadastre-se </span> </p>
              </DivSignUp>
            </Form>
          </DivForm>
        </Formik>
      </ContainerLogin>
    </div>
  )
}

export default Login;