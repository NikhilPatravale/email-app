import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers'

const composeTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeTools(applyMiddleware(thunk)))