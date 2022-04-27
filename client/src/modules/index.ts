import { combineReducers } from 'redux';
import counter from './counter';
import modal from './modal';
import login from './login';
<<<<<<< HEAD
import sign from './signup';
=======
import error from './errormessage';

>>>>>>> a28667c44331abdb6b56fa55621389bebea2caa4
const rootReducer = combineReducers({
  counter,
  modal,
  login,
<<<<<<< HEAD
  sign,
=======
  error,
>>>>>>> a28667c44331abdb6b56fa55621389bebea2caa4
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;
