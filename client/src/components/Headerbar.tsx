import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { openModal } from '../modules/modal';
import { Link } from 'react-router-dom';

const Sidebar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: gray;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
`;
const Button = styled.div`
  border-radius: 1rem;
  :hover {
    background-color: black;
    transition: 0.5s;
    cursor: pointer;
  }
  .link {
    text-decoration: none;
    color: white;
  }
`;

export default function Headerbar({ handleLogout }: any): React.ReactElement {
  const islogincheck = useSelector(
    (state: RootState) => state.islogincheck.islogin
  );
  const check = useSelector((state: RootState) => state.modal.check);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다
  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const handleModal = () => {
    dispatch(openModal());
  };
  const checkedModal = () => {
    check ? dispatch(openModal()) : null;
  };
  return (
    <Sidebar>
      <Button>
        <Link to="/" className="link">
          <div onClick={checkedModal}>Home</div>
        </Link>
      </Button>
      <Button>
        <Link to="/rank" className="link">
          <div onClick={checkedModal}>Ranking</div>
        </Link>
      </Button>
      <Button>
        <Link to="/idealist" className="link">
          <div onClick={checkedModal}>Idea List</div>
        </Link>
      </Button>
      {islogincheck ? (
        <Button>
          <Link to="/mypage" className="link">
            <div onClick={checkedModal}>Mypage</div>
          </Link>
        </Button>
      ) : null}

      <Button>
        {islogincheck ? (
          <div onClick={() => handleLogout()}>Logout</div>
        ) : (
          <div onClick={() => handleModal()}>Login</div>
        )}
      </Button>
    </Sidebar>
  );
}
