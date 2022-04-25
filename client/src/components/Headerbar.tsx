import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: gray;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  font-size: 2rem;
`;
const Button = styled.div`
  border: 3px solid darkblue;
  border-radius: 1rem;
  :hover {
    background-color: black;
    transition: 0.5s;
    cursor: pointer;
  }
`;

export default function Headerbar() {
  return (
    <Sidebar>
      <Button>
        <div className="home">Home</div>
      </Button>
      <Button>
        <div className="rank">Ranking</div>
      </Button>
      <Button>
        <div className="list">Idea List</div>
      </Button>
      <Button>
        <div className="login">Login</div>
      </Button>
    </Sidebar>
  );
}
