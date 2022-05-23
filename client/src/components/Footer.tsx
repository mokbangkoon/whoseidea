import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
const All = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #f0ffff;
  height: 450px;
  align-items: center;
  margin-top: 12%;
`;
const Member = styled.div`
  color: #6d0202;
  font-weight: bold;
  position: absolute;
  top: 10%;
  left: 60%;
  & img {
    position: relative;
    height: 20px;
    top: 5px;
    right: 10px;
  }
  a {
    color: #1d1c1c;
    text-decoration: none;
  }
`;
const Logo = styled.div`
  & img {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 10%;
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
  color: #eb6666;
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
    color: #f37c90;
    text-decoration: none;
  }
`;

export default function Footer() {
  // 반응형 웹 부분 : 최소 너비가 768px아래로 가면 반응형웹 시작.
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  return (
    <div>
      <All>
        {/* isPc가 true이면 데스크톱화면 , false이면 모바일 화면 */}
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
      </All>
    </div>
  );
}
