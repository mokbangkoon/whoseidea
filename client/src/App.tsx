import { useEffect, useState } from 'react';
import Main from './pages/Main';
import Headerbar from './components/Headerbar';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import IdeaList from './pages/IdeaList';
import Rank from './pages/Rank';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Mypage from './pages/Mypage';
import Updatepro from './pages/Updatepro';
import { islogin } from './modules/islogin';
import Signout from './pages/Signout';
import Mypost from './pages/Mypost';
import ChangePassword from './pages/ChangePassword';
import Chat from './pages/Chat';
import Mychat from './pages/Mychat';
import Mycomment from './pages/Mycomment';
import IdeaView from './pages/IdeaVIew';
import WriteIdea from './pages/WriteIdea';

function App() {
  // usernickname, postData, commnetData , chatData, writerDAta, postDatas 를 관리하는 곳
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usernickname, setusernickname] = useState('');
  const [postData, setpostData] = useState<AxiosResponse | null | void>(null);
  const [commentData, setcommentData] = useState<AxiosResponse | null | void>(
    null
  );
  const [chatData, setchatData] = useState<AxiosResponse | null | void>(null);
  const [writerdata, serwriterdata] = useState('');
  const [postDatas, setpostDatas] = useState({});
  // 앱 시작시 권한여부 검사
  // 권한요청 성공시 usernickname에 유저닉네임 저장 , 로그인체크 true로 바꿈
  const isAuthenticated = () => {
    axios.get('https://whoseidea.ml:8080/auth').then(data => {
      setusernickname(data.data.nickname);
      dispatch(islogin(true));
      navigate('/');
    });
  };
  // 권한여부검사 시작해주는 함수
  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  // postData 세팅
  const handleMypost = () => {
    axios
      .get(`https://whoseidea.ml:8080/user/my-post?nickname=${usernickname}`)
      .then(data => setpostData(data));
  };
  // commentData 세팅
  const handleMycomment = () => {
    axios
      .get(`https://whoseidea.ml:8080/user/my-comment?nickname=${usernickname}`)
      .then(data => setcommentData(data));
  };
  // chatData 세팅
  const handleMychat = () => {
    axios
      .get(`https://whoseidea.ml:8080/message`)
      .then(data => setchatData(data));
  };
  // 로그아웃 시 서버에 요청하고 로그인체크 false로 만들고 메인으로 돌아감
  const handleLogout = () => {
    axios.post('https://whoseidea.ml:8080/logout').then(() => {
      dispatch(islogin(false));
      navigate('/');
    });
  };
  // ideaview 페이지 볼 때 글쓴이 이름 고정
  const handleIdeaView = (name: string) => {
    serwriterdata(name);
  };
  // post눌렀을 때 유저 데이터들을 모아주는 postDatas
  const handleToView = (post: object) => {
    setpostDatas(post);
  };
  // 첫 화면 렌더링 시 권한요청먼저 함
  useEffect(() => {
    isAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Headerbar handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Main handleResponseSuccess={handleResponseSuccess} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rank" element={<Rank />} />
        <Route
          path="/idealist"
          element={<IdeaList handleToView={handleToView} />}
        />
        <Route path="/writeidea" element={<WriteIdea />} />
        <Route
          path="/mypage"
          element={
            <Mypage
              handleMypost={handleMypost}
              handleMycomment={handleMycomment}
              handleMychat={handleMychat}
            />
          }
        />
        <Route path="/updatepro" element={<Updatepro />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/mypost" element={<Mypost postData={postData} />} />
        <Route
          path="/mycomment"
          element={<Mycomment commentData={commentData} />}
        />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route
          path="/chat"
          element={<Chat writerdata={writerdata} postDatas={postDatas} />}
        />
        <Route
          path="/mychat"
          element={<Mychat chatData={chatData} handleToView={handleToView} />}
        />
        <Route
          path="/ideaview/:id"
          element={
            <IdeaView
              handleIdeaView={handleIdeaView}
              usernickname={usernickname}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
