import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Enroll from '../pages/Enroll';
import NotFound from '../pages/NotFound';
import Layout from '../shared/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'enroll',
        element: <Enroll />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
