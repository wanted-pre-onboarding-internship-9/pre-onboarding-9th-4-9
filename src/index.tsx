import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './shared/Router';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
