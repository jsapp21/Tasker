export const noteIdReducer = (state=null, action) => {
    switch(action.type) {
        case 'VIEW_NOTE':
            return action.id
        case 'EDIT_NOTE':
            return action.id
        default:
            return state
    }
}
