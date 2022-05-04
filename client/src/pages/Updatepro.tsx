import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useState } from 'react';
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
const Input1 = styled.div`
  position: absolute;
  top: 30%;
  left: 37%;
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
    top: 40%;
    left: 37%;
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
const Btn2 = styled.div`
  & button {
    position: absolute;
    top: 40%;
    left: 48%;
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
  top: 50%;
  left: 40%;
  animation: FadeDown 1s;
  font-size: large;
  font-weight: bold;
`;

export default function Updatepro() {
  const [userinfo, setuserinfo] = useState({
    nickname: '',
  });
  const check = useSelector((state: RootState) => state.modal.check);
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key: any, e: any) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  const handleUpdatepro = () => {
    const { nickname } = userinfo;
    if (!nickname) {
      return setErrorMessage('모든 항목은 필수입니다');
    }
    setErrorMessage('');

    axios
      .patch('https://localhost:8080/user', userinfo)
      .then(data => setErrorMessage(data.data))
      .catch(data => setErrorMessage('닉네임이 이미 존재합니다.'));
  };

  return (
    <div>
      <Title>
        <div> 정보수정 페이지</div>
      </Title>
      <div>
        <Input1>
          <input
            type="text"
            placeholder="변경할 닉네임"
            onChange={e => handleInputValue('nickname', e)}
          ></input>
        </Input1>
        <Btn>
          <div>
            <button onClick={() => handleUpdatepro()}>확인</button>
          </div>
        </Btn>
        <Btn2>
          <div>
            <Link to="/changepassword">
              <button>비밀번호 변경하기</button>
            </Link>
          </div>
        </Btn2>
        <Error>{errorMessage}</Error>
      </div>

      {check ? <Login /> : null}
    </div>
  );
}
