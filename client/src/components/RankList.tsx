import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { openModal } from '../modules/modal';
import { Link } from 'react-router-dom';

const RankContainer = styled.div`
  width: 80%;
  height: 100vh;
  background-color: #ffffff;
  position: absolute;
  left: 10%;
  top: 30%;
  font-size: 90px;
  font-weight: bold;

  color: #0f0f0e;
  & img {
    height: 10%;
    width: 10%;
  }
`;

const Line = styled.div`
  width: 99%;
  border: 1px solid #000000;
`;

export default function RankList() {
  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  return (
    <div>
      <RankContainer>
        <div>
          <img src="1등.png"></img>
        </div>
        <Line>
          <div></div>
        </Line>
        <div>
          <img src="2등.png"></img>
        </div>
        <Line>
          <div></div>
        </Line>
        <div>
          <img src="3등.png"></img>
        </div>
        <Line>
          <div></div>
        </Line>
        <div>4등</div>
        <Line>
          <div></div>
        </Line>
        <div>5등</div>
        <Line>
          <div></div>
        </Line>
        <div>6등</div>
        <Line>
          <div></div>
        </Line>
        <div>7등</div>
        <Line>
          <div></div>
        </Line>
      </RankContainer>
    </div>
  );
}
