import { createStore, combineReducers } from 'redux'
import usStatesReducer from './reducers/usStatesReducer'

const reducer = combineReducers({
  usStatesReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store