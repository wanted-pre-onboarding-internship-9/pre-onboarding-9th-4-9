import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../images/logo.png';

const Header = () => {
    return (
        <STHeaderWrap>
            <StItemWrap>
                <Link to='/'>
                    <img src={logo} alt='switchwon logo' />
                </Link>
            </StItemWrap>
        </STHeaderWrap>
    );
};

export default Header;

const STHeaderWrap = styled.div`
  display: flex;
  width: 100%;
  height: 6%;
  background-color: #FFFF;
  box-shadow:1px 0px 6px 3px;
`;
const StItemWrap = styled.div`
  margin-left: 0.5%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 1px;
  img {
    width: 150px;
  }
`;