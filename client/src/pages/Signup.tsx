import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { signupdata } from '../modules/signup';
import {
  emailmessage,
  passwordmessage,
  nicknamemessage,
} from '../modules/errormessage';
import Login from '../components/Login';
import { openModal } from '../modules/modal';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

const SignUpStyle = styled.div`
  position: relative;
  margin-top: 5%;
  margin-left: 10%;
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
  );
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

  & input {
    width: 300px;
    height: 50px;
    left: 200px;
    font-size: 20px;
    text-align: center;
    background: rgba(196, 196, 196, 0.09);
    border: 1px solid #f7f4ba;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    :hover {
      background-color: #353333;
      color: white;
      transition: 0.5s;
    }
  }
`;
const Error = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f7d7da;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  top: 20px;
  animation: FadeDown 1s;
  font-size: large;
  font-weight: bold;
`;

function Signup() {
  // 회원가입 페이지
  // 닉네임, 이메일 유효성 검사 기능 제공
  // 패스워드 일치, 불일치 여부 제공
  const navigate = useNavigate();
  const check = useSelector((state: RootState) => state.modal.check);
  const signup = useSelector((state: RootState) => state.signup);
  const checkedModal = () => {
    check ? dispatch(openModal()) : null;
  };
  const nicknameerror = useSelector(
    (state: RootState) => state.error.nicknamemessage
  );
  const emailerror = useSelector(
    (state: RootState) => state.error.emailmessage
  );
  const passworderror = useSelector(
    (state: RootState) => state.error.passwordmessage
  );
  const password = useSelector((state: RootState) => state.signup.password);
  const dispatch = useDispatch();
  const handleSignupValue = (key: string, event: any) => {
    dispatch(signupdata({ [key]: event.target.value }));
  };
  // 이메일 유효성 검사
  const emailCheck = () => {
    if (!signup.email) {
      dispatch(emailmessage({ emailmessage: '이메일을 입력해주세요.' }));
    } else {
      dispatch(emailmessage({ emailmessage: '' }));
    }
    return axios
      .get('https://whoseidea.ml:8080/emailduplication', { params: signup })
      .then(data => alert(data.data))
      .catch(() =>
        dispatch(emailmessage({ emailmessage: '이메일이 이미 존재합니다.' }))
      );
  };
  // 닉네임 유효성 검사
  const nicknameCheck = () => {
    if (!signup.nickname) {
      dispatch(nicknamemessage({ nicknamemessage: '닉네임을 입력해주세요.' }));
    } else {
      dispatch(nicknamemessage({ nicknamemessage: '' }));
    }

    return axios
      .get('https://whoseidea.ml:8080/nicknameduplication', { params: signup })
      .then(data => alert(data.data))
      .catch(() =>
        dispatch(
          nicknamemessage({ nicknamemessage: '닉네임이 이미 존재합니다.' })
        )
      );
  };
  // 회원가입 누를 시 빈항목 있으면 에러메세지 출력
  // 회원가입 성공, 실패시 alert메세지 출력
  // 에러발생 시 회원가입실패 메세지 출력
  const handleSignup = () => {
    if (!signup.password || !signup.email || !signup.nickname) {
      dispatch(
        passwordmessage({ passwordmessage: '모든 항목을 입력해주세요.' })
      );
    } else {
      dispatch(passwordmessage({ passwordmessage: '' }));
    }
    return axios
      .post('https://whoseidea.ml:8080/signup', signup)
      .then(data => {
        data.status === 200 ? alert('회원가입 완료') : alert('회원가입 실패');
      })
      .then(() => navigate('/'))
      .catch(() =>
        dispatch(
          passwordmessage({ passwordmessage: '회원가입이 실패했습니다.' })
        )
      );
  };
  // 비밀번호 유효성 검사
  // 두 비밀번호가 서로 일치하는지 여부 검사
  const checkpassword = (event: any) => {
    if (event.target.value !== password) {
      dispatch(
        passwordmessage({ passwordmessage: '비밀번호가 서로 같아야 합니다.' })
      );
    } else {
      dispatch(passwordmessage({ passwordmessage: '' }));
    }
  };
  // Modal창 검사
  useEffect(() => {
    checkedModal();
  }, []);

  return (
    <div>
      {check ? <Login /> : null}
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
                      className="nickname"
                      placeholder="닉네임을 입력하세요"
                      type="text"
                      onChange={event => handleSignupValue('nickname', event)}
                    ></input>
                    <button
                      className="nicknamecheck"
                      type="button"
                      onClick={nicknameCheck}
                    >
                      중복검사
                    </button>
                  </Input4>
                  {nicknameerror !== '' ? (
                    <Error>
                      <div>{nicknameerror}</div>
                    </Error>
                  ) : null}
                </Input1>
              </div>
              <div>
                <Input1>
                  <Input4>
                    <input
                      className="email"
                      placeholder="이메일을 입력하세요"
                      type="text"
                      onChange={event => handleSignupValue('email', event)}
                    ></input>
                    <button
                      className="emailcheck"
                      type="button"
                      onClick={emailCheck}
                    >
                      중복검사
                    </button>
                  </Input4>
                  {emailerror !== '' ? (
                    <Error>
                      <div>{emailerror}</div>
                    </Error>
                  ) : null}
                </Input1>
              </div>
              <Input2>
                <input
                  className="password"
                  placeholder="비밀번호를 입력하세요"
                  type="password"
                  onChange={event => handleSignupValue('password', event)}
                ></input>
              </Input2>
              <Input2>
                <input
                  className="password"
                  placeholder="비밀번호를 입력하세요"
                  type="password"
                  onChange={event => checkpassword(event)}
                ></input>
              </Input2>
              {passworderror !== '' ? (
                <Error>
                  <div>{passworderror}</div>
                </Error>
              ) : null}
              <Input3>
                <button className="submit" type="submit" onClick={handleSignup}>
                  확인
                </button>
              </Input3>
            </Innertext3>
          </Outline2>
        </Left>
      </SignUpStyle>
    </div>
  );
}
export default Signup;
