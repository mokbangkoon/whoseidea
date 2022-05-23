import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import RankList from '../components/RankList';
import { useMediaQuery } from 'react-responsive';
const Title = styled.div`
  font-weight: bold;
  font-size: 100px;
  text-align: center;
  position: absolute;
  color: #051225;
  border-radius: 1rem;
  left: 25%;
  font-family: 'Courier New', Courier, monospace;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;
const TitleM = styled.div`
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  position: absolute;
  top: 20%;
  color: #051225;
  border-radius: 1rem;
  left: 25%;
  font-family: 'Courier New', Courier, monospace;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;

export default function Rank() {
  // 랭크페이지
  // RankList를 컴포넌트로 썼음.
  // isPc가 true일때 데스크톱화면 (랭킹 1~10등 까지 출력) , false 일때 모바일 화면 (랭킹 1~3등 까지 출력)
  const check = useSelector((state: RootState) => state.modal.check);
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  return (
    <div>
      {isPc ? (
        <div>
          <Title>
            <div>최고의 아이디어</div>
          </Title>
          <RankList />
        </div>
      ) : (
        <div>
          <TitleM>
            <div>최고의 아이디어</div>
          </TitleM>
          <RankList />
        </div>
      )}
      {check ? <Login /> : null}
    </div>
  );
}
