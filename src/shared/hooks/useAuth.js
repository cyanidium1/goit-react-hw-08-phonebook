import { useSelector } from 'react-redux';

import { isLogin } from 'redux/auth/auth-selector';

const useAuth = () => {
  const result = useSelector(isLogin);
  return result;
};

export default useAuth;
