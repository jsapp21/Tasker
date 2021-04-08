import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

        return (
            <div className="ui raised blue segment">
                <h1 className="ui yellow left floated header">TASKER</h1>

                <Link to='/notes/new'>
                    <button className="ui yellow right floated mini button">New Note</button>
                </Link>
               
                <Link to="/">
                    <button className="ui blue right floated mini button">Log Off</button>
                </Link>
      
                <div className="ui clearing divider"></div>

            </div>
        )
}

export default Nav;
