import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const NotFound = Loadable(lazy(() => import('./NotFound')));
const ForgotPassword = Loadable(lazy(() => import('./ForgotPassword')));
const JwtLogin = Loadable(lazy(() => import('./JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('./JwtRegister')));

const sessionRoutes = [
  { path: '/cp/session/signup', element: <JwtRegister /> },
  { path: '/cp/session/signin', element: <JwtLogin /> },
  { path: '/cp/session/forgot-password', element: <ForgotPassword /> },
  { path: '/cp/session/404', element: <NotFound /> },
];

export default sessionRoutes;
