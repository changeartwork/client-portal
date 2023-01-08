import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Todo = Loadable(lazy(() => import('./Todo')));

const jobsRoutes = [
  { path: '/cp/jobs/todo', element: <Todo />, auth: authRoles.client }
];

export default jobsRoutes;
