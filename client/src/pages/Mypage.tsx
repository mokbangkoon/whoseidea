import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const All = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 18.75%;
  right: 18.75%;
  top: 9.96%;
  bottom: 21.68%;
  width: 900px;
  height: 1400px;
  top: 204px;
  left: 270px;
  background: rgba(13, 52, 112, 0.8);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
`;
const Title = styled.div`
  position: absolute;
  width: 500px;
  height: 72px;
  left: 75%;
  top: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const Body = styled.div`
  position: absolute;
  width: 850px;
  height: 1270px;
  left: 20px;
  right: 20px;
  top: 100px;
  background: #ffffff;
  border-radius: 55px;
`;
const Left = styled.div`
  position: absolute;
  width: 600px;
  height: 800px;
  right: 10.8%;
  top: 8%;
  background: rgba(80, 181, 33, 0.08);
`;

const Headertext = styled.div`
  position: absolute;
  width: 500px;
  height: 72px;
  left: 50px;
  top: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const UserContainer = styled.div`
  font-weight: bold;
  position: absolute;
  top: 60%;
  width: 30vh;
  margin: 10px;
  padding: 10px;
  font-size: x-large;
`;

const Line = styled.div`
  position: absolute;
  width: 159px;
  height: 25px;
  left: 400px;
  top: 350px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 59px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #110229;
