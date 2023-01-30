import AuthGuard from 'app/auth/AuthGuard';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import jobsRoutes from './views/jobs/jobsRoutes';
import settingsRoutes from './views/settings/settingsRoutes';
import quotesRoutes from './views/quotes/quotesRoutes';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [...dashboardRoutes, ...quotesRoutes, ...jobsRoutes, ...settingsRoutes]
  },
  ...sessionRoutes,
  { path: '/cp', element: <Navigate to="/cp/dashboard/default" /> },
  { path: '/cp/*', element: <NotFound /> },
];

export default routes;
