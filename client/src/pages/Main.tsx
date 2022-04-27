import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

const MainStyle = styled.div`
  background-color: #f1f7ee;
  font-weight: bold;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 200px;
  width: 80%;
  position: absolute;
  left: 10%;
  top: 40%;
  line-height: 200px;
  font-size: 1rem;
  border-radius: 1rem;
  grid-column-gap: 2rem;
`;
const Title = styled.div`
  background-color: #879eb3;
  border-radius: 1rem;
  font-weight: bold;
  border: 3px solid black;
  width: 80%;
  height: 200px;
  text-align: center;
  font-size: 3rem;
  position: relative;
  left: 10%;
  line-height: 200px;
`;
const First = styled.div`
  border: 3px solid red;
  border-radius: 1rem;
`;
const Second = styled.div`
  border: 3px solid blue;
  border-radius: 1rem;
`;
const Third = styled.div`
  border: 3px solid orange;
  border-radius: 1rem;
`;

export default function Main() {
  const check = useSelector((state: RootState) => state.modal.check);
  return (
    <div>
      <Title>
        <div>Whose Idea?</div>
      </Title>
      <MainStyle>
        <First>
          <div>세상의 모든 아이디어 모음</div>
        </First>
        <Second>
          <div>당신의 생각을 써주세요!</div>
        </Second>
        <Third>
          <div>세상을 바꿀 아이디어</div>
        </Third>
      </MainStyle>
      {check ? <Login /> : null}
    </div>
  );
}
