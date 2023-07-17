import { useDispatch } from 'react-redux';

import s from './register.module.css';

import { signup } from 'redux/auth/auth-operations';


const Register = () => {
  const dispatch = useDispatch();

  const OnRegister = event => {
    event.preventDefault();

    const data = {
      name: event.currentTarget.elements['name'].value,
      email: event.currentTarget.elements['email'].value,
      password: event.currentTarget.elements['password'].value,
    };

    dispatch(signup(data));
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form className={s.form} onSubmit={OnRegister}>
        <label htmlFor="name" className={s.label}>
          Name
        </label>
        <input
          className={s.input}
          type="text"
          placeholder="Enter your name"
          name="name"
          required
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
