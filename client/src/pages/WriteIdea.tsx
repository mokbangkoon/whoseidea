import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import React, { useState } from 'react';
axios.defaults.withCredentials = true;

const Main = styled.div`
  .wrap {
    width: 100%;
    height: 150%;
    background-image: url(백4.png);
    background-size: cover;
    position: absolute;
  }
`;
const MainStyle = styled.div`
  width: 99.3%;
  bottom: 10%;
  height: 200px;
  padding: 10px 10px 10px 10px;
  background: url(백4.png);
  font-size: 60px;
  color: #ffff;
  text-align: center;
  align-items: center;
  margin-left: 3%;
`;
const Containerbox = styled.div`
  .container .container-box {
    position: absolute;
    width: 600px;
    height: 640px;
    left: 121px;
    top: 342px;
    left: calc(50% - 1198px / 2 + 11px);
    top: calc(27% - 650px / 2 + 150px);
  }
`;
const BodyStyle = styled.div`
  position: absolute;
  width: 1200px;
  height: 650px;
  left: calc(50% - 1198px / 2 + 11px);
  top: calc(35% - 650px / 2 + 150px);
  background: url(백3.png);
  border: 1px solid #000000;
  box-sizing: border-box;
  .body-title .title {
    position: absolute;
    width: 500px;
    height: 50px;
    left: 108px;
    top: 400px;
    font-size: 20px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    left: calc(105% - 1198px / 2 + 11px);
    top: calc(30% - 650px / 2 + 150px);
  }
  .body-write .write-text {
    position: absolute;
    width: 500px;
    height: 50px;
    left: 218px;
    top: 432px;
    font-size: 20px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    left: calc(105% - 1198px / 2 + 11px);
    top: calc(40% - 650px / 2 + 150px);
  }
  .body-write .write-text1 {
    position: absolute;
    width: 300px;
    height: 50px;
    left: 218px;
    top: 432px;
    font-size: 20px;
    color: black;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    left: calc(105% - 1198px / 2 + 11px);
    top: calc(107% - 650px / 2 + 150px);
  }
  .file {
    position: absolute;
    width: 220px;
    height: 50px;
    left: 218px;
    top: 432px;
    font-size: 20px;
    background-color: #ff90ff;
    color: black;
    text-align: right;
    align-items: center;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    input[type='file'] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
    left: calc(128% - 1198px / 2 + 11px);
    top: calc(107% - 650px / 2 + 150px);
  }
  .main-text .maintext {
    position: absolute;
    width: 500px;
    height: 356px;
    left: 221px;
    top: 484px;
    font-size: 20px;
    left: calc(105% - 1198px / 2 + 11px);
    top: calc(50% - 650px / 2 + 150px);
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
  }
  .button {
    position: absolute;
    width: 300px;
    height: 50px;
    background-color: #ffff;
    font-size: 20px;
    left: calc(114% - 1198px / 2 + 11px);
    top: calc(116% - 650px / 2 + 150px);
  }
`;
export default function WriteIdea() {
  const [filename, setFileName] = useState('');
  const [selectedFile, setselectedFile] = useState('');
  const [data, setData] = useState({
    caption: '',
    context: '',
    nickname: '',
  });
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    axios
      .get('https://whoseidea.ml:8080/auth')
      .then(data => setNickname(data.data.nickname));
  }, []);
  const handleInputValue = (key: any, e: any) => {
    setData({
      ...data,
      [key]: e.target.value,
    });
  };
  const handleFileInput = (event: any) => {
    setselectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handlePost = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    axios
      .post('https://whoseidea.ml:8080/post', data, {
        headers: {
          'Content-Type': `application/json`,
          withCredentials: true,
        },
      })
      .then(() => {
        alert('성공');
      })
      .catch(() => {
        alert('실패');
      });
    axios.get('https://whoseidea.ml:8080/post/last').then((lastPost: any) => {
      axios.post(
        `https://whoseidea.ml:8080/post/image?postId=${lastPost.data.id + 1}`,
        formData,
        {
          headers: {
            'Content-Type': `multipart/form-data`,
            withCredentials: true,
          },
        }
      );
    });
  };
  return (
    <Main>
      <div className="main">
        <div className="wrap">
          <MainStyle>
            <div className="head-container">
              <div className="container-text">
                <h2>아이디어를 작성해 주세요</h2>
              </div>
              <BodyStyle>
                <div className="body" />
                <div className="body-title">
                  <span>
                    <Containerbox>
                      <div className="container">
                        <div className="contianer-box"></div>
                        <img src="백6.png" className="container-box"></img>
                      </div>
                    </Containerbox>
                    <input
                      type="text"
                      className="title"
                      placeholder="제목을 입력해주세요"
                      onChange={e => handleInputValue('caption', e)}
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
                        value={nickname}
                      ></input>
                    </span>
                  </div>
                  <div className="main-text">
                    <span>
                      <textarea
                        className="maintext"
                        placeholder="내용을 입력해 주세요"
                        onChange={e => handleInputValue('context', e)}
                      ></textarea>
                      <input
                        className="write-text1"
                        placeholder="첨부파일"
                        value={filename}
                      ></input>
                      <div>
                        <button
                          className="button"
                          type="button"
                          onClick={() => handlePost()}
                        >
                          확인
                        </button>
                      </div>
                      <input
                        type="file"
                        className="file"
                        accept="image/*"
                        onChange={event => handleFileInput(event)}
                      />
                    </span>
                  </div>
                </div>
              </BodyStyle>
            </div>
          </MainStyle>
        </div>
      </div>
    </Main>
  );
}
