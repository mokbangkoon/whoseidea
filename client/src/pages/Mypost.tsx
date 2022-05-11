import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

export default function Mypost({ postData }: any) {
  console.log(postData);
  const check = useSelector((state: RootState) => state.modal.check);
  return (
    <div>
      <Title>
        <div> 내가 쓴 게시글</div>
      </Title>
      {postData === null || postData.data.length === 0 ? null : (
        <div>
          <div>작성자 : {postData.data[0].nickname}</div>
          <div>
            {postData.data.map((el: any) => (
              <Link to={`/ideaview/${el.id}`}>
                <div>{el.caption}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {check ? <Login /> : null}
    </div>
  );
}
