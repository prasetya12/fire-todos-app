import authReducers from './authReducers'
import projectReducers from './projectReducers'
import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

const rootReducers = combineReducers({
    auth:authReducers,
    project:projectReducers,
    firebase: firebaseReducer,
    firestore :firestoreReducer
})

export default rootReducers