import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import axios from 'axios';
import styled from 'styled-components';
import { check } from 'prettier';
import { Link, useNavigationType } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { application } from 'express';
import { setFlagsFromString } from 'v8';

axios.defaults.withCredentials = true;

const MainStyle = styled.div`
  @media screen and (max-width: 1440px) {
    position: absolute;
    width: 1450px;
    height: 223px;
    left: -10px;
    top: 86px;
    background: url(대문1.png), #c4c4c4;
    border: 1px solid #000000;
    box-sizing: border-box;
  }
`;
export default function WriteIdea() {
  const writeidea = useSelector((state: RootState) => state.writeidea);
  const [title, setTitle] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [context, setContext] = useState<string>('');
  const [find, setFind] = useState<string>('');
  const [post, setPost] = useState<string>('');
  const [img, setImg] = useState<string>('');
  //   const onImgChange = async (event: any) => {
  //     setImgLoading(true)
  //     const formData = new FormData();
  //     formData.append('file', event.target.files[0]);
  //     const response = await apiClient.post('', formData);
  //     //response.data.location이 업로드한 파일의 url
  //     setImgLoading(false);
  //   }
  //   const onImgInputbtnClick = (event: any) => {
  //     event.preventDefault();
  //     ImgInput.current.click();
  //   };
  return (
    <MainStyle>
      <div className="header-container">
        <div className="conatainer">
          <h1 className="text">당신의 소중한 아이디어를 마음껏 작성하세요</h1>
          {/* <button>찾아보기
            <input
              ref={ImgInput}
              type="file"
              className="imgInput"
              id="Img"
              accept="img/*"
              name="file"
              onChange={onImgchange}
            />
          </button> */}
        </div>
      </div>
    </MainStyle>
  );
}
