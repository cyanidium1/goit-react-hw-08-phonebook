import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const Login = lazy(() => import('./components/pages/Login/Login'));
const Register = lazy(() => import('./components/pages/Register/Register'));
const Contacts = lazy(() => import('./components/pages/Contacts/Contacts'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load Page</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
