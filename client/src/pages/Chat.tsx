import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const All = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
const Title = styled.h1`
  text-align: center;
`;
const RecieveUser = styled.div`
  width: 50%;
  background-color: #fdfdfd;
  font-weight: bold;
`;
const RecieveUserId = styled.div`
  background-color: #ffe600;
  font-weight: bold;
  width: 500px;
`;
const Inputtext = styled.div`
  & textarea {
    width: 495px;
    height: 100px;
    background-color: aqua;
    font-weight: bold;
  }
`;
const Btn = styled.div`
  & button {
    background-color: #ffffff;
    width: 100px;
    height: 50px;
    font-weight: bold;
    border-radius: 2rem;
    margin: 10px;
    :hover {
      background-color: blueviolet;
      color: #ffffff;
    }
  }
`;
const Img = styled.div`
  & img {
  }
`;
const ChatContainer = styled.div`
  border: 3px solid black;
  width: 500px;
`;
const ImgContainer = styled.div`
  position: absolute;
  left: 40%;
  top: 25%;
`;

const Innertext = styled.div`
  font-weight: bold;
  position: absolute;
  top: 60%;
  left: 4%;
  color: white;
`;
export default function Chat({ writerdata, postDatas }: any) {
  const [userinfo, setuserinfo] = useState({
    nickname: '',
    context: '',
    target: '',
  });
  const handleInputValue = (key: any, e: any) => {
    setuserinfo({
      ...userinfo,
      nickname: String(writerdata),
      [key]: e.target.value,
      target: postDatas.nickname,
    });
  };
  const handleChat = () => {
    axios
      .post('https://whoseidea.ml:8080/message', userinfo)
      .then(data => alert(data.data));
  };

  return (
    <div>
      <All>
        <Title>
          <h1>쪽지보내기</h1>
        </Title>
        <ChatContainer>
          <RecieveUser>
            <div> 받는 사람 </div>
          </RecieveUser>
          <RecieveUserId>
            <div>{postDatas.nickname}</div>
          </RecieveUserId>
          <div>내용</div>
          <Inputtext>
            <textarea onChange={e => handleInputValue('context', e)}></textarea>
          </Inputtext>
          <Btn>
            <button onClick={handleChat}>보내기</button>
          </Btn>
        </ChatContainer>
        <ImgContainer>
          <Img>
            <img src="쪽지.png" />
          </Img>
          <Innertext>
            <h2>좋은 아이디어를 발견하셨나요?</h2>
            <div>왼쪽에 있는 쪽지 기능으로 당사자와 연락해보세요!</div>
          </Innertext>
        </ImgContainer>
      </All>
    </div>
  );
}
