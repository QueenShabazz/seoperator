import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import { withRouter } from 'react-router';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      email: '',
      password: '',
      err: ''
    }
    this.signup = this.signup.bind(this);
    this.authListener = this.authListener.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  signup(e, err) {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => { 
      // window.location.reload(false)
      history.go(0)
    })
    .catch((error) => {
      console.error(error)
        this.setState({ err: error.message })
    })
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
        localStorage.setItem('user', user.uid)
      } else {
        this.setState({ user: null })
        localStorage.removeItem('user')
      }
    })
  }
  render() {
    return (
      <>
      <div  id="signup" style={{height: "15vh"}}></div>
        <h1 id="#login">
          Signup 
        </h1>
        {this.state.err}
        <div style={{ padding: 30 }}>
          <InputGroup className="mb-3" name="email" onChange={this.handleChange}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><span aria-label="password" role="img">📧</span></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="email"
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3" name="password" onChange={this.handleChange}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><span aria-label="password" role="img">🔒</span></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="password"
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button onClick={(e) => this.signup(e, this.state.err)}>
            Sign Up
          </Button>

        </div>
      </>
    )
  }
}

export default withRouter(Signup)