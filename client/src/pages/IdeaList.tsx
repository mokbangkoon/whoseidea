import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import axios from 'axios';
import styled from 'styled-components';
import { check } from 'prettier';
import { Link, useNavigationType } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import writeidea from './WriteIdea';
import { userInfo } from 'os';
import { text } from 'express';

axios.defaults.withCredentials = true;

const Main = styled.div`
  .wrap {
    width: 100%;
    height: 100%;
    background-image: url(백4.png);
    background-size: cover;
    position: absolute;
  }
`;
const Title = styled.div`
  position: absolute;
  display: flex;
  top: 20%;
  left: 7%;
  right: 2%;
  align-items: center;
  font-size: 25px;
`;
const Title1 = styled.div`
  position: absolute;
  top: 19%;
  left: 70%;
  right: 2%;
  align-items: center;
  font-size: 25px;
`;
const Container = styled.div`
  position: relative;
  top: 22%;
  left: 75%;
  right: 10%;
  .search {
    position: relative;
    width: 400px;
  }
  input {
    width: 100%;
    height: 20px;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
  }
  img {
    position: absolute;
    width: 17px;
    top: 10px;
    right: 12px;
    margin: 0;
  }
`;
const MainStyle = styled.div`
  position: absolute;
  width: 2000px;
  height: 2000px;
  left: 699px;
  top: 100px;
  background-image: url(백5.png);
  border-radius: 10px;
`;
const HeaderContainer = styled.div`
  position: absolute;
  width: 75%;
  height: 371px;
  left: 2%;
  top: 10px;
  background: url(header.png);
  border-radius: 10px;
`;
const HeaderContainertext = styled.div`
  position: absolute;
  width: 80%;
  height: 125px;
  left: 20%;
  top: 68%;
  text-shadow: 2px 6px 2px #4b4b49;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const HeaderContainertext1 = styled.div`
  position: absolute;
  width: 60%;
  height: 125px;
  left: 12%;
  top: 74.5%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

const HeaderContainer1 = styled.div`
  position: absolute;
  width: 20%;
  height: 371px;
  right: 2%;
  top: 10px;
  background: url(header3.png);
  border-radius: 10px;
`;

const Title2 = styled.div`
  margin-left: 92%;
  font-size: 50px;
  position: relative;
  margin-top: 14%;
  margin-bottom: 0.5%;
  align-items: stretch;
  font-size: 20px;
`;
const Ideabox = styled.div`
  .container .card-content {
    display: flex;
    background-color: #ffff;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: relative;
    width: 320px;
    height: 420px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1.5fr 1.5fr 1.5fr;
    grid-row-gap: 110px;
    grid-column-gap: 120px;
    margin-left: 20%;
    margin-top: 10%;
    text-align: center;
    background-position: center;
    border: 2px solid #000000;
    border-radius: 20px;
  }
  & img {
    position: static;
    width: 320px;
    height: 200px;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
    border-radius: 10px 10px 10px 10px;
    border: 1px solid #000000;
  }
  .main-button {
    display: block;
    margin-left: 20%;
    margin-top: 8%;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 40px;
    background: black;
    color: white;
    border: 2px solid #ffff;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 20px;
    transition: 0.5s ease;
  }
  & button:hover {
    transition: 0.5s ease;
    border: 2px solid #0000;
    background: transparent;
    color: black;
  }
`;

const Box1 = styled.div`
  --border-color: #ffff;
  .follow-buttons {
    position: absolute;
    display: relative;
    margin-left: 45%;
    margin-top: 5%;
  }
  .follow {
    border: 2px solid var(--border-color);
    border-radius: 25px 0 0 25px;
    color: var(--body-color);
    padding: 8px 16px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    background-color: transparent;
    width: 100px;
    left: 100px;
    &:hover {
      background-color: var(--header-bg-color);
    }
  }
  .follow-option {
    border-radius: 0 25px 25px 0;
    left: 100px;
    width: 100px;
  }
`;
export default function IdeaList({ handleToView }: any) {
  const idealist = useSelector((state: RootState) => state.idealist);
  const [file, setFile] = useState('');
  const [offset, setOffset] = useState(0);
  const [hasnext, sethasnext] = useState(false);
  const [post, setPost] = useState<any[]>([]);
  const [pagenum, setPageNum] = useState(1);

  const handleIdealist = (post: any) => {
    handleToView(post);
  };

  useEffect(() => {
    axios.get(`https://localhost:8080/post?page=${pagenum}`).then(data => {
      Promise.all(
        data.data.map((item: any) =>
          axios.get(`https://localhost:8080/post/image?postId=${item.id}`)
        )
      ).then(requests => {
        const urls = requests.map(item => {
          return item.data[0]
            ? item.data[0]
            : 'https://whoseidea-image.s3.ap-northeast-2.amazonaws.com/post_default_image.png';
        });

        const items = [];

        for (let i = 0; i < data.data.length; i++) {
          items.push({
            ...data.data[i],
            url: urls[i],
          });
        }
        setPost(items);
        sethasnext(!!items);
      });
    });
  }, [pagenum]);

  const handleback = () => {
    setOffset(offset - 9);
    setPageNum(pagenum - 1);
  };
  const handlefront = () => {
    setOffset(offset + 9);
    setPageNum(pagenum + 1);
  };

  return (
    <div>
      <Main>
        <div className="wrap">
          <MainStyle>
            <Title>
              <div>
                <h1>Newest</h1>
              </div>
            </Title>
            <Container>
              <div className="search">
                <input
                  type="text"
                  placeholder="search"
                  className="input"
                ></input>
                <img src="search.png" />
              </div>
            </Container>
            <div>
              <HeaderContainer>
                <div className="header-container" />
                <HeaderContainertext>
                  <div className="headercontainertext">
                    share your ideas with world
                  </div>
                </HeaderContainertext>
              </HeaderContainer>
              <div className="container" />
              <HeaderContainer1>
                <HeaderContainertext1>
                  <div className="header-container" />
                  <div className="container" />
                  <div className="headercontainertext1"> 아이디어 작성하기</div>
                </HeaderContainertext1>
              </HeaderContainer1>
            </div>
            <div>
              <Title2>
                <div className="container">
                  <Link to="/writeidea">
                    <img src="add.png"></img>
                  </Link>
                </div>
              </Title2>
            </div>
            <Box1>
              <div className="button">
                <div className="follow-buttons">
                  {offset === 0 ? null : (
                    <button className="follow" onClick={handleback}>
                      이전
                    </button>
                  )}
                  {hasnext ? (
                    <button
                      className="follow follow-option active"
                      onClick={handlefront}
                    >
                      다음
                    </button>
                  ) : null}
                </div>
              </div>
            </Box1>
            <Ideabox>
              <div className="container">
                <div className="card-content">
                  {post.map((post: any) => {
                    return (
                      <div>
                        <img src={post?.url} />
                        <h3>제목: {post?.caption}</h3>
                        <p>닉네임: {post?.nickname}</p>
                        <p>Like: {post?.likes}</p>
                        <Link to={`/ideaview/${post?.id}`} className="text">
                          <button
                            className="main-button"
                            onClick={() => handleIdealist(post)}
                          >
                            Read more
                          </button>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Ideabox>
          </MainStyle>
        </div>
      </Main>
    </div>
  );
}
