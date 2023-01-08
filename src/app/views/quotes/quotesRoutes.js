import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Analytics')));
const CreateQuote = Loadable(lazy(() => import('./CreateQuote')));

const quotesRoutes = [
  { path: '/cp/quote/list', element: <Analytics />, auth: authRoles.client },
  { path: '/cp/quote/create', element: <CreateQuote />, auth: authRoles.client },
];

export default quotesRoutes;
