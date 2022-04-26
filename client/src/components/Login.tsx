import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Login() {
  return (
    <div>
      <input placeholder="이메일을 입력하세요"></input>
      <div>
        <input placeholder="비밀번호를 입력하세요"></input>
      </div>
      <button>로그인</button>
      <div>구글 아이디로 로그인</div>
      <div>깃허브 아이디로 로그인</div>
      <div>
        아직 회원이 아니신가요?
        <span>회원가입</span>
      </div>
    </div>
  );
}
