import React, { Component } from 'react'
import HomeNote from './HomeNote'
import { connect } from 'react-redux'

class Home extends Component {
    
    renderNotes = () => {
        console.log(this.props.filter, 'funtion/home')
        const filterNotes = this.props.user.notes.filter(note => note.priority.includes(this.props.filter))
        return filterNotes.map(note => {
            return <HomeNote key={note.id} note={note} />
        })
    }

    render(){
        console.log(this.props.user)
        console.log(this.props.filter, 'render/home')
        return (
            <div>
                {this.renderNotes()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(Home);
