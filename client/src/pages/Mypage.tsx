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
  left: 20%;
  font-family: 'Courier New', Courier, monospace;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;
const Right = styled.div`
  position: absolute;
  left: 6%;
  top: 8%;
  bottom: 0%;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url(.jpg);
`;
const Left = styled.div`
  position: absolute;
  width: 600px;
  height: 800px;
  right: 10.8%;
  top: 8%;
  background: rgba(80, 181, 33, 0.08);
`;

const Img = styled.div`
  font-weight: bold;
  font-size: xx-large;
  text-align: center;
  color: #201f1f;
  & img {
    height: 100vh;
    width: 100vh;
  }
`;
const UserContainer = styled.div`
  font-weight: bold;
  position: absolute;
  top: 50%;
  width: 30vh;
  margin: 10px;
  padding: 10px;
  font-size: xx-large;
`;

const Line = styled.div`
  background-color: white;
`;

const Button = styled.div`
  border-radius: 1rem;
  :hover {
    background-color: #f1bdbd;
    transition: 0.5s;
    cursor: pointer;
  }
  .text {
    text-decoration: none;
    color: #131212;
    font-weight: bold;
  }
`;

const UserImage = styled.div`
  position: absolute;
  top: 30%;
  width: 30vh;
`;

export default function Mypage() {
  const check = useSelector((state: RootState) => state.modal.check);
  const login = useSelector((state: RootState) => state.login);
  const [nickname, setnickname] = useState('');
  const [profile, setprofile] = useState('');

  useEffect(() => {
    axios.get('https://localhost:8080/auth').then(data => {
      setnickname(data.data.nickname);
      setprofile(data.data.profile);
    });
  }, []);
  return (
    <div>
      <Left>
        <Img>
          <div>당신의 아이디어가 세상을 바꿉니다</div>

          <img src="mypage.png" />
        </Img>
      </Left>
      {check ? <Login /> : null}
      <Right>
        <Title>
          <div>Mypage</div>
        </Title>
        <UserImage>
          <img src={profile} />
        </UserImage>
        <UserContainer>
          <Line>
            <div></div>
          </Line>
          <div>회원 닉네임 </div>
          <div>{nickname}</div>
          <Line>
            <div>ㅤ</div>
          </Line>
          <Button>
            <div>
              <Link to="/updatepro" className="text ">
                <div>회원정보 수정</div>
              </Link>
            </div>
          </Button>
          <Line>
            <div>ㅤ</div>
          </Line>
          <Button>
            <div>
              <Link to="/signout" className="text ">
                <div>회원 탈퇴</div>
              </Link>
            </div>
          </Button>
          <Line>
            <div>ㅤ</div>
          </Line>
          <Button>
            <div>
              <Link to="/mypost" className="text ">
                <div>내가 쓴 게시글 보기</div>
              </Link>
            </div>
          </Button>
        </UserContainer>
      </Right>
    </div>
  );
}
