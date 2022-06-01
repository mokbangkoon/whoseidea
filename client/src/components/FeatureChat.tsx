import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  justify-content: center;
`;
const GifContainer = styled.div`
  img {
    width: 500px;
    height: 400px;
    padding: 20px;
  }
`;
export default function FeatureChat() {
  return (
    <div>
      <Container>
        <Text>
          <h1> 쪽지 보내기 </h1>
          <h2> 마음에 드는 아이디어가 있다면 쪽지를 보내보세요!</h2>
          <h3> 아이디어 제작자와 소통할 수 있습니다.</h3>
        </Text>
        <GifContainer>
          <img src="쪽지 보내기.gif" />
        </GifContainer>
      </Container>
    </div>
  );
}
