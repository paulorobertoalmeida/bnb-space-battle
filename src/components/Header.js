import React from 'react';

// import { Container } from './styles';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    margin: auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
    <h3>Earn Money While You Play</h3>
    <p>Get 'till the End of This Game to Earn 2BnB </p>
    </HeaderContainer>

  );
}

export default Header;