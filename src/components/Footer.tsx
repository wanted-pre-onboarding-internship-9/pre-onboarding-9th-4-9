import styled from 'styled-components';

import img_github from '../images/github_white.png';

const Footer = () => {
  return (
    <STFooterWrap>
      <StItemWrap>
        © 2023. pre-onboarding-9th-4-9. All rights reserved.
      </StItemWrap>

      <StItemWrap>
        <StImg
          href='https://github.com/wanted-pre-onboarding-internship-9/pre-onboarding-9th-4-9'
          target='_blank'>
          <img src={img_github} alt='git hub' />
        </StImg>
      </StItemWrap>
    </STFooterWrap>
  );
};

export default Footer;

const STFooterWrap = styled.div`
  display: flex;
  height: 6%;
  width: 100%;
  background-color: #000;
  color: #ffff;
  justify-content: center;
  gap: 10px;
`;
const StItemWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
const StImg = styled.a`
  img {
    width: 5vh;
    height: 5vh;
  }
`;
