import styled from 'styled-components';
const Title = styled.h1`
  color: white;
  position: absolute;
  top: 200%;
`;
export default function Introduction() {
  return (
    <div>
      <Title>
        <h1>Whose idea?</h1>
      </Title>
      <p>
        <div>세상의 모든 아인슈타인 분들에게..</div>
        <div>지금 무슨 생각을 하고 계신가요?</div>
        <div>한숨 푹 자고 일어난 아침..</div>
        <div>머리속에 번쩍 아이디어가 떠오르신적 있으신가요?</div>
        <div>그 소중한 아이디어를 그냥 지나쳐서 잊어먹지 마시고</div>
        <div>저희 Whose Idea 에 공유해주세요! </div>
        <div>당신의 작은 아이디어 하나가 세상을 바꿀수도 있습니다!</div>
      </p>
    </div>
  );
}
