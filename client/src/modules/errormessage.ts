import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const ERRORMESSAGE = 'error/errormessage';
const EMAILCHECK = 'error/emailcheck';
const PASSWORDCHECK = 'error/passwordcheck';

export const errormessage = createStandardAction(ERRORMESSAGE)<object>();
export const emailmessage = createStandardAction(EMAILCHECK)<object>();
export const passwordmessage = createStandardAction(PASSWORDCHECK)<object>();

const actions = { errormessage, emailmessage, passwordmessage };

type errorAction = ActionType<typeof actions>;

type errorState = {
  errormessage: string;
  emailmessage: string;
  passwordmessage: string;
};

const initialState: errorState = {
  errormessage: '',
  emailmessage: '',
  passwordmessage: '',
};

const error = createReducer<errorState, errorAction>(initialState, {
  [ERRORMESSAGE]: (state, action) => ({ ...state, ...action.payload }),
  [EMAILCHECK]: (state, action) => ({ ...state, ...action.payload }),
  [PASSWORDCHECK]: (state, action) => ({ ...state, ...action.payload }),
});

export default error;
