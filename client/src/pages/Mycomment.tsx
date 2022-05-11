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
const Writer = styled.div`
  position: relative;
  top: 150px;
  left: 20%;
  font-weight: bold;
  font-family: sans-serif;
`;

const Data = styled.div`
  position: relative;
  top: 170px;
  left: 20%;
  font-weight: bold;
  font-family: sans-serif;
  font-size: xx-large;

  color: #167e16;
`;

const OnlyData = styled.div`
  :hover {
    background-color: yellow;
    transition: 0.5s;
    width: 800px;
    color: #000000;
  }
`;

export default function Mycomment({ commentData }: any) {
  console.log(commentData);
  const check = useSelector((state: RootState) => state.modal.check);
  return (
    <div>
      <Title>
        <div> 내가 쓴 댓글 모음</div>
      </Title>
      {commentData === null || commentData.data.length === 0 ? null : (
        <div>
          <Writer>
            <div>작성자 : {commentData.data[0].nickname}</div>
          </Writer>
          <div>
            {commentData.data.map((el: any) => (
              <Data>
                <OnlyData>
                  <div>{el.text}</div>
                </OnlyData>
              </Data>
            ))}
          </div>
        </div>
      )}

      {check ? <Login /> : null}
    </div>
  );
}
