import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { islogin } from '../modules/islogin';
import { useState, useEffect } from 'react';
import { googlelogin } from '../modules/isgooglelogin';
import { RootState } from '../modules';
import { openModal } from '../modules/modal';
import { googledata } from '../modules/googledata';
import axios from 'axios';

export default function Googlelogin() {
  //클라이언트 ID (환경변수)
  const googleClientId: any = process.env.REACT_APP_GOOGLE_API_KEY;
  const googledatas = useSelector((state: RootState) => state.googledatas);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //사용자 정보를 담아둘 unpm serObj

  //로그인 성공시 res처리
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
