import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const ISLOGIN = 'login/islogin';

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
