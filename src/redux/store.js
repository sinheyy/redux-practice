import { createStore } from 'redux';
import reducer from './reducer/reducer';

let store = createStore(reducer);   // reducer가 store를 바꿔주는 함수

export default store