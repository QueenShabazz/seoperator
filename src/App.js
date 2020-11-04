import React from 'react';
import Signup from './Signup/signup';
import Search from './Search/search';
import Login from './Login/login';
import Privacy from './Privacy/privacy';
import Layout from './Layout/layout';
import Blog from './Blog/blog';
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

function App() {
  console.log(localStorage.user)
  return (
    localStorage.user ?
    <>
    <Router history={history} basename='/' forceRefresh={true}>
      <Layout>
      <Switch>
        <Route exact path={["/blog", "/"]}>
          <Blog/>
        </Route>
        <Route exact path="/login">
        <Login />
      </Route>
       
      {/* <Route exact path="/search"> 
        <Search />
      </Route>     */}
      {/* <Route exact path="/signup">
           <Signup history/>
        </Route> */}
      <Route exact path="/privacy">
        <Privacy />
      </Route>
      </Switch> 
     </Layout>
    </Router>
</>:
<>
    <Router history={history} basename='/'>
      <Layout>
      <Switch>
        <Route exact path={["/blog", "/"]}>
          <Blog/>
        </Route>
        <Route exact path="/login">
        <Login />
      </Route>
       
      {/* <Route exact path="/search"> 
        <Search />
      </Route>     */}
      <Route exact path="/signup">
           <Signup history/>
        </Route>
      <Route exact path="/privacy">
        <Privacy />
      </Route>
      </Switch> 
     </Layout>
    </Router>
</>


  );
}

export default App;
