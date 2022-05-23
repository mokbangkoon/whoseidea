import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
  left: 40%;
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
const BtnM = styled.div`
  & button {
    position: absolute;
    top: 30%;
    left: 37%;
    border-radius: 1rem;
    width: 40%;
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
const Btn2M = styled.div`
  & button {
    position: absolute;
    top: 35%;
    left: 37%;
    border-radius: 1rem;
    width: 40%;
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
const ErrorM = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f7d7da;
  position: absolute;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  top: 41%;
  left: 40%;
  animation: FadeDown 1s;
  font-size: large;
  font-weight: bold;
`;

export default function Updatepro() {
  // 회원정보 수정 페이지
  // 반응형 웹 구현 : 최소 너비가 768px 아래면 반응형 웹 실행
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  const isgooglelogin = useSelector(
    (state: RootState) => state.isgooglelogin.isgooglelogin
  );
  const [userinfo, setuserinfo] = useState({
    nickname: '',
  });
  const check = useSelector((state: RootState) => state.modal.check);
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key: any, e: any) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  // 닉네임 변경 기능
  const handleUpdatepro = () => {
    const { nickname } = userinfo;
    if (!nickname) {
      return setErrorMessage('모든 항목은 필수입니다');
    }
    setErrorMessage('');
    // 닉네임 유효성 검사 후 존재하면 에러메세지 출력
    axios
      .patch('https://whoseidea.ml:8080/user', userinfo)
      .then(data => setErrorMessage(data.data))
      .catch(() => setErrorMessage('닉네임이 이미 존재합니다.'));
  };

  return (
    <div>
      {check ? <Login /> : null}
      {isPc ? (
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
            {isgooglelogin ? null : (
              <Btn2>
                <div>
                  <Link to="/changepassword">
                    <button>비밀번호 변경하기</button>
                  </Link>
                </div>
              </Btn2>
            )}
            {errorMessage === '' ? null : <Error>{errorMessage}</Error>}
          </div>
        </div>
      ) : (
        <div>
          <TitleM>
            <div> 정보수정 페이지</div>
          </TitleM>
          <div>
            <Input1M>
              <input
                type="text"
                placeholder="변경할 닉네임"
                onChange={e => handleInputValue('nickname', e)}
              ></input>
            </Input1M>
            <BtnM>
              <div>
                <button onClick={() => handleUpdatepro()}>확인</button>
              </div>
            </BtnM>
            {isgooglelogin ? null : (
              <Btn2M>
                <div>
                  <Link to="/changepassword">
                    <button>비밀번호 변경하기</button>
                  </Link>
                </div>
              </Btn2M>
            )}
            {errorMessage === '' ? null : <ErrorM>{errorMessage}</ErrorM>}
          </div>
        </div>
      )}
    </div>
  );
}
