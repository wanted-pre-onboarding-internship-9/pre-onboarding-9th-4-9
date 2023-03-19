import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { OrderProvider } from '../hooks/useOrderData';
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
        element: (
          <OrderProvider>
            <MainPage />
          </OrderProvider>
        ),
      },
      {
        path: '*',
        element: <Navigate replace to='/' />,
      },
    ],
  },
]);

export default router;
