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
  left: 40%;
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
const Menu = styled.div`
  position: relative;
  top: -61%;
`;
const Writer = styled.div`
  position: relative;
  & img {
    width: 300px;
    height: 300px;
    position: relative;
    left: 900px;
  }
  & span {
    position: relative;
    top: -250px;
  }
`;

const View = styled.div`
  position: relative;
  left: 40%;
  top: 390px;
  background-color: green;
  width: 100px;
`;
const Like = styled.div`
  position: relative;
  top: 355px;
  left: 81%;
  background-color: #f89c51;
  width: 80px;
  height: 35px;

  & img {
    width: 40px;
    height: 40px;
    position: relative;
    left: 100px;
    top: -30px;
    cursor: pointer;
  }
`;
const Comment = styled.div`
  position: relative;
  top: 700px;
  left: 400px;
  & input {
    width: 500px;
    height: 40px;
  }
  & button {
    width: 100px;
    height: 40px;
    border-radius: 1rem;
    :hover {
      background-color: blue;
      transition: 0.5s;
      cursor: pointer;
      color: white;
    }
    border: none;
    background-color: #ff00d4;
    color: #000000;
    font-weight: bold;
  }
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
export default function IdeaView({
  handleIdeaView,
  postDatas,
  usernickname,
}: any) {
  const { id } = useParams();
  const check = useSelector((state: RootState) => state.modal.check);
  const [isHeart, setisHeart] = useState(false);
  const [view, setView] = useState(0);
  const [likes, setLikes] = useState(0);
  const [userinfo, setuserinfo] = useState({
    postId: '',
    context: '',
  });

  useEffect(() => {
    axios
      .get(`https://localhost:8080/post/view?postId=${postDatas.id}`)
      .then(data => {
        setView(data.data.data.view);
        setLikes(data.data.data.likes);
        setisHeart(data.data.Boolean);
        console.log(data);
      });

    axios
      .get(`https://localhost:8080/comment?${postDatas.id}`)
      .then(data => console.log(data));
  }, []);

  const handleWriter = () => {
    handleIdeaView(usernickname);
  };
  const handleHeart = () => {
    setisHeart(!isHeart);
    axios
      .patch('https://localhost:8080/like', { postId: postDatas.id })
      .then(data => setLikes(data.data.likes));
  };
  const handleComment = () => {
    axios.post('https://localhost:8080/comment');
  };
  const handleInputValue = (key: any, e: any) => {
    setuserinfo({ ...userinfo, postId: postDatas.id, [key]: e.target.value });
  };
  return (
    <div>
      <div>{check ? <Login /> : null}</div>
      <div>{id}번째 아이디어</div>

      <Title>
        <h1>{postDatas.caption}</h1>
      </Title>
      <SubTitle>
        <div>글쓴이 : {postDatas.nickname}</div>
        <Writer>
          <div>
            <img src={postDatas.url} />
          </div>
          <span>{postDatas.context}</span>
        </Writer>
        <Menu>
          <Chat>
            <Link to="/chat">
              <button onClick={handleWriter}>쪽지보내기</button>
            </Link>
          </Chat>
          <View>
            <span>조회수 : {view}</span>
          </View>
          <Like>
            <div>
              <span>좋아요 : {likes}</span>
              {isHeart ? (
                <img src="/images/하트.png" onClick={handleHeart} />
              ) : (
                <img src="/images/빈하트.png" onClick={handleHeart} />
              )}
            </div>
          </Like>
        </Menu>
      </SubTitle>

      <Comment>
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          onChange={e => handleInputValue('context', e)}
        ></input>
        <button onClick={handleComment}>댓글달기</button>
      </Comment>
    </div>
  );
}
