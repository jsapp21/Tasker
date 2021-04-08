import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { postNewUser } from '../actions/users'
import { Link } from 'react-router-dom'

class Signup extends Component {
  state = {
    name: '',
    error: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }
    
    this.setState({
      name: ''
    })

    fetch('http://localhost:3000/users', newUser)
    .then(resp => resp.json())
    .then(user => {
        if (user.error) {
            this.setState({
                error: user.error 
            })
        } else {
            this.props.postNewUser(user)
            this.props.history.push('/notes')
        }
    })

  }


  render() {

    return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment raised>
      <Header as='h2' color='yellow' textAlign='center'>
        TASKER
      </Header>
      {this.state.error ? <h5 style={{color: 'red'}}>{this.state.error}</h5> : null}
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name="name" onChange={this.handleChange} />

          <Button color='grey' fluid size='large'>
            Sign Up
          </Button>
        </Segment>
      </Form>
      <Message>
        Have an account? <Link to="/">Log In</Link>
      </Message>
    </Grid.Column>
  </Grid>
    )
  }
}

const mapDispatchToProps = {
  postNewUser
}
  
export default connect(null, mapDispatchToProps)(Signup);