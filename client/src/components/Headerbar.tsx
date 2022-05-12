import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { openModal } from '../modules/modal';
import { Link } from 'react-router-dom';
import Googlelogout from './Googlelogout';

const Sidebar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffff;
  color: black;
  font-weight: semi-bold;
  font-size: 40px;
  text-decoration: none;
  align-items: center;
`;
const Button = styled.div`
  .home {
    margin-right: 40%;
    text-align: left;
  }
  border-radius: 1rem;
  :hover {
    background-color: #ffffe0;
    color: black;
    transition: 0.5s;
    cursor: pointer;
  }
  .link {
    text-decoration: none;
    color: black;
  }
`;

export default function Headerbar({ handleLogout }: any): React.ReactElement {
  const islogincheck = useSelector(
    (state: RootState) => state.islogincheck.islogin
  );
  const isgooglelogin = useSelector(
    (state: RootState) => state.isgooglelogin.isgooglelogin
  );

  const check = useSelector((state: RootState) => state.modal.check);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다
  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const handleModal = () => {
    dispatch(openModal());
  };
  const checkedModal = () => {
    check ? dispatch(openModal()) : null;
    isgooglelogin || islogincheck ? null : alert('로그인을 먼저 해주세요');
  };
  return (
    <Sidebar>
      <Button>
        <Link to="/" className="link">
          <div className="home" onClick={checkedModal}>
            Home
          </div>
        </Link>
      </Button>
      <Button>
        {isgooglelogin || islogincheck ? (
          <Link to="/rank" className="link">
            <div onClick={checkedModal}>Ranking</div>
          </Link>
        ) : (
          <Link to="/" className="link">
            <div onClick={checkedModal}>Ranking</div>
          </Link>
        )}
      </Button>
      <Button>
        {isgooglelogin || islogincheck ? (
          <Link to="/idealist" className="link">
            <div onClick={checkedModal}>Idea List</div>
          </Link>
        ) : (
          <Link to="/" className="link">
            <div onClick={checkedModal}>Idea List</div>
          </Link>
        )}
      </Button>
      {islogincheck ? (
        <Button>
          <Link to="/mypage" className="link">
            <div onClick={checkedModal}>Mypage</div>
          </Link>
        </Button>
      ) : null}

      <Button>
        {isgooglelogin ? (
          <Googlelogout />
        ) : islogincheck ? (
          <div>
            <div onClick={() => handleLogout()}>Logout</div>
          </div>
        ) : (
          <div onClick={() => handleModal()}>Login</div>
        )}
      </Button>
    </Sidebar>
  );
}
