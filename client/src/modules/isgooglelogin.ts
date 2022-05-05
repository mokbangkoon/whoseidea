import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const ISGOOGLELOGIN = 'googlelogin/isgooglelogin';

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
