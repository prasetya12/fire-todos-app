import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase'
import rootReducer from './store/reducers/rootReducer'
import fbConfig from '../src/config/fbConfig'


const middlewares = [
  thunk.withExtraArgument(getFirebase)
]
const store = createStore(
  makeRootReducer(),
  initialState,
  compose(
    applyMiddleware(...middlewares),
  )
);
