import React,{useState} from 'react'
import { Link } from "react-router-dom";
import '../main.css';
import logo from "../image/logo.png"


export const Sidebar= (props) => {
    const [selectedPage, setSelectedPage] = useState('');

    const handlePageClick = (page) => {
        { page === "Appointment" && window.location.replace('http://localhost:3006/') };

        setSelectedPage(page);
      };
    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    }
  
    <button onClick={handleLogOut}>
        Logout
    </button>
    return (
    
    <section id="sidebar" style={{width:props.hide}}>
    <a href="/" className="brand">
                <img src={logo} style={{ transform:'scale(50%)',marginLeft:'1.5rem'}}></img>
        <span className="text">CareHub</span>
    </a>
    <ul className="side-menu top">
        <li className={selectedPage === 'dashboard' ? 'active' : '' } onClick={() => handlePageClick('dashboard')}>
            <Link to="/dashboard"  aria-current="page" >
                <i className='bx bxs-dashboard' ></i>
                <span className="text">Dashboard</span>
            </Link>
        </li>
        <li className={selectedPage === 'Appointment' ? 'active' : ''}>
        <Link to="/Appointment"  aria-current="page" onClick={() => handlePageClick('Appointment')}>
                <i className='bx bxs-shopping-bag-alt' ></i>
                <span className="text">Appointment</span>
            </Link>
        </li>
        <li className={selectedPage === 'Reminder' ? 'active' : ''}>
        <Link to="/Reminder"  aria-current="page"  onClick={() => handlePageClick('Reminder')}>
                <i className='bx bxs-doughnut-chart' ></i>
                <span className="text">Reminder</span>
            </Link>
        </li>
        <li className={selectedPage === 'Reports' ? 'active' : ''}>
        <Link to="/Reports"  aria-current="page">
                <i className='bx bxs-doughnut-chart' ></i>
                <span className="text">Reports</span>
            </Link>
        </li>
    </ul>
    <ul className="side-menu">
       
        <li><Link to="/" aria-current="page">
                    <a className="logout" onClick={handleLogOut}>
                <i className='bx bxs-log-out-circle' ></i>
                <span className="text">Logout</span>
                    </a>
                </Link>
        </li>
    </ul>
</section>
  )
}

export default Sidebar;