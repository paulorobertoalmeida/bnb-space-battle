
import './App.css';
import styled from 'styled-components'
import Footer from  './components/Footer'

const MainContainer = styled.div`
margin:0;
background: rgb(87,0,38);
background: linear-gradient(28deg, rgba(87,0,38,1) 0%, rgba(0,101,67,1) 49%, rgba(0,43,93,1) 100%);
color: #fff;
`;

const GameScrean = styled.div`
  margin:auto;
  width: 600px;
  height: 600px;
  color: white;
  background-color: #fff;
  border: 2px solid red;

`;


const Button = styled.button`

`;




function App() {
  return (
    <MainContainer>
    <h1>BNB Space Battle</h1>
    <h3>Earn Money While You Play</h3>
    <GameScrean>Hello </GameScrean>
    <Button> Start </Button>
    <Button> Quit </Button>
    <Button> Start </Button>
    <Footer />

    </MainContainer>
  );
}

export default App;
