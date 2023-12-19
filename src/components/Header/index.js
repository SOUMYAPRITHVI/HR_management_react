import logo1 from './logo1.jpg'
import {  NavLink } from 'react-router-dom';
import './style.css';

export default function Nav()
{
  return (

    <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-secondary">
      <img src={logo1} alt="" height="50px"/>
      <NavLink to={'/'} className="navbar-brand">HRMS</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="container-fluid justify-content-between" >
        <div className="topnav-right">

        <div className="container-fluid">
      
      <NavLink to={'/employees'} className="navbar-brand">Employees</NavLink>
      <NavLink to={'/about'}className="navbar-brand">About</NavLink>
    </div>
        </div>
        </div>
      </div>
    </nav>
  )

}