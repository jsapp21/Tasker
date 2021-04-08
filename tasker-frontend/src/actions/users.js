export const postNewUser = (user) => {
    return {
      type: 'POST_NEW_USER',
      user
    }
}

export const patchUserNote = (note) => {
  return {
    type: 'PATCH_NOTE_SUCCESS',
    note
  }
}

export const postUserNote = (note) => {
  return {
    type: 'POST_NOTE_SUCCESS',
    note
  }
}

export const deleteUserNote = (id) => {
  return {
    type: 'DELETE_NOTE_SUCCESS',
    id
  }
}

export const filterNotes = (priority) => {
  return {
    type: 'PRIORITY_SUCCESS',
    priority
  }
}

export const completeNote = (note) => {
  return {
    type: 'COMPLETE_NOTE',
    note
  }
}

