import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const register = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  console.log('works!');
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const logout = async () => {
  const { data: result } = await instance.post('/users/logout');
  setToken('');
  return result;
};

export const current = async token => {
  try {
    setToken(token);
    const { data: result } = await instance.get('/users/current');
    return result;
  } catch (error) {
    setToken('');
    throw error;
  }
};
