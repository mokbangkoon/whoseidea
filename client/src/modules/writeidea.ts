import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const WRITEIDEA = 'write/writeideadata';
// 아이디어를 쓸때 필요한 양식들을 서버에 보내기 위해 만들어진 state
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
