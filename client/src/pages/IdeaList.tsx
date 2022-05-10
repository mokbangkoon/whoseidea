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
  max-width: 60%;
  margin-left: 8%;
  width: 90%;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ideabox = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 320px;
  height: 419px;
  left: 1359px;
  top: 252px;

  border: 1px solid #000000;
  border-radius: 16px;

  & img {
    position: static;
    width: 320px;
    height: 200px;
    left: 0px;
    top: 0px;

    /* Inside auto layout */

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
    height: 50px;
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
  :root {
    --primary-light: #8abdff;
    --primary: #6d5dfc;
    --primary-dark: #5b0eeb;

    --white: #ffffff;
    --greyLight-1: #e4ebf5;
    --greyLight-2: #c8d0e7;
    --greyLight-3: #bec8e4;
    --greyDark: #9baacf;
  }

  $shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
    -0.2rem -0.2rem 0.5rem var(--white);
  $inner-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
    inset -0.2rem -0.2rem 0.5rem var(--white);

  .button {
    width: 15rem;
    height: 4rem;
    border-radius: 1rem;
    box-shadow: $shadow;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .button .buton-primary {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    background: var(--primary);
    box-shadow: inset 0.2rem 0.2rem 1rem var(--primary-light),
      inset -0.2rem -0.2rem 1rem var(--primary-dark), $shadow;
    color: var(--greyLight-1);

    &:hover {
      color: var(--white);
    }
    &:active {
      box-shadow: inset 0.2rem 0.2rem 1rem var(--primary-dark),
        inset -0.2rem -0.2rem 1rem var(--primary-light);
    }
  }
  .button .button-secondary {
    &__secondary {
      grid-column: 1 / 2;
      grid-row: 5 / 6;
      color: var(--greyDark);
      &:hover {
        color: var(--primary);
      }
      &:active {
        box-shadow: $inner-shadow;
      }
    }

    p {
      font-size: 1.6rem;
    }
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
        console.log(items);
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
      <div className="row">
        <Box1>
          <div className="button">
            {offset === 0 ? null : (
              <button className="button-primary" onClick={handleback}>
                이전
              </button>
            )}
            {hasnext ? (
              <button className="button-secondary" onClick={handlefront}>
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

                  <p>Like: {post?.likes}</p>
                  <Link to={`/ideaview/${post?.id}`} className="text">
                    <button onClick={() => handleIdealist(post)}>
                      Read more
                    </button>
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
