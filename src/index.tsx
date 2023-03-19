import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './shared/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
