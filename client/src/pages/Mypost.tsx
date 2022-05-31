import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const All = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 18.75%;
  right: 18.75%;
  top: 9.96%;
  bottom: 21.68%;
  width: 900px;
  height: 1150px;
  top: 204px;
  left: 270px;
  background: rgba(13, 52, 112, 0.8);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
`;
const Title = styled.div`
  position: absolute;
  width: 500px;
  height: 72px;
  left: 50%;
  top: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const Body = styled.div`
  position: absolute;
  width: 750px;
  height: 900px;
  left: 80px;
  right: 20px;
  top: 150px;
  background: #fafafa;
  border-radius: 55px;
`;
const Headertext = styled.div`
  position: absolute;
  width: 500px;
  height: 72px;
  left: 50px;
  top: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const Bodytext = styled.div`
  position: absolute;
  width: 400px;
  height: 72px;
  left: 220px;
  top: 200px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;
const Writer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 600px;
  height: 100px;
  background: #0d3470;
  border: 1px solid #000000;
  border-radius: 20px;
  box-sizing: border-box;
  position: absolute;
  width: 93.33px;
  height: 79.01px;
  background: #ffffff;
  border: 1px solid #000000;
`;
const Data = styled.div`
  position: relative;
  top: 170px;
  left: 20%;
  font-weight: bold;
  font-family: sans-serif;
  font-size: xx-large;

  & a {
    color: #f00101;
    text-decoration: none;
  }
`;

const OnlyData = styled.div`
  :hover {
    background-color: yellow;
    transition: 0.5s;
    width: 500px;
    color: Black;
    cursor: pointer;
  }
`;

export default function Mypost({ postData }: any) {
  // 나의 포스트보기 페이지
  // postData를 이용해서 내가 쓴 게시글을 map으로 뿌려서 볼 수 있다.
  // 클릭 시 해당 게시글 페이지로 이동한다.
  const check = useSelector((state: RootState) => state.modal.check);
  return (
    <div>
      <All>
        <Headertext>
          <h1>Whose idea?</h1>
        </Headertext>
        <Title>
          <div> 나의 아이디어</div>
        </Title>
        <Body>
          <Bodytext>
            <h1>나의 아이디어</h1>
          </Bodytext>
          {postData === null || postData.data.length === 0 ? null : (
            <div>
              <Writer>
                <div>작성자 : {postData.data[0].nickname}</div>
              </Writer>
              <Data>
                <div>
                  {postData.data.map((el: any) => (
                    <Link to={`/ideaview/${el.id}`}>
                      <OnlyData>
                        <div>{el.caption}</div>
                      </OnlyData>
                    </Link>
                  ))}
                </div>
              </Data>
            </div>
          )}
          {check ? <Login /> : null}
        </Body>
      </All>
    </div>
  );
}
