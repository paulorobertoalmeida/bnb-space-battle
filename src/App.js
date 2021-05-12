
import './App.css';
import styled from 'styled-components'
import Footer from  './components/Footer'

import Web3 from 'web3'
import Header from './components/Header'
import GameScreen from './components/GameScreen'

import useWeb3Modal from './hooks/useWeb3Modal'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/HomePage';


const MainContainer = styled.div`
margin:0;
background: rgb(87,0,38);
background: linear-gradient(28deg, rgba(87,0,38,1) 0%, rgba(0,101,67,1) 49%, rgba(0,43,93,1) 100%);
color: #fff;
`;

const NavBar = styled.div`
  
  display: inline;
  width:80%;
  top: 0;
  background-color: blue;
  padding
  margin: 0 1em;
  transition: top 500ms ease-in-out;
  
`;

const TextLink = styled.a`
 margin: 80px;
 text-decoration: none;
 color: #fff;
 font-weight:700;
 font-family: 'Lato', sans-serif;
`;

const Button = styled.button`
  
  background-color: white;
  border: none;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  font-weight:500;
  text-align: center;
  text-decoration: none;
  margin: 5px 20px;
  padding: 12px 24px;

  ${(props) => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }

  &:hover{
    color: #98463F;
  }
`;

function WalletButton ({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  console.log("provider");
  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}

const StyledLinks = styled(Link)`
  display: inline-block;
  margin: 0 1em;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  color: #fff;
  justify-content: flex-end;

  &:hover {
    color: #2B0948;
  }
`;

function App() {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  console.log("Here");
  console.log(provider);
  console.log(loadWeb3Modal);
  console.log(logoutOfWeb3Modal);
  
  return (
    <Router>
      <MainContainer>
        <NavBar>
          <TextLink href="#" target="blank" rel="noopener">BNB Space Battle</TextLink>
            <StyledLinks to="/">Home</StyledLinks>
            <StyledLinks to="/about">About</StyledLinks> 
            <StyledLinks to="/rules">Rules</StyledLinks>  
          <Button 
            provider={provider}
            loadWeb3Modal={loadWeb3Modal}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
            >Connect Wallet</Button>
        <Switch>
            <Route exact path="/" component={HomePage} >
              </Route>
              <Route path="/about" component={About}>
              </Route>
            <Route path="/">
            </Route>
          </Switch>
        </NavBar>
      <Footer />
    </MainContainer>
    </Router>
  );
}

export default App;
