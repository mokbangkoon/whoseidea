import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const IDEALIST = 'idea/idealistdata';

export const idealistdata = createStandardAction(IDEALIST)<object>();

const actions = { idealistdata };

type idealistAction = ActionType<typeof actions>;

type idealistState = {
  image: any;
  nickname: string;
  post: string;
  likes: number;
};

const initialState: idealistState = {
  image: '',
  nickname: '',
  likes: 0,
  post: '',
};

const idealist = createReducer<idealistState, idealistAction>(initialState, {
  [IDEALIST]: (state, action) => ({ ...state, ...action.payload }),
});
export default idealist;
