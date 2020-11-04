import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from 'firebase/app';
import withFirebaseAuth from '../firebaseConfig';
import createHistory from 'history/createBrowserHistory';
//must go outside of class
const history = createHistory();

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      email: '',
      password: '',
      err: ''
    }
    this.logout = this.logout.bind(this);
    this.authListener = this.authListener.bind(this);
    this.handleChange = this.handleChange.bind(this);
    

  }
  
  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      history.go(0)


    }).catch((error) => {
      this.setState({err:error.message})
    });
  }

  logout(e) {
   
    e.preventDefault();
    firebase.auth().signOut()
    .then(
      function() {
      // Sign-out successful.
      history.go(0)

      
      this.setState({user: null})
      localStorage.removeItem('user')
      



    }).catch(function(error) {
      // An error happened.
    })
    

  }

  componentDidMount() {
    this.authListener();
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
        <div  id="login" style={{height: "15vh"}}></div>

        {this.state.user ? <> <h1 id="#login">
          Welcome Back {this.state.user.email}!
                </h1>  
          <Button onClick={this.logout}> Logout</Button></> :
          <div>
           <h1 id="#login">
          Login 
        </h1>
        {this.state.err}
        <div style={{ padding: 30 }}>
          <InputGroup className="mb-3" name="email" onChange={this.handleChange}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><span aria-label="email" role="img"> 📧</span></InputGroup.Text>
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
          <Button onClick={(e) => this.login(e)}>
            Login
          </Button>

        </div>
          </div>}
      </>
    )
  }
}