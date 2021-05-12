
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
  padding:1.5rem;
`;

const TextLink = styled.a`
  margin: 50px;
 text-decoration: none;
 color: #fff;
 font-weight:700;
`;

const Button = styled.button`
justify-content: flex-end;
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
    
     <Link to="/">Home</Link>
     <Link to="/about">About</Link> 
     <Link to="/rules">Rules</Link> 
     
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
