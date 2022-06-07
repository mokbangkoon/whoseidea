import { combineReducers } from 'redux';
import modal from './modal';
import login from './login';
import error from './errormessage';
import signup from './signup';
import islogincheck from './islogin';
import idealist from './idealist';
import isgooglelogin from './isgooglelogin';
import googledatas from './googledata';
import writeidea from './writeidea';
// combineReducer로 리듀서들 합쳐줌
const rootReducer = combineReducers({
  modal,
  login,
  error,
  signup,
  islogincheck,
  idealist,
  isgooglelogin,
  googledatas,
  writeidea,
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;
