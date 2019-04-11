import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import currUse from './username'
import time from './time'

export default combineReducers({
  todos,
  visibilityFilter,
  currUse,
  time
})