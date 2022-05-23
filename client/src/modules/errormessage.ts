import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;
// 에러메세지 핸들링 -> 유효성 검사에 사용
const ERRORMESSAGE = 'error/errormessage';
const EMAILCHECK = 'error/emailcheck';
const PASSWORDCHECK = 'error/passwordcheck';
const NICKNAMECHECK = 'error/nicknamecheck';

export const errormessage = createStandardAction(ERRORMESSAGE)<object>();
export const emailmessage = createStandardAction(EMAILCHECK)<object>();
export const passwordmessage = createStandardAction(PASSWORDCHECK)<object>();
export const nicknamemessage = createStandardAction(NICKNAMECHECK)<object>();

const actions = {
  errormessage,
  emailmessage,
  passwordmessage,
  nicknamemessage,
};

type errorAction = ActionType<typeof actions>;

type errorState = {
  errormessage: string;
  emailmessage: string;
  passwordmessage: string;
  nicknamemessage: string;
};

const initialState: errorState = {
  errormessage: '',
  emailmessage: '',
  passwordmessage: '',
  nicknamemessage: '',
};

const error = createReducer<errorState, errorAction>(initialState, {
  [ERRORMESSAGE]: (state, action) => ({ ...state, ...action.payload }),
  [EMAILCHECK]: (state, action) => ({ ...state, ...action.payload }),
  [PASSWORDCHECK]: (state, action) => ({ ...state, ...action.payload }),
  [NICKNAMECHECK]: (state, action) => ({ ...state, ...action.payload }),
});

export default error;
