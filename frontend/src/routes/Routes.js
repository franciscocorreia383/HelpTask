import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import Profile from '../pages/profile';
import CreateTask from '../pages/createTask';
import Test from '../pages/test';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/create' element={<CreateTask/>}/>
        <Route path='/Test' element={<Test/>}/>
    </Routes>
  );
}

export default App;
