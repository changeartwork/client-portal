import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const ListJobs = Loadable(lazy(() => import('./ListJobs')));
const CreateJob = Loadable(lazy(() => import('./CreateJob')));

const quotesRoutes = [
  { path: '/cp/job/list', element: <ListJobs />, auth: authRoles.client },
  { path: '/cp/job/create', element: <CreateJob />, auth: authRoles.client },
];

export default quotesRoutes;
