
import React from 'react';
import './App.css';
import Header from "./components/layouts/header";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home';
import User from './components/pages/User';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:userId' element={<User />} />
          {/* <Route path={'singleuser/'+props.id} element={<SingleUser  />} /> */}
        </Routes>
      </Router>
      {/* <Api /> */}
 
    </div>
  );
}

export default App;
