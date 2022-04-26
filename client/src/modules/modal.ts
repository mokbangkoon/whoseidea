import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const OPENMODAL = 'modal/openModal';

export const openModal = createStandardAction(OPENMODAL)();

const actions = { openModal };

type ModalAction = ActionType<typeof actions>;

type ModalState = {
  check: boolean;
};

const initialState: ModalState = {
  check: false,
};

const modal = createReducer<ModalState, ModalAction>(initialState, {
  [OPENMODAL]: state => ({ check: !state.check }),
});

export default modal;
