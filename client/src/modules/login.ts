import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const LOGINDATA = 'login/logindata';
// 서버로 로그인한 유저데이터를 보내기 위해서 만들어진 state
export const logindata = createStandardAction(LOGINDATA)<object>();

const actions = { logindata };

type loginAction = ActionType<typeof actions>;

type loginState = {
  email: string;
  password: string;
};

const initialState: loginState = {
  email: '',
  password: '',
};

const login = createReducer<loginState, loginAction>(initialState, {
  [LOGINDATA]: (state, action) => ({ ...state, ...action.payload }),
});

export default login;
