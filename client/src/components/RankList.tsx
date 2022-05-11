import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { openModal } from '../modules/modal';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { useMediaQuery } from 'react-responsive';

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

const MobileContainer = styled.div`
  position: absolute;
  top: 70%;

  & img {
    width: 40%;
    height: 40%;
  }
`;

const MobileRank1 = styled.div`
  border-bottom: 3px solid black;
`;
const MobileRank2 = styled.div`
  border-bottom: 3px solid black;
`;
const MobileRank3 = styled.div`
  border-bottom: 3px solid black;
`;
const RankData = styled.div`
  position: absolute;
  top: 20%;
  background-color: yellow;
`;

export default function RankList() {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  const [rankData, setrankData] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get('https://localhost:8080/post/all?limit=10&order=desc')
      .then(data => setrankData(data.data));
  }, []);

  console.log(rankData);
  return (
    <div>
      {isPc ? (
        <div>
          <RankContainer>
            <div>
              <img src="1등.png"></img>
              <span>
                {rankData[0].caption} 작성자: {rankData[0].nickname}
              </span>
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
      ) : (
        <MobileContainer>
          <MobileRank1>
            <div>
              <img src="1등.png"></img>
            </div>
          </MobileRank1>
          <MobileRank2>
            <div>
              <img src="2등.png"></img>
            </div>
          </MobileRank2>
          <MobileRank3>
            <div>
              <img src="3등.png"></img>
            </div>
          </MobileRank3>
        </MobileContainer>
      )}
    </div>
  );
}
