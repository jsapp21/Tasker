export const usersReducer = (state={}, action) => {
    let updatedState
    switch(action.type) {
        case 'POST_NEW_USER':
            return {
                ...action.user
            }
        case 'PATCH_NOTE_SUCCESS':
            updatedState = state.notes.map(note => {
                if (note.id === action.note.id) {
                    return action.note
                } else {
                    return note
                }
            })
            return {
                ...state, 
                notes: updatedState
            }
        case 'POST_NOTE_SUCCESS':
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        case 'DELETE_NOTE_SUCCESS':
            updatedState = state.notes.filter(note => note.id !== action.id)
            return {
                ...state,
                notes: updatedState
            }
        case 'COMPLETE_NOTE':
            updatedState = state.notes.map(note => {
                if (note.id === action.note.id) {
                    return action.note
                } else {
                    return note
                }
            })
            return {
                ...state,
                notes: updatedState
            }
        default:
            return state
    }
}

export const filterReducer = (state="", action) => {
    switch (action.type) {
        case 'PRIORITY_SUCCESS':
            return action.priority
        default:
            return state
    }
}

