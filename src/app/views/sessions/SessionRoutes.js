import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const NotFound = Loadable(lazy(() => import('./NotFound')));
const ForgotPassword = Loadable(lazy(() => import('./ForgotPassword')));
// const FirebaseLogin = Loadable(lazy(() => import('./login/FirebaseLogin')));
const JwtLogin = Loadable(lazy(() => import('./login/JwtLogin')));
// const Auth0Login = Loadable(lazy(() => import("./login/Auth0Login")));
// const FirebaseRegister = Loadable(lazy(() => import('./register/FirebaseRegister')));
const JwtRegister = Loadable(lazy(() => import("./register/JwtRegister")));

const sessionRoutes = [
  {
    path: '/cpdev/session/signup',
    element: <JwtRegister />,
  },
  {
    path: '/cpdev/session/signin',
    element: <JwtLogin />,
  },
  {
    path: '/cpdev/session/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/cpdev/session/404',
    element: <NotFound />,
  },
];

export default sessionRoutes;
