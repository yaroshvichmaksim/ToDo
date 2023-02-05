import { Route, Router, Routes } from "react-router-dom";
import ToDo from "./pages/ToDo";
import React, {useState, useEffect} from "react";
import UserPage from "./pages/UserPage";
import Nav from "./UI/Nav/Nav";
import GetService from "./API/GetService";

function App() {

 
    
  return (
    

    <div className="main">
    <Nav></Nav>
    <Routes>
      
      <Route exact path="todos" element={<ToDo />}></Route>
      <Route exact path="users" element={<UserPage  />}></Route>
    </Routes>
    </div>

  )
}

export default App;