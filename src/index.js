import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer'
import {createStore,applyMiddleware,compose} from 'redux'
import firebase from 'firebase/app'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
// import {getFirestore} from 'redux-firestore'
// import {getFirebase,reactReduxFirebase} from 'react-redux-firebase'
import { createFirestoreInstance,getFirestore } from 'redux-firestore'
import fbConfig from '../src/config/fbConfig'
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'



const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(fbConfig),
        // reactReduxFirebase(fbConfig,{useFirestoreForProfile: true,userProfile: 'users'})
    )
)

const rrfConfig={
    useFirestoreForProfile: true,userProfile: 'users'
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }

    ReactDOM.render(
        <Provider store={store}>
           <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
           </ReactReduxFirebaseProvider>
        </Provider>, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
