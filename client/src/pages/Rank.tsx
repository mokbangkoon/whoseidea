import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import RankList from '../components/RankList';
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

export default function Rank() {
  const check = useSelector((state: RootState) => state.modal.check);

  return (
    <div>
      <Title>
        <div>최고의 아이디어</div>
      </Title>
      <RankList />
      {check ? <Login /> : null}
    </div>
  );
}
