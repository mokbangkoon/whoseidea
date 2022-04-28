import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const SIGNUPDATA = 'sign/signupdata';

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
