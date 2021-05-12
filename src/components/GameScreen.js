import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

const GameContainer = styled.div`

`;

const GameDisplay = styled.div`
margin: 1rem;
display:flex;
flex-direction: column;
`;

const Game = styled.div`
  margin:auto;
  width: 600px;
  height: 600px;
  color: white;
  background-color: #fff;
  border: 2px solid #D1495B;

`;

const ButtonContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
margin:1rem;


`;

const Button = styled.button`
margin: 5px;
width: 90px;
padding: 5px;
background: rgb(11,252,255);
background: linear-gradient(29deg, rgba(11,252,255,1) 0%, rgba(210,27,27,1) 53%, rgba(254,178,16,1) 100%);
border-radius: 10px;
border: none;
color: #fff;

&:hover {
    background-color: white;
    color: #000000;


`;

function GameScreen() {
  return(
<GameContainer>
<GameDisplay>
<Game>
</Game>
<ButtonContainer>
<Button> Quit </Button>
    <Button> Start </Button>
    <Button> Retry </Button>
</ButtonContainer>
    </GameDisplay>
</GameContainer>

  );
}

export default GameScreen;