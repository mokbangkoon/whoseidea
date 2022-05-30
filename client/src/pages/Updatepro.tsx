import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

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
  left: 65%;
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
  width: 300px;
  height: 72px;
  left: 250px;
  top: 200px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;
const Input1 = styled.div`
  position: absolute;
  top: 40%;
  left: 120px;
  & input {
    width: 500px;
    height: 50px;
    top: 100px;
    left: 100px;
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
    margin-top: 20px;
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
const Btn2 = styled.div`
  & button {
    position: absolute;
    top: 60%;
    left: 28%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    border-radius: 100px;
    width: 80px;
    height: 40px;
    margin-top: 20px;
    border-radius: 1px solid black;
    background: #eceef3;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    width: 300px;
    height: 50px;
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
        <All>
          <div>
            <Headertext>
              <h1>Whose idea?</h1>
            </Headertext>
            <Title>
              <div> 정보 수정 페이지</div>
            </Title>
            <Body>
              <Bodytext>
                <h1>닉네임 변경</h1>
              </Bodytext>
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
            </Body>
          </div>
        </All>
      ) : (
        <All>
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
        </All>
      )}
    </div>
  );
}
