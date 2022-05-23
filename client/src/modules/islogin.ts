import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const ISLOGIN = 'login/islogin';
// 일반 사용자 로그인이 됐는지 안됐는지 판단해주는 state
export const islogin = createStandardAction(ISLOGIN)<boolean>();

const actions = { islogin };

type isloginAction = ActionType<typeof actions>;

type isloginState = {
  islogin: boolean;
};

const initialState: isloginState = {
  islogin: false,
};

const islogincheck = createReducer<isloginState, isloginAction>(initialState, {
  [ISLOGIN]: (state, action) => ({ islogin: action.payload }),
});

export default islogincheck;
