import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const SIGNUPDATA = 'sign/signupdata';
// 회원 가입 시 필요한 유저데이터를 서버쪽에 보내기 위해서 만든 state
export const signupdata = createStandardAction(SIGNUPDATA)<object>();

const actions = { signupdata };

type signupAction = ActionType<typeof actions>;

type signupState = {
  email: string;
  password: string;
  nickname: string;
};

const initialState: signupState = {
  email: '',
  password: '',
  nickname: '',
};

const signup = createReducer<signupState, signupAction>(initialState, {
  [SIGNUPDATA]: (state, action) => ({ ...state, ...action.payload }),
});

export default signup;
