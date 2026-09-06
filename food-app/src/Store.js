import { createStore, combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { CounterReducer } from './CounterReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  counter: CounterReducer
});

export const Store = createStore(rootReducer);