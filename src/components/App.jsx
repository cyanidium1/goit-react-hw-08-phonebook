import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Auth from './Auth/Auth';
import UserRoutes from 'UserRoutes';

import { current } from 'redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current())
  }, [dispatch]);

  return (
    <div className="container">
      <Auth />
      <UserRoutes />
    </div>
  );
};

export default App;