`;

const Button = styled.div`
  .text1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    border-radius: 100px;
    width: 80px;
    height: 40px;
    margin-left: 120px;
    margin-top: -200px;
    border-radius: 1px solid black;
    background: #0d3470;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    width: 500px;
    height: 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 20px;
    /* identical to box height, or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.1px;
    color: #ffffff;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 1px solid black;
  }
  .text2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    border-radius: 100px;
    width: 80px;
    height: 40px;
    margin-left: 120px;
    margin-top: 30px;
    border-radius: 1px solid black;
    background: #0d3470;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    width: 500px;
    height: 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 20px;
    /* identical to box height, or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.1px;
    color: #ffffff;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 1px solid black;
  }
  .text3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    border-radius: 100px;
    width: 80px;
    height: 40px;
    margin-left: 120px;
    margin-top: 30px;
    border-radius: 1px solid black;
    background: #0d3470;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    width: 500px;
    height: 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 20px;
    /* identical to box height, or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.1px;
    color: #ffffff;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 1px solid black;
  }
  .text4 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    border-radius: 100px;
    width: 80px;
    height: 40px;
    margin-left: 120px;
    margin-top: 30px;
    border-radius: 1px solid black;
    background: #0d3470;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    width: 500px;
    height: 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 20px;
    /* identical to box height, or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.1px;
    color: #ffffff;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 1px solid black;
  }
  .text5 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    border-radius: 100px;
    width: 80px;
    height: 40px;
    margin-left: 120px;
    margin-top: 30px;
    border-radius: 1px solid black;
    background: #0d3470;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    width: 500px;
    height: 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 20px;
    /* identical to box height, or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.1px;
    color: #ffffff;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 1px solid black;
  }
`;
const UserImage = styled.div`
  position: absolute;
  top: 20%;
  width: 30vh;
`;

const File = styled.div`
  img {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 320px;
    bottom: 85%;
    background: url(pngwing.png);
  }
  label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    border-radius: 100px;
    width: 80px;
    height: 40px;
    margin-left: 250px;
    margin-top: 20px;
    border-radius: 1px solid black;
    background: #eceef3;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    width: 100px;
    height: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    /* identical to box height, or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    color: #5d449d;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 1px solid black;
  }
  .name {
    display: inline-block;
    height: 40px;
    padding: 0 50px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    width: 90%;
    color: #999999;
    margin-top: 160px;
    width: 400px;
    margin-left: 160px;
    border-radius: 1px solid black;
    font-size: 16px;
  }
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
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 8px;
    border-radius: 100px;
    width: 156px;
    height: 60px;
    margin-left: 440px;
    margin-top: -48px;
    background: #eceef3;
    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    width: 180px;
    height: 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    /* identical to box height, or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    color: #5d449d;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
const Mobileimg = styled.div`
  position: absolute;
  top: 50%;
  left: 60%;
  font-weight: bold;
  color: #bd1569;
  & img {
    width: 300px;
    height: 300px;
  }
`;

export default function Mypage({
  handleMypost,
  handleMycomment,
  handleMychat,
}: any) {
  // 마이 페이지
  // props로 들어오는 함수들은 나의 포스트, 나의 댓글, 쪽지 보관함에 관련된 함수
  // 프로필 수정, 개인정보 수정, 회원탈퇴 , 나의 댓글보기, 나의 포스트보기, 쪽지 보관함 기능 제공
  const isgooglelogin = useSelector(
    (state: RootState) => state.isgooglelogin.isgooglelogin
  );
  const check = useSelector((state: RootState) => state.modal.check);

  const [selectedFile, setselectedFile] = useState('');
  const [filename, setfilename] = useState('');
  const [nickname, setnickname] = useState('');
  const [profile, setprofile] = useState('');
  // 반응형 웹 구현 : 최소 너비가 768px 아래로 가면 반응형 웹 실행
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });

  // 권한 요청을 통해서 사용자의 닉네임과 프로필을 세팅
  useEffect(() => {
    axios.get('https://whoseidea.ml:8080/auth').then(data => {
      setnickname(data.data.nickname);
      setprofile(data.data.profile);
    });
  }, []);

  // 파일 선택시 나오는 이벤트를 제어해서 파일과 파일이름을 set함
  const handleFileInput = (event: any) => {
    setselectedFile(event.target.files[0]);
    setfilename(event.target.files[0].name);
  };
  // 파일을 서버에 axios로 보낸다.
  // 선택된 이미지파일을 formData에 넣어서 서버에 보낸다.
  const handlePost = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    axios
      .patch(
        `https://whoseidea.ml:8080/user/image?nickname=${nickname}`,
        formData
      )
      .then(res => {
        handleUserProfile();
        alert('프로필 변경 성공');
      });
  };

  // 서버에 닉네임을 함께 보내면 해당 프로필 사진의 url이 온다.
  // 그걸로 profile을 수정한다.
  const handleUserProfile = () => {
    axios
      .get(`https://whoseidea.ml:8080/user?nickname=${nickname}`)
      .then(data => setprofile(data.data.profile));
  };

  return (
    <div>
      <All>
        <div>{check ? <Login /> : null}</div>
        <div>
          {isPc ? (
            <div>
              <Headertext>
                <h1>Whose idea?</h1>
              </Headertext>
              <Title>
                <div>My Page</div>
              </Title>
              <Body>
                <UserImage>
                  <File>
                    <img src={profile} />
                    <div>
                      <input
                        className="name"
                        readOnly
                        value={filename}
                        placeholder="첨부파일"
                      />
                      <label htmlFor="inputfile">파일 선택</label>
                      <input
                        type="file"
                        name="file"
                        id="inputfile"
                        accept="image/*"
                        onChange={event => handleFileInput(event)}
                      />
                      <div>
                        <button onClick={() => handlePost()}>
                          프로필 변경하기
                        </button>
                      </div>
                    </div>
                  </File>
                </UserImage>
                <Line>
                  <h2>{nickname}</h2>
                </Line>
                <UserContainer>
                  <Button>
                    <div>
                      <Link to="/updatepro" className="text1">
                        <div>회원정보 수정</div>
                      </Link>
                    </div>
                  </Button>
                  <Line>
                    <div>ㅤ</div>
                  </Line>
                  {isgooglelogin ? null : (
                    <Button>
                      <div>
                        <Link to="/signout" className="text2">
                          <div>회원 탈퇴</div>
                        </Link>
                      </div>
                    </Button>
                  )}
                  <Line>
                    <div>ㅤ</div>
                  </Line>
                  <Button>
                    <div>
                      <Link to="/mypost" className="text3">
                        <div
                          onClick={() => {
                            handleMypost();
                          }}
                        >
                          내가 쓴 게시글 보기
                        </div>
                      </Link>
                    </div>
                  </Button>
                  <Line>
                    <div>ㅤ</div>
                  </Line>
                  <Button>
                    <div>
                      <Link to="/mycomment" className="text4">
                        <div
                          onClick={() => {
                            handleMycomment();
                          }}
                        >
                          내가 쓴 댓글 보기
                        </div>
                      </Link>
                    </div>
                  </Button>
                  <Line>
                    <div>ㅤ</div>
                  </Line>
                  <Button>
                    <div>
                      <Link to="/mychat" className="text5">
                        <div onClick={() => handleMychat()}>쪽지 보관함</div>
                      </Link>
                    </div>
                  </Button>
                </UserContainer>
              </Body>
            </div>
          ) : (
            <div>
              <Left>
                <Mobileimg>
                  <div>당신의 아이디어가 세상을 바꿉니다</div>
                  <img src="mypage.png" />
                </Mobileimg>
                <Body>
                  <Title>
                    <div>Mypage</div>
                  </Title>
                  <UserImage>
                    <File>
                      <img src={profile} />
                      <div>
                        <input
                          className="name"
                          readOnly
                          value={filename}
                          placeholder="첨부파일"
                        />
                        <label htmlFor="inputfile">파일선택</label>
                        <input
                          type="file"
                          name="file"
                          id="inputfile"
                          accept="image/*"
                          onChange={event => handleFileInput(event)}
                        />
                        <div>
                          <button onClick={() => handlePost()}>
                            프로필 변경하기
                          </button>
                        </div>
                      </div>
                    </File>
                  </UserImage>
                  <UserContainer>
                    <Line>
                      <div></div>
                    </Line>
                    <div>회원 닉네임 </div>
                    <div>{nickname}</div>
                    <Line>
                      <div>ㅤ</div>
                    </Line>
                    <Button>
                      <div>
                        <Link to="/updatepro" className="text ">
                          <div>회원정보 수정</div>
                        </Link>
                      </div>
                    </Button>
                    <Line>
                      <div>ㅤ</div>
                    </Line>
                    {isgooglelogin ? null : (
                      <Button>
                        <div>
                          <Link to="/signout" className="text ">
                            <div>회원 탈퇴</div>
                          </Link>
                        </div>
                      </Button>
                    )}
                    <Line>
                      <div>ㅤ</div>
                    </Line>
                    <Button>
                      <div>
                        <Link to="/mypost" className="text">
                          <div
                            onClick={() => {
                              handleMypost();
                              handleMycomment();
                            }}
                          >
                            내가 쓴 게시글 보기
                          </div>
                        </Link>
                      </div>
                    </Button>
                    <Line>
                      <div>ㅤ</div>
                    </Line>
                    <Button>
                      <div>
                        <Link to="/mychat" className="text5">
                          <div onClick={() => handleMychat()}>쪽지 보관함</div>
                        </Link>
                      </div>
                    </Button>
                  </UserContainer>
                </Body>
              </Left>
            </div>
          )}
        </div>
      </All>
    </div>
  );
}
