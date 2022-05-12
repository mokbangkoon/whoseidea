import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
const All = styled.div`
  background-color: #292927;
  height: 600px;
  align-items: center;
  margin-top: 12%;
`;
const Member = styled.div`
  color: #f7f3f3;
  font-weight: bold;
  position: absolute;
  align-items: center;
  top: 238%;
  left: 50%;
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
    top: 235%;
    left: 20%;
  }
`;

const LogoM = styled.div`
  & img {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 220%;
    left: 10%;
  }
`;
const MemberM = styled.div`
  color: white;
  font-weight: bold;
  position: absolute;
  top: 220%;
  left: 70%;
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

const MobileContainer = styled.div`
  position: absolute;
  top: 180%;
`;
export default function Footer() {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  return (
    <div>
      <All>
        <div className="footer-container">
          <div className="footer">footer</div>
          {isPc ? (
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
          ) : (
            <div>
              <LogoM>
                <img src="favicon.ico"></img>
              </LogoM>
              <MemberM>
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
              </MemberM>
            </div>
          )}
        </div>
      </All>
    </div>
  );
}
