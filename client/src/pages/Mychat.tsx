import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Title = styled.div`
  font-weight: bold;
  font-size: 100px;
  text-align: center;
  position: absolute;
  color: black;
  border-radius: 1rem;
  left: 25%;
  font-family: 'Courier New', Courier, monospace;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;

export default function Mychat({ chatData }: any) {
  console.log(chatData);
  const check = useSelector((state: RootState) => state.modal.check);
  return (
    <div>
      <Title>
        <div> 쪽지 보관함</div>
      </Title>
      {chatData === null ? null : <div>{chatData.data.context}</div>}

      {check ? <Login /> : null}
    </div>
  );
}
