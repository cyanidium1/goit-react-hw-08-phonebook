import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import s from './login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  

  const OnLogin = event => {
    event.preventDefault();

    const data = {
      email: event.currentTarget.elements['email'].value,
      password: event.currentTarget.elements['password'].value,
    };

    dispatch(login(data));
  };


  return (
    <div>
      <h1>Login</h1>
      <form className={s.form} onSubmit={OnLogin}>
        <label htmlFor="email" className={s.label}>
          Email
        </label>
        <input
          className={s.input}
          type="text"
          placeholder="Enter your email"
          name="email"
          required
        />
        <label htmlFor="password" className={s.label}>
          Password
        </label>
        <input
          className={s.input}
          type="text"
          placeholder="Enter your pass"
          name="password"
          required
        />

        <button className={s.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
