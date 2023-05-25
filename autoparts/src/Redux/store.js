import {legacy_createStore} from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import {reducer} from '../Redux/reducer'

export const store =legacy_createStore(reducer)
console.log(store.getState())