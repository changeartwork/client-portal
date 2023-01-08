import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Analytics')));

const dashboardRoutes = [
  { path: '/cp/dashboard/default', element: <Analytics />, auth: authRoles.client },
];

export default dashboardRoutes;
