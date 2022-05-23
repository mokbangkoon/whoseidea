import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Title = styled.div`
  font-weight: bold;
  font-size: 100px;
  text-align: center;
  position: absolute;
  color: black;
  border-radius: 1rem;
  left: 20%;
  font-family: 'Courier New', Courier, monospace;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;
const Right = styled.div`
  position: absolute;
  left: 6%;
  top: 8%;
  bottom: 0%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2)
  );
`;
const Left = styled.div`
  position: absolute;
  width: 600px;
  height: 800px;
  right: 10.8%;
  top: 8%;
  background: rgba(80, 181, 33, 0.08);
`;

const Img = styled.div`
  font-weight: bold;
  font-size: xx-large;
  text-align: center;
  color: #201f1f;
  & img {
    height: 100vh;
    width: 100vh;
  }
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
  background-color: white;
`;

const Button = styled.div`
  border-radius: 1rem;
  :hover {
    background-color: #f1bdbd;
    transition: 0.5s;
    cursor: pointer;
  }
  .text {
    text-decoration: none;
    color: #131212;
    font-weight: bold;
  }
`;

const UserImage = styled.div`
  position: absolute;
  top: 20%;
  width: 30vh;
`;

const File = styled.div`
  img {
    position: relative;
    left: 8%;
    width: 50%;
    height: 50%;
  }
  label {
    margin: 20px;
    padding: 6px 25px;
    background-color: #ff6600;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
  .name {
    margin: 20px;
    display: inline-block;
    height: 40px;
    padding: 0 50px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    width: 90%;
    color: #999999;
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
    margin: 20px;
    background-color: #ffae00;
    border-radius: 1rem;
    font-weight: bold;
    width: 120px;
    height: 30px;
    border: none;
    :hover {
      background-color: #d17812;
      transition: 0.5s;
      cursor: pointer;
    }
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
  const isgooglelogin = useSelector(
    (state: RootState) => state.isgooglelogin.isgooglelogin
  );
  const check = useSelector((state: RootState) => state.modal.check);

  const [selectedFile, setselectedFile] = useState('');
  const [filename, setfilename] = useState('');
  const [nickname, setnickname] = useState('');
  const [profile, setprofile] = useState('');
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });

  useEffect(() => {
    axios.get('https://whoseidea.ml:8080/auth').then(data => {
      setnickname(data.data.nickname);
      setprofile(data.data.profile);
    });
  }, []);

  const handleFileInput = (event: any) => {
    setselectedFile(event.target.files[0]);
    setfilename(event.target.files[0].name);
  };
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

  const handleUserProfile = () => {
    axios
      .get(`https://whoseidea.ml:8080/user?nickname=${nickname}`)
      .then(data => setprofile(data.data.profile));
  };

  return (
    <div>
      <div>{check ? <Login /> : null}</div>
      <div>
        {isPc ? (
          <div>
            <Left>
              <Img>
                <div>당신의 아이디어가 세상을 바꿉니다</div>
                <img src="mypage.png" />
              </Img>
            </Left>
            <Right>
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
                    <Link to="/mycomment" className="text">
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
                    <Link to="/mychat" className="text ">
                      <div onClick={() => handleMychat()}>쪽지 보관함</div>
                    </Link>
                  </div>
                </Button>
              </UserContainer>
            </Right>
          </div>
        ) : (
          <div>
            <Left>
              <Mobileimg>
                <div>당신의 아이디어가 세상을 바꿉니다</div>
                <img src="mypage.png" />
              </Mobileimg>
              <Right>
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
                      <Link to="/mychat" className="text ">
                        <div onClick={() => handleMychat()}>쪽지 보관함</div>
                      </Link>
                    </div>
                  </Button>
                </UserContainer>
              </Right>
            </Left>
          </div>
        )}
      </div>
    </div>
  );
}
