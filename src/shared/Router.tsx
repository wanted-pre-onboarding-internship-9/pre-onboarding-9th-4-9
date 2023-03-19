import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import MainPage from '../pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div />,
    children: [
      {
        index: true,
        path: '/',
        element: <MainPage />,
      },
      {
        path: '*',
        element: <Navigate replace to='/' />,
      },
    ],
  },
]);

export default router;
