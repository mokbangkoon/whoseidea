// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
import { deprecated, ActionType, createReducer } from 'typesafe-actions';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { islogin } from './islogin';
import { useNavigate } from 'react-router-dom';

const { createStandardAction } = deprecated;
const ISAUTHENTICATED = 'function/ISAUTHENTICATED';
const LOGOUT = 'function/LOGOUT';
// 액션 생성함수
export const isauthenticated = createStandardAction(ISAUTHENTICATED)();
export const logout = createStandardAction(LOGOUT)();

const actions = { isauthenticated, logout };
type Action = ActionType<typeof actions>;

// reducer생성
// 실질적으로 action들이 어떤 기능을 하는지 구현
type State = {
  isauthenticated: any;
  logout: any;
};

const initialState: State = {
  isauthenticated: function A() {
    console.log('a');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log('b');
    axios.post('https://localhost:4000/auth').then(res => {
      dispatch(islogin(false));
      console.log(res);
      navigate('/');
    });
  },
  logout: function B() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    axios.post('https://localhost:4000/logout').then(res => {
      dispatch(islogin(false));
      alert(res.data);
      navigate('/');
    });
  },
};

const functions = createReducer<State, Action>(initialState, {
  [ISAUTHENTICATED]: state => ({ ...state }),
  [LOGOUT]: state => ({ ...state }),
});

export default functions;
