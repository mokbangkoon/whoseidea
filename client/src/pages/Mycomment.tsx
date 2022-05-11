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

export default function Mycomment({ commentData }: any) {
  console.log(commentData);
  const check = useSelector((state: RootState) => state.modal.check);
  return (
    <div>
      <Title>
        <div> 내가 쓴 댓글</div>
      </Title>
      {commentData === null || commentData.data.length === 0 ? null : (
        <div>
          <div>작성자 : {commentData.data[0].nickname}</div>
          <div>
            {commentData.data.map((el: any) => (
              <div>{el.text}</div>
            ))}
          </div>
        </div>
      )}

      {check ? <Login /> : null}
    </div>
  );
}
