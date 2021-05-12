import React from 'react';

import styled from 'styled-components'

// import { Container } from './styles';

const FooterContainer = styled.div`
 margin:0;
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

const FooterText = styled.div`
    font-size: 18px;
    font-weight:800;
`;




function Footer() {
  return (
  <FooterContainer>
        <FooterText>
        <p>Bnb Space Battle©</p>
        
        </FooterText>
  </FooterContainer>
  );
}

export default Footer;