import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googlelogin } from '../modules/isgooglelogin';
import { islogin } from '../modules/islogin';
export default function Googlelogout() {
  const googleClientId: any = process.env.REACT_APP_GOOGLE_API_KEY;
  // 만료일을 예전으로 설정해 쿠키를 지웁니다.

  const deleteCookie = (name: string) => {
    const date = new Date('2020-01-01').toUTCString();

    document.cookie = name + '=; expires=' + date;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(googlelogin(false));
    dispatch(islogin(false));
    alert("you're logged out!!!");
    navigate('/');
    deleteCookie('G_AUTHUSER_H=0');
  };

  return (
    <GoogleLogout
      clientId={googleClientId}
      buttonText="Logout"
      onLogoutSuccess={handleLogout}
    ></GoogleLogout>
  );
}
