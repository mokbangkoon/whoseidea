import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.div`
  font-weight: bold;
  font-size: 100px;
  text-align: center;
  position: absolute;
  color: black;
  border-radius: 1rem;
  left: 25%;
  font-family: 'Courier New', Courier, monospace;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;
const Writer = styled.div`
  position: relative;
  top: 20px;
  left: 20%;
  font-weight: bold;
  font-family: sans-serif;
`;

const Data = styled.div`
  position: relative;
  top: 40px;
  left: 20%;
  font-weight: bold;
  font-family: sans-serif;
  font-size: xx-large;

  color: #0d084d;
`;

const Button = styled.div`
  & button {
    height: 50px;
    width: 200px;
    border-radius: 1rem;
    font-weight: bold;
    color: white;
    background-color: black;
    :hover {
      background-color: yellow;
      transition: 0.5s;
      width: 500px;
      color: #000000;
    }
  }
`;

const Container = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 700px;
  left: 300px;
  position: relative;
  background-color: gray;
  top: 130px;
`;

export default function Mychat({ chatData, handleToView }: any) {
  const check = useSelector((state: RootState) => state.modal.check);
  const reverse = (data: any) => {
    handleToView({ nickname: data });
  };
  return (
    <div>
      <Title>
        <div> 쪽지 보관함</div>
      </Title>
      {chatData === null || chatData.data.length === 0 ? null : (
        <div>
          <div>
            {chatData.data.map((el: any) => {
              const source = el.source;
              return (
                <div>
                  <Container>
                    <Writer>
                      <div>보낸 사람: {el.source}</div>
                    </Writer>
                    <Data>
                      <div> 내용: {el.text}</div>
                      <Link to="/chat">
                        <Button>
                          <button onClick={() => reverse(source)}>
                            {el.source}에게 답장하기
                          </button>
                        </Button>
                      </Link>
                    </Data>
                  </Container>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {check ? <Login /> : null}
    </div>
  );
}
