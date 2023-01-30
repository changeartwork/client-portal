import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Todo = Loadable(lazy(() => import('./Todo')));

const settingsRoutes = [
  { path: '/cp/settings/todo', element: <Todo />, auth: authRoles.client }
];

export default settingsRoutes;
