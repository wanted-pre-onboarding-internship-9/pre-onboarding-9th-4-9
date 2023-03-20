import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <STLayoutWrap>
      <Header />
      <STBodyWrap>
        <Outlet />
      </STBodyWrap>
      <Footer />
    </STLayoutWrap>
  );
}

export default App;

const STLayoutWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const STBodyWrap = styled.div`
  width: 100%;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
