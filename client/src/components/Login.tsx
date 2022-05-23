import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { openModal } from '../modules/modal';
import { Link } from 'react-router-dom';
import { logindata } from '../modules/login';
import { errormessage } from '../modules/errormessage';
import Googlelogin from './Googlelogin';

axios.defaults.withCredentials = true;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 20rem;
  height: 60%;
  padding: 16px;
  background: rgb(25, 31, 44);
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  & input {
    width: 70%;
    height: 70%;
    font-size: 20px;
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
const Google = styled.div`
  background-color: #f1eeee;
  color: #504e4e;
  height: 50px;
  cursor: pointer;
  & img {
    width: 100%;
    height: 50px;
  }
`;
const Signup = styled.div`
  background-color: #000000;
  color: #ffffff;
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
`;

export default function Login({
  handleResponseSuccess,
}: any): React.ReactElement {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  const login = useSelector((state: RootState) => state.login);
  const error = useSelector((state: RootState) => state.error.errormessage);
  const dispatch = useDispatch();
  // key와 event가 들어오면 로그인데이터에 객체로 집어넣기
  const handleInputValue = (key: string, event: any) => {
    dispatch(logindata({ [key]: event.target.value }));
  };
  // 에러메세지 핸들링하는 함수
  const handleErrorMessage = (message: string) => {
    dispatch(errormessage({ errormessage: message }));
  };
  // 로그인 버튼 클릭시 실행되는 함수
  const handleLogin = () => {
    if (!login.email || !login.password) {
      handleErrorMessage('아이디와 비밀번호를 다시 입력해주세요.');
    } else {
      handleErrorMessage('');
    }
    // axios로 객체로 만든 로그인데이터를 보내서 에러핸들링까지 하는 작업
    return axios
      .post('https://whoseidea.ml:8080/login', login)
      .then(data => {
        handleErrorMessage(data.data.message);
        handleResponseSuccess();
      })
      .then(() => {
        handleModal();
        handleErrorMessage('');
      })
      .catch(() => handleErrorMessage('잘못된 사용자 정보입니다.'));
  };
  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const handleModal = () => {
    dispatch(openModal());
  };
  return (
    <ModalBackground>
      <ModalContainer>
        <div>
          <input
            className="email"
            type="text"
            placeholder="이메일을 입력하세요"
            onChange={event => handleInputValue('email', event)}
          ></input>
          <div>
            <input
              className="password"
              placeholder="비밀번호를 입력하세요"
              type="password"
              onChange={event => handleInputValue('password', event)}
            ></input>
          </div>
          <button onClick={handleLogin}>로그인</button>
          {error !== '' ? (
            <Error>
              <div>{error}</div>
            </Error>
          ) : null}
          <Google>
            <Googlelogin />
          </Google>

          <Signup>
            <div>
              아직 회원이 아니신가요?
              <div>
                <Link to="/signup">
                  <button>회원가입</button>
                </Link>
              </div>
            </div>
          </Signup>
          <div>
            <button
              onClick={() => {
                handleModal();
                handleErrorMessage('');
              }}
            >
              닫기
            </button>
          </div>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
}
