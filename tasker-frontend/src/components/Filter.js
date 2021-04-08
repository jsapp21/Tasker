import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterNotes } from '../actions/users'

class Filter extends Component {

    state = {
        priority: ""
      }

    handleClick = (e) => {
          this.props.filterNotes(e.target.value)
    }

    handleComplete = (e) => {
        this.props.filterNotes(e.target.value)
    }
        
    render(){
            
    return(
        <div>
            <form className="ui form">
                <label>Filter by:</label>
                <div className="equal width fields">
                <div className="field">
                    <select className="ui dropdown" name="priority" onChange={this.handleClick}>
                        <option value="">All Priorities</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                </div>
            </form>
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        filter: state.priority
    }
}

const mapDispatchToProps = {
    filterNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);