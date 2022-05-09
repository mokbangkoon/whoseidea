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
  margin-left: 8%;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 500px 500px 500px;
`;

const Ideabox = styled.div`
  position: relative;
  width: 350px;
  height: 450px;
  top: 8%;
  left: 5%;
  background-color: #f6f7f2;
  line-height: 10px;
  border-radius: 10px 10px 10px 10px;
  font-size: 20px;
  text-align: center;

  & img {
    height: 220px;
    width: 100%;
    right: 5px;
    left: 5px;
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    position: relative;
    overflow: hidden;
    object-fit: cover;
  }

  & button {
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

export default function IdeaList() {
  const idealist = useSelector((state: RootState) => state.idealist);
  const [file, setFile] = useState('');
  const [nickname, setNickname] = useState<string>('');
  const [caption, setCaption] = useState('');
  const [context, setContext] = useState('');
  const [likes, setLikes] = useState<number>(0);
  const [profile, setProfile] = useState('');
  const [offset, setOffset] = useState(0);
  const [hasnext, sethasnext] = useState(false);
  const [post, setPost] = useState([]);
  const [pagenum, setPageNum] = useState(1);

  useEffect(() => {
    axios.get(`https://localhost:8080/post?page=${pagenum}`).then(data => {
      console.log(data.data);
      setPost(data.data);
      sethasnext(data.data);
    });
  }, [pagenum]);

  const Newpost = (key: any, e: any) => {
    setPost(e.target.value);
  };

  function handleNewPost() {
    axios.get(`https://localhost:8080/post?page=${pagenum}`).then(data => {
      setFile(data.data.img);
      setCaption(data.data.title);
      setContext(data.data.context);
      alert('성공');
    });
  }
  const handlePageBack = () => {
    setPageNum(pagenum - 1);
  };
  const handlePagefront = () => {
    setPageNum(pagenum + 1);
  };
  const handleback = () => {
    setOffset(offset - 9);
    setPageNum(pagenum - 1);
  };
  const handlefront = () => {
    setOffset(offset + 9);
    setPageNum(pagenum + 1);
  };
  return (
    <>
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
      </div>
      <MainStyle>
        <Ideabox>
          <div className="container">
            {post.map((post: any) => {
              axios
                .get(`https://localhost:8080/post/image?postId=${post.id}`)
                .then(data1 => {
                  console.log(data1.data[0]);
                  setFile(data1.data[0].url);
                });
              return (
                <>
                  <img src={post?.file} />
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
    </>
  );
}
