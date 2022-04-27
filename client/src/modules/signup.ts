import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const SIGNUPDATA = 'signup/signupdata';

export const signdata = createStandardAction(SIGNUPDATA)<object>();

const actions = { signdata };

type signAction = ActionType<typeof actions>;

type signState = { email: string; password: string };

const initialState: signState = {
  email: '',
  password: '',
};

const sign = createReducer<signState, signAction>(initialState, {
  [SIGNUPDATA]: (state, action) => ({ ...state, ...action.payload }),
});

export default sign;
