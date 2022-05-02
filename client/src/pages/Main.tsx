import React from 'react';
import styled from 'styled-components';
import axios, { Axios } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Slide from '../components/Slidebar';
const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;

axios.defaults.withCredentials = true;

const All = styled.div`
  background-color: black;
  height: 200vw;
`;

const MainStyle = styled.div`
  background-color: #000000;
  font-weight: bold;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 300px;
  width: 80%;
  position: absolute;
  left: 10%;
  top: 120%;
  font-size: 1rem;
  border-radius: 1rem;
  grid-column-gap: 2rem;
  line-height: 300px;
`;
const Title = styled.div`
  background-image: url('ㅇㅇ.png');
  background-size: 100%;
  background-color: #879eb3;
  border-radius: 1rem;
  font-weight: bold;
  border: 3px solid black;
  width: 60%;
  left: 20%;
  height: 850px;
  text-align: center;
  font-size: 5rem;
  color: #f7f8fc;
  position: relative;
  line-height: 100px;
`;
const First = styled.div`
  border: 3px solid red;
  border-radius: 1rem;
  color: white;
`;
const Second = styled.div`
  border: 3px solid blue;
  border-radius: 1rem;
  color: white;
`;
const Third = styled.div`
  border: 3px solid orange;
  border-radius: 1rem;
  color: white;
`;
const PositionContainer = styled.div`
  position: absolute;
  top: 180%;
  left: 10%;
`;
const Container = styled.div`
  width: 60%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  background-color: black;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;
const TextContainer = styled.div`
  position: absolute;
  top: 178%;
  left: 65%;
  background-color: #000000;
  width: 25%;
  height: 70%;
  color: white;
  font-weight: bold;
  font-size: x-large;
  margin: 10px;
  padding: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  text-shadow: 2px 2px 0px #bdbdbd;

  & button {
    position: relative;
    left: 10%;
    width: 70%;
    height: 100px;
    border-radius: 1rem;
    font-size: xx-large;
    font-weight: bold;
    background-color: #e0d424;
    :hover {
      background-color: #c72121;
      transition: 0.5s;
      cursor: pointer;
    }
  }
`;

export default function Main({
  handleResponseSuccess,
}: any): React.ReactElement {
  const TOTAL_SLIDES = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const check = useSelector((state: RootState) => state.modal.check);

  useEffect(() => {
    slideRef.current!.style.transition = 'all 0.5s ease-in-out';
    slideRef.current!.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <div>
      <All>
        <Title></Title>
        <MainStyle>
          <First>
            <h1>세상의 모든 아이디어 모음</h1>
          </First>
          <Second>
            <h1>당신의 아이디어를 알려주세요!</h1>
          </Second>
          <Third>
            <h1>세상을 바꿀 단 하나의 아이디어</h1>
          </Third>
        </MainStyle>
        <PositionContainer>
          <Container>
            <SliderContainer ref={slideRef}>
              <Slide img={'전구.png'} />
              <Slide img={'랭킹.jpg'} />
              <Slide img={'독창적인아이디어.jpg'} />
            </SliderContainer>
            <Button onClick={prevSlide}>Prev</Button>
            <Button onClick={nextSlide}>Next</Button>
          </Container>
        </PositionContainer>
        {currentSlide === 0 ? (
          <TextContainer>
            <h2>갑자기 생각난 독특한 아이디어가 있으신가요?</h2>

            <ul>당신도 최고의 아이디어가 될 수 있습니다!</ul>
            <ul>하나밖에 없는 당신의 아이디어를 써보세요!</ul>
            <Link to="/idealist">
              <button>시작하기</button>
            </Link>
          </TextContainer>
        ) : null}
        {currentSlide === 1 ? (
          <TextContainer>
            <h2>최고의 아이디어를 보고 싶으신가요?</h2>

            <ul>가장 인기있는 아이디어를 볼 수 있습니다!</ul>
            <ul>유저들의 기발한 아이디어를 구경해보세요!</ul>
            <Link to="/rank">
              <button>구경하기</button>
            </Link>
          </TextContainer>
        ) : null}
        {currentSlide === 2 ? (
          <TextContainer>
            <h2>아이디어를 활용하고 싶으신가요?</h2>
            <ul>해당 유저에게 쪽지를 보내보세요!</ul>
            <ul>당신의 쪽지를 수많은 사람들이 기다립니다!</ul>
            <ul>일단 아이디어를 구경하러 가볼까요?</ul>
            <Link to="/idealist">
              <button>구경하기</button>
            </Link>
          </TextContainer>
        ) : null}
        {check ? <Login handleResponseSuccess={handleResponseSuccess} /> : null}
      </All>
    </div>
  );
}
