import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = styled.div`
  position: absolute;
  width: 900px;
  height: 300px;
  left: 270px;
  top: 190px;
  background: url(header.png), #ffffff;
  border-radius: 20px;
`;
const Title = styled.div`
  position: absolute;
  width: 342px;
  height: 60px;
  left: 745px;
  top: 581px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 24px;
  /* or 80% */

  display: flex;
  align-items: center;

  color: #000000;
`;
const SubTitle = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 900px;
  height: 1200px;
  left: 270px;
  top: 520px;
  background: rgba(239, 240, 243, 0.6);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
`;
const ContentNickname = styled.div`
  position: absolute;
  width: 118px;
  height: 32px;
  left: 947px;
  top: 662px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;
const Menu = styled.div`
  position: relative;
  top: -61%;
`;
const Writer = styled.div`
  & img {
    box-sizing: border-box;
    position: absolute;
    width: 353px;
    height: 606px;
    left: 354px;
    top: 564px;
    background: url(.jpg), #ffffff;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
  & span {
    box-sizing: border-box;
    position: absolute;
    width: 350px;
    height: 606px;
    left: 736px;
    top: 564px;
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
`;

const View = styled.div`
  position: absolute;
  left: 40%;
  top: 750px;
  background-color: green;
  width: 100px;
`;
const Like = styled.div`
  position: absolute;
  top: 750px;
  left: 79%;
  background-color: #f89c51;
  width: 80px;
  height: 30px;

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
  position: absolute;
  top: 750px;
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
const Context = styled.span`
  position: absolute;
  width: 330px;
  height: 381px;
  left: 749px;
  top: 691px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */

  display: flex;
  align-items: center;

  color: #000000;
`;

const CommentWriter = styled.div`
  color: red;
  font-weight: bold;
  font-size: 30px;
`;
const Commentdata = styled.div`
  color: #0f0f0f;
  font-size: 20px;
`;
const Commentbox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 725px;
  height: 284px;
  left: 356px;
  top: 1368px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export default function IdeaView({ handleIdeaView, usernickname }: any) {
  const { id } = useParams();
  const check = useSelector((state: RootState) => state.modal.check);
  const [isHeart, setisHeart] = useState(false);
  const [view, setView] = useState(0);
  const [likes, setLikes] = useState(0);
  const [caption, setCaption] = useState('');
  const [context, setContext] = useState('');
  const [url, setUrl] = useState('');
  const [nickname, setNickname] = useState('');
  const [userinfo, setuserinfo] = useState({
    postId: 0,
    context: '',
  });
  const [allComment, setallComment] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`https://whoseidea.ml:8080/post/view?postId=${id}`).then(data => {
      setView(data.data.data[0].view);
      setLikes(data.data.data[0].likes);
      setisHeart(data.data.Boolean);
      setCaption(data.data.data[0].caption);
      setContext(data.data.data[0].context);
      setNickname(data.data.data[0].nickname);
    });

    axios
      .get(`https://whoseidea.ml:8080/comment?postId=${id}`)
      .then(data => setallComment(data.data));

    axios
      .get(`https://whoseidea.ml:8080/post/image?postId=${id}`)
      .then(data => setUrl(data.data[0]));
  }, []);

  const handleWriter = () => {
    handleIdeaView(usernickname);
  };
  const handleHeart = () => {
    setisHeart(!isHeart);
    axios
      .patch('https://whoseidea.ml:8080/like', { postId: Number(id) })
      .then(data => setLikes(data.data.likes));
  };
  const handleComment = () => {
    axios
      .post('https://whoseidea.ml:8080/comment', userinfo)
      .then(() =>
        axios
          .get(`https://whoseidea.ml:8080/comment?postId=${Number(id)}`)
          .then(data => setallComment(data.data))
      );
  };
  const handleInputValue = (key: any, e: any) => {
    setuserinfo({ ...userinfo, postId: Number(id), [key]: e.target.value });
  };
  return (
    <div>
      <div>{check ? <Login /> : null}</div>
      <div>{id}번째 아이디어</div>
      <div>
        <Header></Header>
        <Title>
          <h1>{caption}</h1>
        </Title>
        <SubTitle>
          <ContentNickname>
            <div>글쓴이 : {nickname}</div>
          </ContentNickname>
          <Writer>
            {url === undefined || url.length === 0 ? null : (
              <div>
                <div>
                  <img src={url} />
                </div>
              </div>
            )}
          </Writer>
          <Context>
            <pre>
              <span>{context}</span>{' '}
            </pre>
          </Context>
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
          <Commentbox>
            <div>
              {allComment.length === 0 ? null : (
                <div>
                  {allComment.map(el => (
                    <div>
                      <CommentWriter>
                        {' '}
                        <div>{el.nickname}</div>{' '}
                      </CommentWriter>
                      <Commentdata>
                        <div>{el.text}</div>{' '}
                      </Commentdata>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Commentbox>
        </Comment>
      </div>
    </div>
  );
}
