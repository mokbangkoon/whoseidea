import axios from 'axios';
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googlelogin } from '../modules/isgooglelogin';
import { islogin } from '../modules/islogin';
export default function Googlelogout() {
  // googleclientid를 .env 파일에서 가져온다.
  // 로그아웃시 axios로 전달
  // 모든 로그인 기능 false
  // 메인으로 돌아오기
  const googleClientId: any = process.env.REACT_APP_GOOGLE_API_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.post('https://whoseidea.ml:8080/logout');
    dispatch(googlelogin(false));
    dispatch(islogin(false));
    alert("you're logged out!!!");
    navigate('/');
  };
  // 구글로그아웃 성공시 handleLogout 함수 실행
  return (
    <GoogleLogout
      clientId={googleClientId}
      buttonText="Logout"
      onLogoutSuccess={handleLogout}
    ></GoogleLogout>
  );
}
