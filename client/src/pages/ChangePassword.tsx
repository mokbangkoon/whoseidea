import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

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
const Input1 = styled.div`
  position: absolute;
  top: 30%;
  left: 35%;
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
  position: absolute;
  top: 40%;
  left: 35%;
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

const Btn = styled.div`
  & button {
    position: absolute;
    top: 50%;
    left: 40%;
    border-radius: 1rem;
    width: 10%;
    height: 40px;
    border: none;
    background-color: #fae467;
    font-weight: bold;
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
  position: absolute;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  top: 60%;
  left: 38%;
  animation: FadeDown 1s;
  font-size: large;
  font-weight: bold;
`;

export default function Updatepro() {
  // 비밀번호 변경 페이지
  // 비밀번호 변경기능을 제공한다.
  const [userinfo, setuserinfo] = useState({
    oldPassword: '',
    newPassword: '',
  });
  const check = useSelector((state: RootState) => state.modal.check);
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key: any, e: any) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  // 패스워드 변경을 클릭 시 실행되는 함수
  // 유효성 검사 및 모든항목을 입력했는지 여부를 판단 후 서버에 userinfo를 보낸다.
  // 서버에서 주는 에러메세지를 출력한다.
  const handleUpdatepassword = () => {
    const { oldPassword, newPassword } = userinfo;
    if (!oldPassword || !newPassword) {
      return setErrorMessage('모든 항목은 필수입니다');
    }
    setErrorMessage('');

    axios
      .patch('https://whoseidea.ml:8080/changepassword', userinfo)
      .then(data => setErrorMessage(data.data))
      .catch(() => setErrorMessage('비밀번호를 올바르게 입력해주세요.'));
  };

  return (
    <div>
      <Title>
        <div> 비밀번호 변경 페이지</div>
      </Title>
      <div>
        <Input1>
          <input
            type="password"
            placeholder="현재 비밀번호"
            onChange={e => handleInputValue('oldPassword', e)}
          ></input>
        </Input1>
        <Input2>
          <input
            type="password"
            placeholder="변경할 비밀번호"
            onChange={e => handleInputValue('newPassword', e)}
          ></input>
        </Input2>
        <Btn>
          <div>
            <button onClick={() => handleUpdatepassword()}>확인</button>
          </div>
        </Btn>
        {/* 에러메세지가 빈문자열이라면 아무것도 출력하지 않는다. */}
        {errorMessage === '' ? null : <Error>{errorMessage}</Error>}
      </div>

      {check ? <Login /> : null}
    </div>
  );
}
