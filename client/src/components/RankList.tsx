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
  font-size: 60px;
  font-weight: bold;
  position: absolute;
  width: 2800px;
  height: 2000px;
  background: #fffafa;
  border-radius: 10px;

  color: #0f0f0e;
  & img {
    height: 10%;
    width: 10%;
  }
  & button {
    position: relative;
    left: 5%;
    height: 100px;
    width: 100px;
    border: none;
    border-radius: 1rem;
    background-color: gray;
    color: black;
    font-weight: bold;
    :hover {
      background-color: yellow;
      color: black;
      cursor: pointer;
      transition: 0.5s;
    }
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
  font-weight: bold;
  font-size: xx-large;
  & button {
    position: relative;
    left: 1%;
    height: 70px;
    background-color: gray;
    width: 70px;
    border: none;
    border-radius: 1rem;
    :hover {
      background-color: yellow;
      color: black;
      transition: 0.5s;
    }
  }
`;
const MobileRank2 = styled.div`
  border-bottom: 3px solid black;
  font-weight: bold;
  font-size: xx-large;
  & button {
    position: relative;
    left: 1%;
    height: 70px;
    background-color: gray;
    width: 70px;
    border: none;
    border-radius: 1rem;
    :hover {
      background-color: yellow;
      color: black;
      transition: 0.5s;
    }
  }
`;
const MobileRank3 = styled.div`
  border-bottom: 3px solid black;
  font-weight: bold;
  font-size: xx-large;
  & button {
    position: relative;
    left: 1%;
    height: 70px;
    background-color: gray;
    width: 70px;
    border: none;
    border-radius: 1rem;
    :hover {
      background-color: yellow;
      color: black;
      transition: 0.5s;
    }
  }
`;
const Writer = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export default function RankList() {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  const [rankData, setrankData] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get('https://whoseidea.ml:8080/post/all?limit=10&order=desc')
      .then(data => setrankData(data.data));
  }, []);

  return (
    <div>
      {isPc ? (
        <div>
          <RankContainer>
            <div>
              <img src="1등.png"></img>
              {rankData[0] !== undefined ? (
                <span>
                  <span>
                    {console.log(rankData)}
                    제목: {rankData[0].caption} 작성자: {rankData[0].nickname}
                  </span>
                  <Link to={`/ideaview/${rankData[0].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
            <Line>
              <div></div>
            </Line>
            <div>
              <img src="2등.png"></img>
              {rankData[1] !== undefined ? (
                <span>
                  <span>
                    제목: {rankData[1].caption} 작성자: {rankData[1].nickname}
                  </span>
                  <Link to={`/ideaview/${rankData[1].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
            <Line>
              <div></div>
            </Line>
            <div>
              <img src="3등.png"></img>
              {rankData[2] !== undefined ? (
                <span>
                  <span>
                    제목: {rankData[2].caption} 작성자: {rankData[2].nickname}
                  </span>
                  <Link to={`/ideaview/${rankData[2].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
            <Line>
              <div></div>
            </Line>
            <div>4등</div>
            {rankData[3] !== undefined ? (
              <span>
                <span>
                  제목: {rankData[3].caption} 작성자: {rankData[3].nickname}
                </span>
                <Link to={`/ideaview/${rankData[3].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line>
              <div></div>
            </Line>
            <div>5등</div>
            {rankData[4] !== undefined ? (
              <span>
                <span>
                  제목: {rankData[4].caption} 작성자: {rankData[4].nickname}
                </span>
                <Link to={`/ideaview/${rankData[4].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line>
              <div></div>
            </Line>
            <div>6등</div>
            {rankData[5] !== undefined ? (
              <span>
                <span>
                  제목: {rankData[5].caption} 작성자: {rankData[5].nickname}
                </span>
                <Link to={`/ideaview/${rankData[5].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line>
              <div></div>
            </Line>
            <div>7등</div>
            {rankData[6] !== undefined ? (
              <span>
                <span>
                  제목: {rankData[6].caption} 작성자: {rankData[6].nickname}
                </span>
                <Link to={`/ideaview/${rankData[6].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line>
              <div></div>
            </Line>
            <div>8등</div>
            {rankData[7] !== undefined ? (
              <span>
                <span>
                  제목: {rankData[7].caption} 작성자: {rankData[7].nickname}
                </span>
                <Link to={`/ideaview/${rankData[7].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line>
              <div></div>
            </Line>
            <div>9등</div>
            {rankData[8] !== undefined ? (
              <span>
                <span>
                  제목: {rankData[8].caption} 작성자: {rankData[8].nickname}
                </span>
                <Link to={`/ideaview/${rankData[8].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line>
              <div></div>
            </Line>
            <div>10등</div>
            {rankData[9] !== undefined ? (
              <span>
                <span>
                  제목: {rankData[9].caption} 작성자: {rankData[9].nickname}
                </span>
                <Link to={`/ideaview/${rankData[9].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
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
              {rankData[0] !== undefined ? (
                <span>
                  <span>
                    {rankData[0].caption} 작성자: {rankData[0].nickname}
                  </span>
                  <Link to={`/ideaview/${rankData[0].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
          </MobileRank1>
          <MobileRank2>
            <div>
              <img src="2등.png"></img>
              {rankData[1] !== undefined ? (
                <span>
                  <span>
                    {rankData[1].caption} 작성자: {rankData[1].nickname}
                  </span>
                  <Link to={`/ideaview/${rankData[1].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
          </MobileRank2>
          <MobileRank3>
            <div>
              <img src="3등.png"></img>
              {rankData[1] !== undefined ? (
                <span>
                  <span>
                    {rankData[2].caption} 작성자: {rankData[2].nickname}
                  </span>
                  <Link to={`/ideaview/${rankData[2].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
          </MobileRank3>
        </MobileContainer>
      )}
    </div>
  );
}
