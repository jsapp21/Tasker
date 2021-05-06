import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

        return (
            <div className="navBar">
                <h1 className="ui yellow left floated header">workspace</h1>


                <Link to='/notes/new'>
                    <button className="navButton">N</button>
                </Link>
               
                <Link to="/">
                    <button className="navButton">O</button>
                </Link>
            </div>
        )
}

export default Nav;
