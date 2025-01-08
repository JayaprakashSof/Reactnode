import React from 'react';
import { BrowserRouter as Router, Route,Routes, BrowserRouter} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/navbar';
import Dashbord from './components/Dashbord';
import Buttons from './components/Buttons';
import Register from './components/Register';
import Login from './components/Login';
import Table from './components/Table';
import './App.css';




function App() {
  return (
    <>
    <BrowserRouter>
    <div id="wrapper">
       <Sidebar/>
  <div id="content-wrapper" class="d-flex flex-column">
  <div id="content">
  <Navbar/>
    <Routes>
    <Route path="Login" element={<Login/>}/>
       <Route path="/" element={<Dashbord/>} />
       <Route path="buttons" element={<Buttons/>}/>
       <Route path="Register" element={<Register/>}/>
       <Route path="Table" element={<Table/>}/> 
    </Routes> :
    
    </div>
    </div>
  </div>
     </BrowserRouter>
    </>
  );
}
export default App;
