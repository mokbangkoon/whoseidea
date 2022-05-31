import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const All = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 18.75%;
  right: 18.75%;
  top: 9.96%;
  bottom: 21.68%;
  width: 900px;
  height: 1150px;
  top: 204px;
  left: 270px;
  background: rgba(13, 52, 112, 0.8);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
`;
const Title = styled.div`
  position: absolute;
  width: 500px;
  height: 72px;
  left: 50%;
  top: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const Body = styled.div`
  position: absolute;
  width: 750px;
  height: 900px;
  left: 80px;
  right: 20px;
  top: 150px;
  background: #fafafa;
  border-radius: 55px;
`;
const Headertext = styled.div`
  position: absolute;
  width: 500px;
  height: 72px;
  left: 50px;
  top: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const Bodytext = styled.div`
  position: absolute;
  width: 400px;
  height: 72px;
  left: 240px;
  top: 200px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;
const Input1 = styled.div`
  position: absolute;
  top: 38%;
  left: 18%;
  & input {
    width: 500px;
    height: 50px;
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
  top: 48%;
  left: 18%;
  & input {
    width: 500px;
    height: 50px;
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
    top: 60%;
    left: 35%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    border-radius: 100px;
    width: 80px;
    height: 40px;
    margin-top: 30px;
    border-radius: 1px solid black;
    background: #eceef3;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    width: 200px;
    height: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 20px;
    /* identical to box height, or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    color: #5d449d;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 1px solid black;
    text-decoration: none;
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
  top: 57%;
  left: 35%;
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
      <All>
        <Headertext>
          <h1>Whose idea?</h1>
        </Headertext>
        <Title>
          <div> 비밀번호 변경 페이지</div>
        </Title>
        <Body>
          <Bodytext>
            <h1>비밀번호 변경</h1>
          </Bodytext>
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
        </Body>
      </All>
    </div>
  );
}
