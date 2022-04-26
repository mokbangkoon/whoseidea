/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import useInput from '../pages/useInput';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { userInfo } from 'os';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

function Signup() {
  const [email, setEamil] = useInput('');
  const [emailcheck] = useState<{ email: string }>({
    email: '',
  });
  const [password, setPassword] = useState({ password: '' });
  const [passwordcheck] = useInput('');
  // eslint-disable-next-line no-empty-pattern
  const [] = useState<{ email: string }>();
  // eslint-disable-next-line no-empty-pattern
  const [] = useState<{ password: string }>();
  const [missmatcherror, setMissMatchError] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signuperror, setSignupError] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signupsuccess, setSignUpSuccess] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onChangePassword = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      setPassword(e.target.value);
      setMissMatchError(e.targe.value !== passwordcheck);
    },
    [passwordcheck]
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onChangeEmail = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      setEamil(e.target.value);
      setMissMatchError(e.targe.value !== passwordcheck);
    },
    [emailcheck]
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSignUp = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      e.preventDefault();
      console.log(email, password, emailcheck, passwordcheck);
      if (!missmatcherror) {
        console.log('서버로 회원 가입하기');
        setSignupError('');
        setSignUpSuccess(false);

        axios
          .post('api/users', {
            email,
            password,
          })
          .then((response: any) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error: any) => {
            console.log(error.response);
            setSignupError(error.reponse.data);
          });
      }
    },
    [passwordcheck, emailcheck]
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const SignUpStyle = styled.div`
    background-color: #ffffff;
    position: relative;
    width: 1440px;
    height: 1024px;
  `;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Left = styled.div`
    position: absolute;
    width: 726px;
    height: 1033px;
    left: 723px;
    top: -8px;
    background: rgba(80, 181, 33, 0.08);
  `;
  const Logo = styled.div`
    position: absolute;
    width: 200px;
    height: 181px;
    left: 1013px;
    top: 27px;
    background: url('../img/whose로고.png');
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
  `;
  const Signup = styled.div`
    position: absolute;
    width: 153px;
    height: 50px;
    left: 1047px;
    top: 246px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  `;
  const Email = styled.div`
    position: absolute;
    width: 400px;
    height: 50px;
    left: 868px;
    top: 336px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  `;
  const Check = styled.div`
    position: absolute;
    width: 85px;
    height: 50px;
    left: 1278px;
    top: 332px;
    background: rgba(196, 196, 196, 0.09);
    border: 1px solid rgba(240, 231, 21, 0.57);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  `;
  const Password1 = styled.div`
    position: absolute;
    width: 489px;
    height: 50px;
    left: 865px;
    top: 422px;
    background: rgba(196, 196, 196, 0.09);
    border: 1px solid #f7f4ba;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  `;
  const Okay = styled.div`
    position: absolute;
    width: 227px;
    height: 44px;
    left: 1002px;
    top: 623px;
    background: linear-gradient(
      269.14deg,
      rgba(249, 141, 81, 0.87) 8.29%,
      rgba(240, 218, 21, 0.3132) 99.69%
    );
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  `;
  const Box1 = styled.div`
    position: absolute;
    width: 267px;
    height: 51px;
    left: 812px;
    top: 780px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  `;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Login = styled.div`
    position: absolute;
    width: 85px;
    height: 44px;
    left: 1046px;
    top: 784px;
    background: linear-gradient(
      269.14deg,
      rgba(249, 212, 81, 0.87) 8.29%,
      rgba(214, 106, 106, 0.3915) 99.69%
    );
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
  `;
  const Right = styled.div`
    position: absolute;
    left: 0%;
    right: 49.38%;
    top: -0.29%;
    bottom: 0%;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      url(.jpg);
  `;
  const Outline = styled.div`
    position: absolute;
    width: 580px;
    height: 600px;
    left: 93px;
    top: 245px;
    opacity: 0.8;
    border: 16px solid #f7f4ba;
    box-sizing: border-box;
  `;
  const Frame1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    position: absolute;
    width: 494.58px;
    height: 295.27px;
    left: 135.18px;
    top: 373.65px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `;
  const Fram1text = styled.div`
    position: static;
    width: 429px;
    height: 240px;
    left: 10px;
    top: 10px;

    font-family: 'Quando';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 120px;
    /* or 150% */
    text-align: center;
    letter-spacing: 0.5px;
    /* white */
    color: #f7f4ba;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
  `;
  const Frame2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    position: absolute;
    width: 542.04px;
    height: 126.55px;
    left: 111.98px;
    top: 677.36px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `;
  const Frame2text = styled.div`
    position: static;
    width: 494px;
    height: 100px;
    left: 10px;
    top: 10px;

    font-family: 'Quando';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 100px;
    /* identical to box height, or 357% */

    text-align: center;
    letter-spacing: 0.5px;

    /* white */

    color: #f7f4ba;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 20px;
  `;

  return (
    <div>
      <SignUpStyle>
        <div>
          <Left></Left>
          <div></div>
          <Logo></Logo>
          <div>
            <Signup>
              <div>회원가입</div>
            </Signup>
            <Email>
              <div>이메일을 입력해 주세요</div>
            </Email>
            <div>
              <Check>
                <div>중복검사</div>
              </Check>
              <Password1>
                <div> 비밀번호를 입력하세요</div>
              </Password1>
              <Password1>
                <div> 비밀번호를 입력하세요</div>
              </Password1>
              <div></div>
              <Okay>
                <div> 확인 </div>
              </Okay>
              <div></div>
              <Box1>
                <div>이미 회원이신가요?</div>
              </Box1>
              <div></div>
              <Login>
                <div>Login</div>
              </Login>
              <div></div>
              <Right></Right>
              <div></div>
              <Outline></Outline>
              <div></div>
              <Frame1></Frame1>
              <div></div>
              <Fram1text></Fram1text>
              <div>Whose idea?</div>
              <Frame2></Frame2>
              <div></div>
                <Frame2text>
                    <div>share your idea with world</div>
                </Frame2text>
                <div></div>
            </div>
          </div>
        </div>
      </SignUpStyle>
    </div>
  );
}
export default Signup;
