import React, { Component } from 'react'
import ShowNote from './ShowNote'
import { connect } from 'react-redux'

class ViewNote extends Component {
    
    renderNote = () => {
        const filteredNote = this.props.user.notes.filter(note => note.id === this.props.noteId)
        return filteredNote.map(note => {
            return <ShowNote key={note.id} note={note} />
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

export default connect(mapStateToProps)(ViewNote);