import React, { Component } from 'react'
import EditNoteForm from './EditNoteForm'
import { connect } from 'react-redux'

class Edit extends Component {

    renderNote = () => {
        const filteredNote = this.props.user.notes.filter(note => note.id === this.props.noteId)
        return filteredNote.map(note => {
            return <EditNoteForm key={note.id} note={note} />
        })
    }

    render(){
        return (
            <div>
                {this.renderNote()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        noteId: state.noteId
    }
}

export default connect(mapStateToProps)(Edit);