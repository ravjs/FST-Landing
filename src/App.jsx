import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import HomeView from './Views/HomeView'
import AboutView from './Views/AboutView'
import BlogView from './Views/BlogView'
function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomeView />}></Route>
         <Route exact path="/about" element={<AboutView />}></Route>
         <Route exact path="/blog" element={<BlogView/>}></Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;