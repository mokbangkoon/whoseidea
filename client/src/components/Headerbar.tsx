import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { openModal } from '../modules/modal';

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
  const check = useSelector((state: RootState) => state.modal.check);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다
  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const handleModal = () => {
    dispatch(openModal());
  };
  return (
    <Sidebar>
      <Button>
        <div>Home</div>
      </Button>
      <Button>
        <div>Ranking</div>
      </Button>
      <Button>
        <div>Idea List</div>
      </Button>
      <Button>
        <div onClick={() => handleModal()}>Login</div>
      </Button>
    </Sidebar>
  );
}
