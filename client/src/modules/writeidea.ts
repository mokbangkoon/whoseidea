import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const WRITEIDEA = 'write/writeideadata';

export const writeideadata = createStandardAction(WRITEIDEA)<object>();

const actions = { writeideadata };

type WriteideaAction = ActionType<typeof actions>;

type WriteideaState = {
  title: string;
  nickname: string;
  context: string;
  file: string;
};

const initialState: WriteideaState = {
  title: '',
  nickname: '',
  context: '',
  file: '',
};

const writeidea = createReducer<WriteideaState, WriteideaAction>(initialState, {
  [WRITEIDEA]: (state, action) => ({ ...state, ...action.payload }),
});
export default writeidea;
