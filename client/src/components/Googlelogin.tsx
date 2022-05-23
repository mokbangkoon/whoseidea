import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { islogin } from '../modules/islogin';
import { googlelogin } from '../modules/isgooglelogin';
import { openModal } from '../modules/modal';

import axios from 'axios';

export default function Googlelogin() {
  //클라이언트 ID (환경변수)
  const googleClientId: any = process.env.REACT_APP_GOOGLE_API_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 로그인 성공시 res처리
  // 사용자 정보를 담아둘 userInfo를 객체로 만들어서 axios로 전달
  // 로그인 기능 모두 true로 전환
  // main으로 다시 돌아옴
  const onLoginSuccess = (res: any) => {
    const googleUserInfo = {
      email: res.profileObj.email,
      name: res.profileObj.name,
    };

    dispatch(openModal());
    dispatch(googlelogin(true));
    dispatch(islogin(true));
    axios.post('https://whoseidea.ml:8080/signup', googleUserInfo);
    navigate('/');
  };

  // 구글로그인에 성공하면 onLoginSuccess 함수 실행
  // 구글로그인에 실패하면 에러메세지 콘솔에 출력
  // 구글 이미지를 기본이미지가 아닌 구글로그인이미지로 대체
  return (
    <div>
      <GoogleLogin
        clientId={googleClientId}
        onSuccess={result => onLoginSuccess(result)}
        onFailure={result => console.log(result)}
        render={renderProps => (
          <div onClick={renderProps.onClick}>
            <img src="구글로그인.png"></img>
          </div>
        )}
      />
    </div>
  );
}
