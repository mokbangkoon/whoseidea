import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Headeridea = styled.div`
  font-size: 20px;
  z-index: 30;
  left: 30%;
`;
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
  left: 820px;
  top: 600px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 130%;
  /* or 32px */
  z-index: 10;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.5px;
  text-transform: uppercase;

  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
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
  left: 770px;
  top: 170px;
  z-index: 10;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  /* or 120% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;
const Contentbox = styled.div``;
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
    left: 80px;
    top: 60px;
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
  left: 60%;
  top: 1410px;
  width: 100px;
  font-size: 20px;
`;
const Like = styled.div`
  position: absolute;
  top: 1450px;
  left: 100px;
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
  width: 90px;
  height: 25px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  /* identical to box height, or 125% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1px;

  /* M3/sys/light/primary */

  color: #6750a4;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    gap: 8px;
    position: absolute;
    width: 127px;
    height: 40px;
    left: 700px;
    top: 1440px;

    /* M3/read-only/light/surface1 */

    background: linear-gradient(
        0deg,
        rgba(103, 80, 164, 0.05),
        rgba(103, 80, 164, 0.05)
      )
      #fffbfe;
    /* M3/Elevation Light/1 */

    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 100px;
  }
`;
const Chat1 = styled.div`
  border-radius: 50%;
  background-image: url(Vector.png);
  background-color: black;
  width: 50px;
  top: 350px;
  left: 300px;
  z-index: 10;
`;

const Context = styled.span`
  width: 320px;
  height: 400px;
  top: 500px;
  margin-left: 10px;
  margin-top: 25%;
  white-space: normal;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  /* or 20px */
  text-align: justify;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
`;
const Contextbox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 350px;
  height: 600px;
  left: 500px;
  top: 60px;
  margin-left: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  line-height: 300px;
  text-overflow: ellipsis;
  white-space: normal;
`;

const CommentWriter = styled.div`
  color: red;
  font-weight: bold;
  font-size: 20px;
  margin-left: 40px;
  margin-top: 10px;
`;
const Commentdata = styled.div`
  color: #0f0f0f;
  font-size: 18px;
  margin-left: 40px;
  margin-top: 10px;
`;
const Commentbox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 750px;
  height: 284px;
  left: -45px;
  top: 580px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
const Commentbox1 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 750px;
  height: 76px;
  left: -45px;
  top: 480px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-align: center;
  margin-top: 10px;
  .comment .comment-box {
    margin-left: 10px;
    width: 400px;
    height: 50px;
  }
  & button {
    z-index: 10;
    display: flex;
    font-size: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 40px;
    left: 610px;
    top: 20px;
    /* M3/read-only/light/surface1 */
    background: linear-gradient(
        0deg,
        rgba(103, 80, 164, 0.05),
        rgba(103, 80, 164, 0.05)
      ),
      #fffbfe;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 100px;
  }
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
      <div>
        <Header></Header>
        <Headeridea>
          <div>{id}번째 아이디어</div>
        </Headeridea>
        <Title>
          <h2>{caption}</h2>
        </Title>
        <SubTitle>
          <ContentNickname>
            <div>{nickname}</div>
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
          <Contextbox>
            <Context>
              <Contentbox>
                <span>{context}</span>{' '}
              </Contentbox>
            </Context>
          </Contextbox>
          <Menu>
            <Chat>
              <Chat1>
                <Link to="/chat">
                  <button onClick={handleWriter}>쪽지보내기</button>
                </Link>
                <img src="Vector1.png" />
              </Chat1>
            </Chat>
            <View>
              <span>조회수 : {view}</span>
            </View>
            <Like>
              <div>
                <span>좋아요 {likes}</span>
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
          <Commentbox1>
            <div className="commment">
              <input
                className="comment-text"
                type="text"
                placeholder="댓글을 입력하세요"
                onChange={e => handleInputValue('context', e)}
              ></input>
            </div>
            <button onClick={handleComment}>댓글달기</button>
          </Commentbox1>
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
