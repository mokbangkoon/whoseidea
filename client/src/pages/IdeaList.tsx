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

const Title = styled.div`
  position: absolute;
  display: grid;
  top: 19%;
  left: 9%;
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
  position: absolute;
  top: 22%;
  left: 85%;
  right: 10%;
  .search {
    position: relative;
    width: 300px;
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
const HeaderContainer = styled.div`
  width: 95%;
  height: 200px;
  padding: 10px 10px 10px 10px;
  margin-left: 2%;
  background-color: #e4c9c9;
`;

const Title2 = styled.div`
  margin-left: 15%;
  font-size: 50px;
  position: relative;
  margin-top: 1%;
  margin-bottom: 0.5%;
  align-items: stretch;
  font-size: 20px;

  @media only screen and (max-width: 768px) {
    margin-left: 15%;
    font-size: 20px;
    position: absolute;
  }
`;

const MainStyle = styled.div`
  max-width: 80%;
  margin-left: 8%;
  width: 90%;
`;

const Ideabox = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: relative;
  width: 320px;
  height: 419px;
  left: 1359px;
  top: 252px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000000;
  border-radius: 16px;

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
  }

  & button {
    display: block;
    margin: auto;
    width: 50%;
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
  --border-color: #efefef;
  .follow-buttons {
    display: flex;
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
    left: calc(20%);
    top: calc(30%);

    &:hover {
      background-color: var(--header-bg-color);
    }
  }

  .follow-option {
    border-radius: 0 25px 25px 0;
    margin-left: -2px;
    width: 100px;
  }
`;

export default function IdeaList() {
  const idealist = useSelector((state: RootState) => state.idealist);
  const [file, setFile] = useState('');
  const [offset, setOffset] = useState(0);
  const [hasnext, sethasnext] = useState(false);
  const [post, setPost] = useState<any[]>([]);
  const [pagenum, setPageNum] = useState(1);

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
      <Title>
        <div>
          <h1>Newest</h1>
        </div>
      </Title>
      <Container>
        <div className="search">
          <input type="text" placeholder="search" className="input"></input>
          <img src="search.png" />
        </div>
      </Container>
      <div>
        <HeaderContainer>
          <div className="header-container" />
          <div className="container" />
        </HeaderContainer>
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
      <div className="button">
        <Box1>
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
        </Box1>
      </div>
      <MainStyle>
        <Ideabox>
          <div className="container">
            {post.map((post: any) => {
              return (
                <>
                  <img src={post?.url} />
                  <h3>제목: {post?.caption}</h3>
                  <p>닉네임: {post?.nickname}</p>
                  <p>내용: {post?.context}</p>
                  <p>Like: {post?.likes}</p>
                  <Link to="/ideaView" className="text">
                    <button>Read more</button>
                  </Link>
                </>
              );
            })}
          </div>
        </Ideabox>
      </MainStyle>
    </div>
  );
}
