import React from 'react';
import Signup from './Signup/signup';
import Search from './Search/search';
import Login from './Login/login';
import Privacy from './Privacy/privacy';
import Layout from './Layout/layout';
import Blog from './Blog/blog';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createHistory from 'history/createBrowserHistory';
import firebase from "firebase/app";
import "firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";

const history = createHistory();
const user = localStorage.user

function App() {
  return (
   user?
   <FirebaseAuthProvider firebase={firebase} {...config}>
    <>
    <BrowserRouter history={history} basename='/' forceRefresh={true}>
      <Layout>
      <Switch>
        <Route exact path={["/blog", "/"]}>
          <Blog/>
        </Route>
        <Route exact path="/login" render={(props)=>
       (    <Login {...props} />)}
      />
       
      {/* <Route exact path="/search"> 
        <Search />
      </Route>     */}
      {/* <Route exact path="/signup" render={(props)=>
       (    <Signup {...props} />)}
      /> */}
      <Route exact path="/privacy">
        <Privacy />
      </Route>
      </Switch> 
     </Layout>
    </BrowserRouter> 
</>
</FirebaseAuthProvider>
:
<FirebaseAuthProvider firebase={firebase} {...config}>
 <> 
 
    <BrowserRouter history={history} basename='/' forceRefresh={true}>
      <Layout>
      <Switch>
      <Route exact path={["/blog", "/"]}>
          <Blog/>
      </Route>
      <Route exact path="/login" render={(props)=>
       (    <Login {...props} />)}
      />
      {/* <Route exact path="/search"> 
        <Search />
      </Route>     */}
      <Route exact path="/signup" render={(props)=>
       (    <Signup {...props} />)}
      />
      <Route exact path="/privacy">
        <Privacy />
      </Route>
      </Switch> 
     </Layout>
    </BrowserRouter>
 </>
</FirebaseAuthProvider>
  );
}


export default App;
