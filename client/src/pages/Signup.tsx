import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { Link } from 'react-router-dom';
import { signdata } from '../modules/signup';

axios.defaults.withCredentials = true;

function Signup() {
  const signup = useSelector((state: RootState) => state.sign);
  const dispatch = useDispatch();
  const handleInputValue = (key: string, event: any) => {
    dispatch(signdata({ [key]: event.target.value }));
  };
  const emailCheck = () => {
    if(signup.email){
      console.log('사용할수 있는 이메일입니다.');
    
    } 
  const handleSignup = () => {
    
    if (!signup.email || !signup.password) {
      console.log('이메일과 비밀번호를 입력해주세요');
    } else {
      console.log('확인');
    }
    return axios.post('api/users', signup);
  };

  const SignUpStyle = styled.div`
    position: relative;
    margin-top: 5%;
    margin-left: 30%;
    width: 1440px;
    height: 1024px;
    background: #ffffff;
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
  const Outline = styled.div`
    position: absolute;
    width: 480px;
    height: 500px;
    left: 133px;
    top: 245px;

    opacity: 0.8;

    border: 16px solid #f7f4ba;
    box-sizing: border-box;
  `;
  const Outline2 = styled.div`
    position: absolute;
    width: 480px;
    height: 530px;
    left: 63px;
    top: 140px;

    opacity: 0.8;

    border: 16px solid #ffffff;
    box-sizing: border-box;
  `;
  const Innertext = styled.div`
    font-size: 120px;
    color: #f7f4ba;
    text-align: center;
    margin-top: 10%;
    @font-face {
      font-family: 'LeferiPoint-BlackA';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackA.woff')
        format('woff');
      font-weight: normal;
      font-style: normal;
    }
  `;
  const Innertext2 = styled.div`
    font-size: 35px;
    outline-color: #242423;
    color: #f7f4ba;
    text-align: center;
    margin-top: 15%;
  `;

  const Innertext3 = styled.div`
    font-size: 40px;
    color: #000000;
    text-align: center;
    margin-top: 8%;
    @font-face {
      font-family: 'LeferiPoint-BlackA';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackA.woff')
        format('woff');
      font-weight: normal;
      font-style: normal;
    }
  `;
  const Logo = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    left: 40%;
    top: 37px;
    background: url(whose로고.png);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
  `;

  const Input1 = styled.div`
    margin-top: 5%;
    margin-right: 20%;

    & input {
      width: 300px;
      height: 50px;
      left: 200px;
      font-size: 20px;
      text-align: center;
      background: rgba(196, 196, 196, 0.09);
      border: 1px solid #f7f4ba;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }
  `;
  const Input2 = styled.div`
    margin-top: 5%;
    & input {
      width: 300px;
      height: 50px;
      left: 200px;
      font-size: 20px;
      text-align: center;
      background: rgba(196, 196, 196, 0.09);
      border: 1px solid #f7f4ba;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }
    & button {
      border-radius: 1rem;
      width: 30%;
      height: 40px;
      border: none;
      background-color: #cbe8f0;
      font-weight: bold;
      :hover {
        background-color: #353333;
        color: white;
        transition: 0.5s;
      }
    }
  `;
  const Input3 = styled.div`
    margin-top: 5%;
    & input {
      width: 300px;
      height: 50px;
      left: 200px;
      font-size: 20px;
      text-align: center;
      background: rgba(196, 196, 196, 0.09);
      border: 1px solid #f7f4ba;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }
    & button {
      width: 180px;
      height: 50px;
      left: 200px;
      font-size: 20px;
      text-align: center;
      background: rgba(196, 196, 196, 0.09);
      border: 1px solid #f7f4ba;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      :hover {
        background-color: #353333;
        color: white;
        transition: 0.5s;
      }
    }
  `;
  const Input4 = styled.div`
    margin-top: 5%;
    margin-right: 10%;

    & button {
      width: 100px;
      height: 50px;
      right: 200px;
      font-size: 20px;
      text-align: center;
      background: rgba(196, 196, 196, 0.09);
      border: 1px solid #f7f4ba;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;

      :hover {
        background-color: #353333;
        color: white;
        transition: 0.5s;
      }
    }
  `;
  const Text1 = styled.div`
    font-size: 20px;
    margin-top: 10%;
    margin-right: 20%;
  `;

  return (
    <SignUpStyle>
      <Right>
        <img src="idea.png" />
      </Right>
      <Outline>
        <Innertext>Whose idea?</Innertext>
        <Innertext2>share your ideas with world</Innertext2>
      </Outline>
      <Left>
        <Logo>
          <img src="whose로고.png" />
        </Logo>
        <Outline2>
          <Innertext3>
            회 원 가 입
            <div>
              <Input1>
                <Input4>
                  <input
                    className="email"
                    placeholder="이메일을 입력하세요"
                    type="password"
                    onChange={event => handleInputValue('email', event)}
                  ></input>
                </Input4>
              </Input1>
            </div>
            <Input2>
              <input
                className="password"
                placeholder="비밀번호를 입력하세요"
                type="password"
                onChange={event => handleInputValue('password', event)}
              ></input>
            </Input2>
            <Input2>
              <input
                className="password"
                placeholder="비밀번호를 입력하세요"
                type="password"
                onChange={event => handleInputValue('password', event)}
              ></input>
            </Input2>
            <Input3>
              <Link to="/">
                <button className="submit" type="submit" onClick={handleSignup}>
                >확인</button>
              </Link>
            </Input3>
            <Text1>
              <Input3>이미 회원이신가요?</Input3>
            </Text1>
          </Innertext3>
        </Outline2>
      </Left>
    </SignUpStyle>
  );
}
export default Signup;
