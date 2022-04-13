import { apiAuth } from '../../service/api';

export const handleLogin = async (values, dispatch, navigate) => {
  try {
    const { data } = await apiAuth.post('/auth', values);
    console.log(data);
    const logado = {
      type: 'SET_LOGIN',
      token: data,
      auth: true,
    };
    apiAuth.defaults.headers.common['Authorization'] = data;
    localStorage.setItem('token', data);
    dispatch(logado);
    navigate('/');
  } catch (error) {
    console.log(error);
  }
}

export const handleLogout = (dispatch, navigate) => {
  const logout = {
    type: 'SET_LOGOUT',
    token: '',
    auth: false,
  };
  localStorage.removeItem('token');
  dispatch(logout);
  navigate('/login');
}

export const isAuth = dispatch => {
  const auth = {
    type: 'SET_AUTH',
    auth: true,
  };
  dispatch(auth);
}