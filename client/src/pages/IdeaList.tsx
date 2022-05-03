import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import axios from 'axios';
import styled from 'styled-components';
import { check } from 'prettier';
import { Link, useNavigationType } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

axios.defaults.withCredentials = true;

const Title = styled.div`
  position: absolute;
  display: grid;
  top: 4%;
  left: 3%;
  right: 2%;
  text-align: light;
  align-items: center;
`;
const Title1 = styled.div`
  position: absolute;
  margin-top: 1%;
  left: 2%;
  text-align: center;
  align-items: center;
  font-size: 20px;
`;

const MainStyle = styled.div`
  margin-top: 13%;
  margin-left: 10%;
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 500px 500px 500px;
`;

const Ideabox = styled.div`
  position: flex;
  width: 350px;
  height: 450px;
  top: 12%;
  left: 5%;
  background-color: #f6f7f2;
  line-height: 10px;
  border-radius: 10px 10px 10px 10px;
  font-size: 20px;
  text-align: center;
  & img {
    height: 200px;
    width: 90%;
    right: 5px;
    left: 5px;
    margin-top: 10px;
    text-align: center;
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
  const [img, setImg] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [likes, setLikes] = useState<number>(0);
  const [post, setPost] = useState<string>('');

  useEffect(() => {
    axios
      .get('https://localhost:8080/user', { params: idealist })
      .then(data => {
        console.log(data);
        setNickname(data.data.nickname);
      });
  });

  useEffect(() => {
    axios
      .get('https://localhost:8080/post', { params: idealist })
      .then(data => {
        console.log(data);
        setPost(data.data.post);
      });
  });

  useEffect(() => {
    axios
      .patch('https://localhost:8080/like', { params: idealist })
      .then(data => {
        console.log(data);
        setLikes(data.data.likes);
      });
  });
  useEffect(() => {
    axios
      .patch('https://localhost:8080/image?postId=1', { params: idealist })
      .then(data => {
        console.log(data);
        setLikes(data.data.image);
      });
  });

  return (
    <div>
      <Title>
        <div>
          <h1>Idea List</h1>
        </div>
        <div className="container"></div>
        <div className="container">
          <Title1>
            <Link to="/writeidea" className="text">
              <div className="icon-plus">
                <img className="icon-plus" src="add.png" />
              </div>
            </Link>
            <h2>newest</h2>
          </Title1>
        </div>
      </Title>
      <MainStyle>
        <Ideabox>
          <div className="container">
            <img src={img} />
            <h3>제목:{post}</h3>
          </div>
          <p>닉네임 :{nickname}</p>
          <p>Like:{likes}</p>
          <p>context:{post}</p>
          <Link to="/ideaView" className="text">
            <button>Read more</button>
          </Link>
        </Ideabox>
        <Ideabox>
          <div className="container">
            <img src={img} />
            <h3>제목:{post}</h3>
          </div>
          <p>닉네임 :{nickname}</p>
          <p>Like:{likes}</p>
          <p>context:{post}</p>
          <Link to="/ideaView" className="text">
            <button>Read more</button>
          </Link>
        </Ideabox>
        <Ideabox>
          <div className="container">
            <img src={img} />
            <h3>제목:{post}</h3>
          </div>
          <p>닉네임 :{nickname}</p>
          <p>Like:{likes}</p>
          <p>context:{post}</p>
          <Link to="/ideaView" className="text">
            <button>Read more</button>
          </Link>
        </Ideabox>
        <Ideabox>
          <div className="container">
            <img src={img} />
            <h3>제목:{post}</h3>
          </div>
          <p>닉네임 :{nickname}</p>
          <p>Like:{likes}</p>
          <p>context:{post}</p>
          <Link to="/ideaView" className="text">
            <button>Read more</button>
          </Link>
        </Ideabox>
        <Ideabox>
          <div className="container">
            <img src={img} />
            <h3>제목:{post}</h3>
          </div>
          <p>닉네임 :{nickname}</p>
          <p>Like:{likes}</p>
          <p>context:{post}</p>
          <Link to="/ideaView" className="text">
            <button>Read more</button>
          </Link>
        </Ideabox>
        <Ideabox>
          <div className="container">
            <img src={img} />
            <h3>제목:{post}</h3>
          </div>
          <p>닉네임 :{nickname}</p>
          <p>Like:{likes}</p>
          <p>context:{post}</p>
          <Link to="/ideaView" className="text">
            <button>Read more</button>
          </Link>
        </Ideabox>
      </MainStyle>
    </div>
  );
}
