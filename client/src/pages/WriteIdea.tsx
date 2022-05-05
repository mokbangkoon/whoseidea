import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import axios from 'axios';
import styled from 'styled-components';
import { check } from 'prettier';
import { Link, useNavigationType } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import writeidea from '../modules/writeidea';
import { findAllByAltText } from '@testing-library/react';
import IdeaList from './IdeaList';
import idealist from '../modules/idealist';
axios.defaults.withCredentials = true;

const MainStyle = styled.div`
  width: 99.3%;
  height: 250px;
  padding: 10px 10px 10px 10px;
  background: url(대문3.png);
  font-size: 80px;
  color: #ffff;
  text-align: center;
  align-items: center;
`;
const BodyStyle = styled.div`
  position: absolute;
  width: 2187px;
  height: 750px;
  left: calc(40% - 1198px / 2 + 11px);
  top: calc(40% - 650px / 2 + 150px);
  background: #fff5f5;
  border: 1px solid #000000;
  box-sizing: border-box;
  .body-title .title {
    position: absolute;
    width: 1200px;
    height: 50px;
    left: 218px;
    top: 368px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    left: calc(45% - 1198px / 2 + 11px);
    top: calc(30% - 650px / 2 + 150px);
  }
  .body-write .write-text {
    position: absolute;
    width: 1200px;
    height: 50px;
    left: 218px;
    top: 432px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    left: calc(45% - 1198px / 2 + 11px);
    top: calc(40% - 650px / 2 + 150px);
  }
  .main-text .maintext {
    position: absolute;
    width: 1200px;
    height: 356px;
    left: 221px;
    top: 484px;
    left: calc(45% - 1198px / 2 + 11px);
    top: calc(50% - 650px / 2 + 150px);
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
  }
  .main-attach .image {
    position: absolute;
    width: 950px;
    height: 44px;
    left: 222px;
    top: 861px;
    left: calc(45% - 1198px / 2 + 11px);
    top: calc(100% - 650px / 2 + 150px);
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
  }
  .main-find .find {
    position: absolute;
    width: 142px;
    height: 44px;
    left: 1913px;
    top: 1141px;
    font-size: 20px;
    background: rgba(196, 196, 196, 0.09);
    border: 1px solid #000000;
    box-sizing: border-box;
    left: calc(93.5% - 1198px / 2 + 11px);
    top: calc(100% - 650px / 2 + 150px);
  }
  .footer-post .post_submit1 {
    position: absolute;
    width: 142px;
    height: 70px;
    left: 2212px;
    top: 1211px;
    font-size: 25px;
    background: rgba(196, 196, 196, 0.09);
    border: 1px solid #000000;
    box-sizing: border-box;
    left: calc(60% - 1198px / 2 + 11px);
    top: calc(110% - 650px / 2 + 150px);
  }
  .footer-post .post2 {
    position: absolute;
    width: 142px;
    height: 70px;
    left: 2212px;
    top: 1211px;
    font-size: 25px;
    background: rgba(196, 196, 196, 0.09);
    border: 1px solid #000000;
    box-sizing: border-box;
    left: calc(80% - 1198px / 2 + 11px);
    top: calc(110% - 650px / 2 + 150px);
  }
`;
export default function WriteIdea() {
  const writeidea = useSelector((state: RootState) => state.writeidea);
  const [title, setTitle] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [context, setContext] = useState<string>('');
  const [file, setFile] = useState<string>('');
  const [newpost, setNewpost] = useState({
    title: '',
    nickname: '',
    context: '',
  });
  const getValue = (e: any) => {
    const { title, value } = e.target;
    setNewpost({
      ...newpost,
      [title]: value,
      [nickname]: value,
      [context]: value,
    });
    console.log(newpost);
  };
  const [viewcontent, setViewContent] = useState({});

  return (
    <div>
      <MainStyle>
        <div className="head-container">
          <div className="container-text">
            <h2>아이디어를 마음껏 작성해 주세요</h2>
          </div>
          <BodyStyle>
            <div className="body" />
            <div className="body-title">
              <span>
                <input
                  type="text"
                  className="title"
                  placeholder="제목을 입력해주세요"
                  onChange={getValue}
                  name="title"
                ></input>
              </span>
            </div>
            <div className="body-write">
              <div className="writer">
                <span>
                  <input
                    type="text"
                    className="write-text"
                    placeholder="닉네임을 입력해주세요"
                    onChange={getValue}
                  ></input>
                </span>
              </div>
              <div className="main-text">
                <span>
                  <textarea
                    className="maintext"
                    placeholder="내용을 입력해 주세요"
                    onChange={getValue}
                  ></textarea>
                </span>
                <div className="main-image">
                  <input
                    type="text"
                    className="image"
                    placeholder="파일첨부"
                  ></input>
                </div>
                <div className="main-find">
                  <button className="find"></button>
                  <div className="footer">
                    <div className="footer-post">
                      <button>확인</button>
                      <button className="post1" placeholder="목록으로">
                        목록으로
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BodyStyle>
        </div>
      </MainStyle>
    </div>
  );
}
