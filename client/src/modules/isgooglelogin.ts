import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const ISGOOGLELOGIN = 'googlelogin/isgooglelogin';
// 구글로그인이 됐는지 안됐는지 판단해주는 state
export const googlelogin = createStandardAction(ISGOOGLELOGIN)<boolean>();

const actions = { googlelogin };

type googleloginAction = ActionType<typeof actions>;

type googleloginState = {
  isgooglelogin: boolean;
};

const initialState: googleloginState = {
  isgooglelogin: false,
};

const isgooglelogin = createReducer<googleloginState, googleloginAction>(
  initialState,
  {
    [ISGOOGLELOGIN]: (state, action) => ({ isgooglelogin: action.payload }),
  }
);

export default isgooglelogin;
