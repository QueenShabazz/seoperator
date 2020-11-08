import React from 'react';
import Signup from './Signup/signup';
import Search from './Search/search';
import Login from './Login/login';
import Privacy from './Privacy/privacy';
import Layout from './Layout/layout';
import Blog from './Blog/blog';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createHistory from 'history/createBrowserHistory';
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider
} from "react-firebase-auth-provider";
import AdSense from 'react-adsense';

const history = createHistory();
const user = localStorage.user
const config = {
  apiKey: "AIzaSyBucgtabvE1xYbbvrtRy-Vja9X5DzaS3-Y",
  authDomain: "seosift.firebaseapp.com",
  databaseURL: "https://seosift.firebaseio.com",
  projectId: "seosift",
  storageBucket: "seosift.appspot.com",
  messagingSenderId: "7941375871",
  appId: "1:7941375871:web:4131f01d6e9b4813ad3c4a",
  measurementId: "G-0V33FT5SN2"
};

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
    <AdSense.Google
  client='ca-pub-8988366551421623'
  slot='4555630407'
  // style={{ display: 'block' }}
  // layout='in-article'
  // format='fluid'
/>
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
 <AdSense.Google
 client='ca-pub-8988366551421623'
 slot='4555630407'
 // style={{ display: 'block' }}
 // layout='in-article'
 // format='fluid'
/>
</FirebaseAuthProvider>
  );
}


export default App;
