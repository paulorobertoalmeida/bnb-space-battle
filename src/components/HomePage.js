import React from 'react';
import styled from 'styled-components'
import Header from './Header'
import GameScreen from './GameScreen'

const HomePageContainer = styled.div`

`;


// import { Container } from './styles';

function HomePage() {
  return(
<HomePageContainer> 
<Header />
<GameScreen />
</HomePageContainer>

  );
}

export default HomePage;


