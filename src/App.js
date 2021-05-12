
import './App.css';
import styled from 'styled-components'
import Footer from  './components/Footer'
import Header from './components/Header'
import GameScreen from './components/GameScreen'

const MainContainer = styled.div`
margin:0;
background: rgb(87,0,38);
background: linear-gradient(28deg, rgba(87,0,38,1) 0%, rgba(0,101,67,1) 49%, rgba(0,43,93,1) 100%);
color: #fff;
`;

const NavBar = styled.div`
  padding:1.5rem;
`;

const TextLink = styled.a`
  margin: 50px;
 text-decoration: none;
 color: #fff;
 font-weight:700;
`;


function App() {
  return (
    <MainContainer>
    <NavBar>
      <TextLink href="#" target="blank" rel="noopener">BNB Space Battle</TextLink>
    
    </NavBar>
    <Header />
    <GameScreen />
    
    <Footer />

    </MainContainer>
  );
}

export default App;
