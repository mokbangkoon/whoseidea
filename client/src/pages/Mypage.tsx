import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';

export default function IdeaList() {
  const check = useSelector((state: RootState) => state.modal.check);

  return (
    <div>
      <div>여기는 마이 페이지입니다.</div>
      {check ? <Login /> : null}
    </div>
  );
}
