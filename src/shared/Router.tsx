import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import OrderListPage from '../pages/OrderListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div />,
    children: [
      {
        index: true,
        path: '/',
        element: <OrderListPage />,
      },
      {
        path: '*',
        element: <Navigate replace to='/' />,
      },
    ],
  },
]);

export default router;
