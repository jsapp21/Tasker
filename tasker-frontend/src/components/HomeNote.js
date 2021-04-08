import React from 'react'
import { Link } from 'react-router-dom'
import { viewNote, editNote} from '../actions/notes'
import { completeNote } from '../actions/users'
import { connect } from 'react-redux'

const HomeNote = (props) => {

    const handleView = () => {
        props.viewNote(props.note.id)
    }

    const handleEdit= () => {
        props.editNote(props.note.id)
    }

    const handleCompelte= () => {
        const note = {
            id: props.note.id,
            complete: !props.note.complete
        }

        const noteObj = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
          }

        fetch('http://localhost:3000/complete', noteObj)
        .then(resp => resp.json())
        .then(note => {
            console.log(note)
            props.completeNote(note)
        })

    }
 
        return (
           <div className="ui container">
            <div className="ui very relaxed two column grid">
                <div className="column">
                    <h2 className="ui header" style={props.note.complete ? { textDecorationLine: 'line-through' } : null}>{props.note.title}</h2>
                    <span className="ui grey">Due Date: {props.note.due_date} | Priority:</span> <span className={props.note.priority}>{props.note.priority}</span>
                </div>
                <div className="column">
                <Link to='/notes/view'>
                    <button className="ui basic right floated mini button" onClick={handleView}>View</button>
                </Link>
                <Link to='/notes/edit'>
                    <button className="ui basic right floated mini button" onClick={handleEdit}>Edit</button>
                </Link>
                <button className="ui basic right floated mini button" onClick={handleCompelte}>Complete</button>
                </div>
            </div>
                <div className="ui divider"></div>
           </div>
        )
    
}

const mapDispatchToProps = {
    viewNote,
    editNote,
    completeNote
}

export default connect(null, mapDispatchToProps)(HomeNote);