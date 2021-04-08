import React, { Component } from 'react'
import Nav from './Nav'
import Home from './Home'
import New from './New'
import Edit from './Edit'
import ViewNote from './ViewNote'
import Filter from './Filter'
import { Route, Switch } from 'react-router-dom'

class PageContainer extends Component {


    render(){
        return (
            <div className="ui segment">
                {<Nav />}
                {<Filter />}
                <Switch>
                    <Route path="/notes/view" component={ViewNote} />
                    <Route path="/notes/new" component={New} />
                    <Route path="/notes/edit" component={Edit} />
                    <Route exact path="/notes" component={Home} />
                </Switch>
                {/* <Redirect to={{pathname: '/', state: {from: this.props.location}}} /> */}
            </div>
        )
    }
}

export default PageContainer;
