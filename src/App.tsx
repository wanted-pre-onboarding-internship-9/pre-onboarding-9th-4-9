import { Outlet } from 'react-router-dom';

import Layout from './components/common/Layout';

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
