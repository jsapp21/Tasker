import { combineReducers } from 'redux'
import { usersReducer } from './users'
import { filterReducer } from './users'
import { noteIdReducer}  from './notes'


export default combineReducers({
    user: usersReducer,
    noteId: noteIdReducer,
    filter: filterReducer
})