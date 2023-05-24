import {legacy_createStore} from 'redux'

import {reducer} from '../Redux/reducer'

let store =legacy_createStore(reducer)