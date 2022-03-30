import { Formik, Field, Form } from 'formik';
import { useContext, useEffect,  } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import style from './Login.module.css';

const Login = () => {

  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect( () => {
    const hasToken = localStorage.getItem('token');
    if(hasToken) {
      navigate('/users');
    }
  }, [])

  return (
    <div className={style.login}>
      <div className={style.containerForm}>
        <h1>Login</h1>
        <Formik
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={handleLogin}
      >
        <div>
          <Form className={style.form}>
            <div>
              <label htmlFor="usuario">Login</label>
              <Field id="usuario" name="usuario" placeholder="write your login" />
            </div>

            <div>
              <label htmlFor="senha">Password</label>
              <Field id="senha" name="senha" placeholder="write your password" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </div>
      </Formik>
      </div>
    </div>
  );
}

export default Login;