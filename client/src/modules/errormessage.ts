import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const ERRORMESSAGE = 'error/errormessage';

export const errormessage = createStandardAction(ERRORMESSAGE)<object>();

const actions = { errormessage };

type errorAction = ActionType<typeof actions>;

type errorState = {
  errormessage: string;
};

const initialState: errorState = {
  errormessage: '',
};

const error = createReducer<errorState, errorAction>(initialState, {
  [ERRORMESSAGE]: (state, action) => ({ ...state, ...action.payload }),
});

export default error;
