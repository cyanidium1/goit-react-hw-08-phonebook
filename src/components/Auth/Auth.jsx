import { NavLink } from 'react-router-dom';

import s from './auth.module.css';

import useAuth from 'shared/hooks/useAuth';
import AuthUser from './AuthUser';

const Auth = () => {
  const isLogin = useAuth();
  return (
    <nav className={s.nav}>
      {isLogin ? (
        <AuthUser />
      ) : (
        <div>
          <NavLink className={s.link} to="/register">
            Register
          </NavLink>
          <NavLink className={s.link} to="/login">
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Auth;
