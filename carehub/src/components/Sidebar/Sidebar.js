import React,{useState} from 'react'
import { Link } from "react-router-dom";
import '../main.css';


export const Sidebar= (props) => {
    const [selectedPage, setSelectedPage] = useState('');

    const handlePageClick = (page) => {
        setSelectedPage(page);
      };
      
  
  
    return (
    
    <section id="sidebar" style={{width:props.hide}}>
    <a href="/" className="brand">
        <i className='bx bxs-smile'></i>
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
        <Link to="/Reports"  aria-current="page" onClick={() => handlePageClick('Reports')}>
                <i className='bx bxs-file' ></i>
                <span className="text">Reports</span>
            </Link>
        </li>
    </ul>
    <ul className="side-menu">
       
        <li>
            <a href="#" className="logout">
                <i className='bx bxs-log-out-circle' ></i>
                <span className="text">Logout</span>
            </a>
        </li>
    </ul>
</section>
  )
}

export default Sidebar;