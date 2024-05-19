import { useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts';

import Home from 'src/pages/home';
import Project from 'src/pages/project';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      ),
    },
    {
      path: '/projects/:projectName',
      element: (
        <MainLayout>
          <Project />
        </MainLayout>
      ),
    },
    { path: '*', element: <MainLayout>404</MainLayout> },
  ]);
}
