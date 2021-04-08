import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postUserNote } from '../actions/users'
import { withRouter } from 'react-router-dom'

class NewNoteForm extends Component {

  state = {
    title: '',
    content: '',
    priority: '',
    due_date: '',
    userId: this.props.user.id
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newNote = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }
    
    fetch(`http://localhost:3000/notes/`, newNote)
    .then(resp => resp.json())
    .then(note => { 
      this.props.postUserNote(note)
      this.props.history.push('/notes')
    })

}

  render() {
    
    return (
      <div>
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h2 className="ui blue header">Create a new note:</h2>
        <div className="equal width fields">
            <div className="field">
                <label>Note Title:</label>
                <div className="ui input">
                    <input type="text" name="title" placeholder="Note Title" onChange={this.handleChange}/>
                </div>
            </div>
            <div className="field">
                <label>Due Date:</label>
                <input type="date" name="due_date" onChange={this.handleChange} />
            </div>
        </div>
        <div className="field">
            <label>Priority</label>
            <select className="ui dropdown" name="priority" onChange={this.handleChange}>
                <option>---Priorty Type---</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        </div>
            <div className="field">
                <label>Content:</label>
                <textarea placeholder="Note description..." rows="3" name="content" onChange={this.handleChange}></textarea>
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
    postUserNote
 }
      
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewNoteForm));
      

