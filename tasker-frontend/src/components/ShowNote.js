import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteUserNote } from '../actions/users'
import { withRouter } from 'react-router-dom'


const ShowNote = (props) => {

    const handleClick = () => {
        props.deleteUserNote(props.note.id)
      
        fetch(`http://localhost:3000/notes/${props.note.id}`, { method: 'DELETE' })
        .then(resp => resp.json())
        .then(props.history.push('/notes'))

    }
    
    return (
        <div className="ui container">
            <div class="ui segments">
                <div class="ui segment"><h2 className="ui header">{props.note.title}</h2></div>
            <div class="ui segments">
                <div class="ui segment"><p className="ui grey">{props.note.content}</p></div>
        </div>
        <div class="ui horizontal segments">
            <div class="ui segment"><span className="ui grey">Due Date: {props.note.due_date} | </span>
                Priority: <span className={props.note.priority}>{props.note.priority}</span></div>
        </div>
            <div class="ui segment">
            <Link to='/notes'>
                <button className="ui blue mini button">Back</button>
            </Link>

            <button className="ui basic red right floated mini button" onClick={handleClick}>Delete</button>

            <Link to='/notes/edit'>
                <button className="ui basic right floated mini button">Edit</button>
            </Link>
            </div>
        </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteUserNote
}

export default withRouter(connect(null, mapDispatchToProps)(ShowNote));

