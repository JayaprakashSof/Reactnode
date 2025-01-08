import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
           
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

           
            <hr className="sidebar-divider my-0"/>

          
            <li className="nav-item active">
                <Link to="/" class="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

           
            <hr className="sidebar-divider"/>

            
            <div className="sidebar-heading">
                Interface
            </div>

            
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link to="Buttons" className="collapse-item" >Buttons</Link>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

           
           

                     

            
            <div className="sidebar-heading">
                Addons
            </div>

            
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <Link to="Login" className="collapse-item" >Login</Link>
                        <Link to="Register" className="collapse-item">Register</Link>
                       
                    </div>
                </div>
            </li>

          

          
            <li className="nav-item">
                <Link to="Table" className="nav-link" >
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </li>

            
            <hr className="sidebar-divider d-none d-md-block"/>

            
           
          

        </ul>
  );
}

export default Sidebar;
