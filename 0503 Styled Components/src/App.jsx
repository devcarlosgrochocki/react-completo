import React from 'react';
import styled from 'styled-components';

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  &:hover {
    background: black;
    color: white;
  }
  &::before {
    display: block;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background: #53d956;
    top: -8px;
    right: -8px;
  }
`;

const App = () => {

  return (
    <Comprar>Teste</Comprar>
  );
};

export default App;

