import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Member = styled.div`
  color: white;
  font-weight: bold;
  position: absolute;
  top: 270%;
  left: 60%;
  & img {
    position: relative;
    height: 20px;
    top: 5px;
    right: 10px;
  }
  a {
    color: pink;
    text-decoration: none;
  }
`;
const Logo = styled.div`
  & img {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 270%;
    left: 20%;
  }
`;
export default function Footer() {
  return (
    <div>
      <Logo>
        <img src="favicon.ico"></img>
      </Logo>
      <Member>
        <h1>Client</h1>
        <a href="https://github.com/mokbangkoon">
          <img src="깃헙로고.png" />
          <span>차진성</span>
        </a>
        <div>
          <a href="https://github.com/haheon">
            <img src="깃헙로고.png" />
            <span>전하헌</span>
          </a>
        </div>
        <h1>Backend</h1>
        <a href="https://github.com/chunwoolee-work">
          <img src="깃헙로고.png" />
          <span>이춘우</span>
        </a>
        <div>
          <a href="https://github.com/Mizulatte">
            <img src="깃헙로고.png" />
            <span>김주원</span>
          </a>
        </div>
      </Member>
    </div>
  );
}
