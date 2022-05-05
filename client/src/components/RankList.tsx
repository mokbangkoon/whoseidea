import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { openModal } from '../modules/modal';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

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
  const [rankData, setrankData] = useState<AxiosResponse | null | void>(null);
  useEffect(() => {
    axios
      .get('https://localhost:8080/post/all?limit=10&order=desc')
      .then(data => setrankData(data));
  }, []);
  return (
    <div>
      <div>{rankData?.statusText}</div>
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
        <div>8등</div>
        <Line>
          <div></div>
        </Line>
        <div>9등</div>
        <Line>
          <div></div>
        </Line>
        <div>10등</div>
        <Line>
          <div></div>
        </Line>
      </RankContainer>
    </div>
  );
}
