import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const IDEALIST = 'idea/idealistdata';

export const idealistdata = createStandardAction(IDEALIST)<object>();

const actions = { idealistdata };

type idealistAction = ActionType<typeof actions>;

type idealistState = {
  file: any;
  nickname: string;
  caption: string;
  context: string;
  likes: number;
};

const initialState: idealistState = {
  file: '',
  nickname: '',
  likes: 0,
  caption: '',
  context: '',
};

const idealist = createReducer<idealistState, idealistAction>(initialState, {
  [IDEALIST]: (state, action) => ({ ...state, ...action.payload }),
});
export default idealist;
