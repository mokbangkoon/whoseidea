import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  position: absolute;
  color: #000000;
  border-radius: 1rem;
  left: 30%;
  font-family: 'Courier New', Courier, monospace;
  filter: drop-shadow(0px 4px 4px rgba(218, 105, 105, 0.25))
    drop-shadow(4px 4px 4px rgba(56, 76, 141, 0.25))
    drop-shadow(0px 4px 4px rgba(134, 51, 51, 0.25));
  border-radius: 10px;
`;
const SubTitle = styled.div`
  font-weight: bold;
  position: absolute;
  font-size: large;
  left: 10%;
  top: 30%;
  right: 10%;
  width: 80%;
  height: 500px;
  background-color: #99fcff;
`;
const Writer = styled.div`
  position: relative;
`;

const View = styled.div`
  position: relative;
  left: 40%;
  top: 390px;
`;
const Like = styled.div`
  position: relative;
  top: 355px;
  left: 81%;
  background-color: #f584e2;
  width: 150px;
  height: 35px;

  & img {
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
  }
`;
const Comment = styled.div`
  position: relative;
  top: 700px;
`;
const Chat = styled.span`
  position: relative;
  top: 415px;
  & button {
    width: 150px;
    height: 30px;
    border-radius: 1rem;
    background-color: #ffd000;
    border: none;
    font-weight: bold;
    :hover {
      background-color: blue;
      transition: 0.5s;
      color: white;
    }
  }
`;
export default function IdeaView({ handleIdeaView }: any) {
  const { id } = useParams();
  const check = useSelector((state: RootState) => state.modal.check);
  const [isHeart, setisHeart] = useState(false);
  const handleWriter = () => {
    handleIdeaView('글쓴이');
  };
  const handleHeart = () => {
    setisHeart(!isHeart);
  };
  return (
    <div>
      <div>{check ? <Login /> : null}</div>
      <div>{id}번째 글</div>

      <Title>
        <h1>아이디어 제목</h1>
      </Title>
      <SubTitle>
        <div>글쓴이</div>
        <Writer>
          <span>아이디어 내용</span>
        </Writer>
        <Chat>
          <Link to="/chat">
            <button onClick={handleWriter}>쪽지보내기</button>
          </Link>
        </Chat>
        <View>
          <span>조회수</span>
        </View>
        <Like>
          <div>
            <span>좋아요</span>
            {isHeart ? (
              <img src="하트.png" onClick={handleHeart} />
            ) : (
              <img src="빈하트.png" onClick={handleHeart} />
            )}
          </div>
        </Like>
      </SubTitle>

      <Comment>
        <div>댓글창</div>
      </Comment>
    </div>
  );
}
