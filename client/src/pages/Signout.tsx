import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { islogin } from '../modules/islogin';
import { useMediaQuery } from 'react-responsive';

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
    background-color: #e5f056;
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

const TitleM = styled.div`
  font-weight: bold;
  font-size: 60px;
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
const Input1M = styled.div`
  position: absolute;
  top: 20%;
  left: 32%;
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
const Input2M = styled.div`
  position: absolute;
  top: 30%;
  left: 32%;
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
const BtnM = styled.div`
  & button {
    position: absolute;
    top: 40%;
    left: 33%;
    border-radius: 1rem;
    width: 40%;
    height: 40px;
    border: none;
    background-color: #e5f056;
    font-weight: bold;
    :hover {
      background-color: #353333;
      color: white;
      transition: 0.5s;
    }
  }
`;
const ErrorM = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f7d7da;
  position: absolute;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  top: 45%;
  left: 38%;
  animation: FadeDown 1s;
  font-size: large;
  font-weight: bold;
`;

export default function Signout() {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userinfo, setuserinfo] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const check = useSelector((state: RootState) => state.modal.check);
  const handleInputValue = (key: any, e: any) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignout = () => {
    const { email, password } = userinfo;
    if (!email || !password) {
      return setErrorMessage('모든 항목은 필수입니다');
    }
    setErrorMessage('');
    const params = { data: userinfo };

    axios
      .delete('https://whoseidea.ml:8080/signout', params)
      .then(data => alert(data.data))
      .then(data => navigate('/'))
      .then(data => dispatch(islogin(false)))
      .catch(data => setErrorMessage('잘못된 정보를 입력하셨습니다.'));
  };

  return (
    <div>
      {check ? <Login /> : null}
      {isPc ? (
        <div>
          <Title>
            <div> 회원탈퇴 페이지</div>
          </Title>
          <div>
            <Input1>
              <input
                type="text"
                placeholder="현재 아이디"
                onChange={e => handleInputValue('email', e)}
              ></input>
            </Input1>
            <Input2>
              <input
                type="password"
                placeholder="현재 비밀번호"
                onChange={e => handleInputValue('password', e)}
              ></input>
            </Input2>

            <Btn>
              <div>
                <button onClick={() => handleSignout()}>확인</button>
              </div>
            </Btn>
            <Error>{errorMessage}</Error>
          </div>
        </div>
      ) : (
        <div>
          <TitleM>
            <div> 회원탈퇴 페이지</div>
          </TitleM>
          <div>
            <Input1M>
              <input
                type="text"
                placeholder="현재 아이디"
                onChange={e => handleInputValue('email', e)}
              ></input>
            </Input1M>
            <Input2M>
              <input
                type="password"
                placeholder="현재 비밀번호"
                onChange={e => handleInputValue('password', e)}
              ></input>
            </Input2M>

            <BtnM>
              <div>
                <button onClick={() => handleSignout()}>확인</button>
              </div>
            </BtnM>
            <ErrorM>{errorMessage}</ErrorM>
          </div>
        </div>
      )}
    </div>
  );
}
