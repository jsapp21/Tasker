import React, { Component } from 'react'
import { connect } from 'react-redux'
import { patchUserNote } from '../actions/users'
import { withRouter } from 'react-router-dom'
  
class EditNoteForm extends Component {
    state = {
        title: this.props.note.title,
        content: this.props.note.content,
        priority: this.props.note.priority,
        due_date: this.props.note.due_date
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    
        const editedNote = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state)
        }
        
        fetch(`http://localhost:3000/notes/${this.props.noteId}`, editedNote)
        .then(resp => resp.json())
        .then(note => { 
          this.props.patchUserNote(note)
          this.props.history.push('/notes')
        })
    
    }

    render() {
        return (
            <div>
            <form className="ui form" onSubmit={this.handleSubmit}>
              <h2 className="ui blue header">Edit note:</h2>
              <div className="equal width fields">
                  <div className="field">
                      <label>Note Title:</label>
                      <div className="ui input">
                          <input type="text" name="title" placeholder="Note Title" defaultValue={this.props.note.title} onChange={this.handleChange}/>
                      </div>
                  </div>
                  <div className="field">
                      <label>Due Date:</label>
                      <input type="date" name="due_date" defaultValue={this.props.note.due_date} onChange={this.handleChange} />
                  </div>
              </div>
              <div className="field">
                  <label>Priority</label>
                  <select className="ui dropdown" name="priority" defaultValue={this.props.note.priority} onChange={this.handleChange}>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                  </select>
              </div>
                  <div className="field">
                      <label>Content:</label>
                      <textarea placeholder="Note description..." rows="3" name="content" defaultValue={this.props.note.content} onChange={this.handleChange}></textarea>
                  </div>
                  
                  <div className="field">
                      <button className="ui blue mini button">Submit</button>
                  </div>
          </form>
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

const mapDispatchToProps = {
   patchUserNote
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditNoteForm));
