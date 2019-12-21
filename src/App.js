import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import ListofJobs from './Pages/ListofJobs/ListofJobs';
import Contact from './Pages/Contact/Contact';
import PostJob from './Pages/PostJob/PostJob';
const Home = lazy(() => import('./Pages/Home/Home'))
const About = lazy(() => import('./Pages/About/About'))

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/" exact>
            <Suspense fallback={<div>Loading...</div>}>
              <Home></Home>
            </Suspense>
          </Route>
          <Route path="/listofJobs"><ListofJobs/> </Route>
          <Route path="/postJob"><PostJob/> </Route>
          <Route path="/contactUs"><Contact /></Route>
          <Route path="/about">
            <Suspense fallback={<div>Loading...</div>}>
              <About></About>
            </Suspense>
          </Route>
          <Redirect to="/home"></Redirect>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
