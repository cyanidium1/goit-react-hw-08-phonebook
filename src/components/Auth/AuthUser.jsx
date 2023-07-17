import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selector';

import { logout } from 'redux/auth/auth-operations';

const AuthUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <p>
      {name}
      <button onClick={onLogout} type="button">
        Logout
      </button>
    </p>
  );
};

export default AuthUser;
