import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const GOOGLEDATA = 'google/googledata';

export const googledata = createStandardAction(GOOGLEDATA)<object>();

const actions = { googledata };

type googledataAction = ActionType<typeof actions>;

type googledataState = {
  email: string;
  name: string;
};

const initialState: googledataState = {
  email: '',
  name: '',
};

const googledatas = createReducer<googledataState, googledataAction>(
  initialState,
  {
    [GOOGLEDATA]: (state, action) => ({ ...state, ...action.payload }),
  }
);

export default googledatas;
