import React from 'react'
import { Link } from "react-router-dom";
import '../main.css';


export const Sidebar = (props) => {
    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    }


  return (
    <section id="sidebar" style={{width:props.hide}}>
    <a href="/" className="brand">
        <i className='bx bxs-smile'></i>
        <span className="text">CareHub</span>
    </a>
    <ul className="side-menu top">
        <li className={props.active}>
            <Link to="/dashboard"  aria-current="page">
                <i className='bx bxs-dashboard' ></i>
                <span className="text">Dashboard</span>
            </Link>
        </li>
        <li className={props.active2}>
        <Link to="/Appointment"  aria-current="page">
                <i className='bx bxs-shopping-bag-alt' ></i>
                <span className="text">Appointment</span>
            </Link>
        </li>
        <li className={props.active3}>
        <Link to="/Reminder"  aria-current="page">
                <i className='bx bxs-doughnut-chart' ></i>
                <span className="text">Reminder</span>
            </Link>
        </li>
        <li className={props.active3}>
        <Link to="/Reports"  aria-current="page">
                <i className='bx bxs-doughnut-chart' ></i>
                <span className="text">Reports</span>
            </Link>
        </li>
    </ul>
    <ul className="side-menu">
              <Link to={"/"} aria-current="page">

                  <li onClick={handleLogOut}>
            <a href="#" className="logout">
                      <i className='bx bxs-log-out-circle' ></i>

                <span className="text">Logout</span>
            </a>
        </li></Link>
    </ul>
</section>
  )
}

export default Sidebar;