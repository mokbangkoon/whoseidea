import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const All = styled.div`
  position: absolute;
  width: 900px;
  height: 1220px;
  left: 270px;
  top: 204px;
  box-sizing: border-box;
  position: absolute;
  left: 18.82%;
  right: 18.82%;
  top: 9.96%;
  bottom: 10.3%;
  background: rgba(13, 52, 112, 0.87);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */
  z-index: 10;
  border-radius: 20px;
`;
const Title = styled.h1`
  position: absolute;
  left: 18%;
  right: 27.83%;
  top: 4%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 59px;
  width: 700px;
  color: #ffffff;
`;
const RecieveUser = styled.div`
  position: absolute;
  left: 17%;
  top: 43%;
  width: 200px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  /* identical to box height */
  color: #ffffff;
  z-index: 10;
`;
const Recievebox = styled.div`
  position: absolute;
  left: 17%;
  right: 28.47%;
  top: 48%;
  bottom: 42.33%;
  background: #ffffff;
  border-radius: 14px;
  width: 600px;
  height: 60px;
`;
const RecieveUserId = styled.div`
  position: absolute;
  width: 250px;
  height: 34px;
  left: 250px;
  top: 10%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 20px;
  /* or 50% */
  display: flex;
  color: #000000;
  z-index: 100;
  margin-top: 15px;
  text-align: center;
`;
const Inputcontent = styled.div`
  position: absolute;
  left: 17%;
  right: 28%;
  top: 55%;
  bottom: 37.35%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  /* identical to box height */
  color: #ffffff;
  width: 200px;
`;
const Inputtext = styled.div`
  & textarea {
    width: 600px;
    height: 300px;
    position: absolute;
    left: 17%;
    right: 25.82%;
    top: 61%;
    bottom: 17.14%;
    background: #ffffff;
    border-radius: 14px;
    font-size: 24px;
    font-weight: 500;
  }
`;
const Btn = styled.div`
  & button {
    z-index: 10;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 40px;
    left: 630px;
    top: 420px;
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
  left: 110px;
  right: 150px;
  top: 200px;
  width: 600px;
  height: 200px;
`;

const Innertext = styled.div`
  position: absolute;
  left: 60px;
  top: 15%;
  width: 600px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
const Innertext1 = styled.div`
  position: absolute;
  left: 60px;
  top: 50%;
  width: 600px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 35px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
// 쪽지 보내기 페이지
export default function Chat({ writerdata, postDatas }: any) {
  // 글쓴이와 보내는 사람의 데이터는 포스트를 열때, 쪽지보내기를 클릭시 정해진다.
  // nickname 은 보내는 사람의 닉네임 , target은 해당 포스트의 글쓴이이다.
  const [userinfo, setuserinfo] = useState({
    nickname: '',
    context: '',
    target: '',
  });
  const handleInputValue = (key: string, e: any) => {
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
          <h1>당신의 아이디어를 보여주세요</h1>
        </Title>
        <ChatContainer>
          <RecieveUser>
            <div> 받는 사람 </div>
          </RecieveUser>
          <Recievebox>
            <RecieveUserId>
              <div>{postDatas.nickname}</div>
            </RecieveUserId>
          </Recievebox>
          <Inputcontent>
            <div>내용</div>
          </Inputcontent>
          <Inputtext>
            <textarea onChange={e => handleInputValue('context', e)}></textarea>
          </Inputtext>
          <Btn>
            <button onClick={handleChat}>보내기</button>
          </Btn>
        </ChatContainer>
        <ImgContainer>
          <Img>
            <img src="message.png" />
          </Img>
          <Innertext>
            <h2>좋은 아이디어를 발견하셨나요?</h2>
          </Innertext>
          <Innertext1>
            <div>더 많은 이야기를 나누고 싶으시면 쪽지를 남겨보세요</div>
          </Innertext1>
        </ImgContainer>
      </All>
    </div>
  );
}
