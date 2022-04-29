import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import axios from 'axios';

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

export default function Signout() {
  const check = useSelector((state: RootState) => state.modal.check);
  const handleSignout = () => {
    // axios.delete('https://localhost:8080/signout' , data)
  };

  return (
    <div>
      <Title>
        <div> 회원탈퇴 페이지</div>
      </Title>
      <div>
        <Input1>
          <input type="text" placeholder="현재 아이디"></input>
        </Input1>
        <Input2>
          <input type="password" placeholder="현재 비밀번호"></input>
        </Input2>

        <Btn>
          <div>
            <button onClick={() => handleSignout()}>확인</button>
          </div>
        </Btn>
      </div>

      {check ? <Login /> : null}
    </div>
  );
}
