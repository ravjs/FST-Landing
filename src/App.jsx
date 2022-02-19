import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import ADirectoryComp from './Views/HomeView'
import AdminScreen from './Views/AboutView'
import LoginScreen from './Views/LoginView'
function App() {
  return (

      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<ADirectoryComp />}></Route>
         <Route exact path="/admin" element={<AdminScreen />}></Route>
         <Route exact path="/login" element={<LoginScreen/>}></Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;