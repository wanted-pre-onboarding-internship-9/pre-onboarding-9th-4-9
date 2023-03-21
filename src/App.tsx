import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';

function App() {
  return (
    <Box>
      <Header />
      <SideBar />
      <Box ml='60' mt='16'>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
