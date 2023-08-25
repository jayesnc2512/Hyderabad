import React, {useState} from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import './main.css';



const Appointment = (props) => {
		
	const[bool,SetBool]=useState(false)

  function handleMenu(){
    bool ? SetBool(false):SetBool(true)
  }
  return (
	<div>
	<Sidebar hide={bool && "55px"} active="active3"/>
    <Navbar 
      menu={handleMenu}
      style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}
    />
    <section id="content"  style=	{{left:bool && "60px", width:bool && "calc(100% - 60px)"}}
	>
    <main>
    	<div className="head-title">
				<div className="left">
					<h1>Appointment </h1>
          <ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Appointment</a>
						</li>
					</ul>
        </div>
        </div>
    </main>
    </section>
    </div>
    )
    }
    export default Appointment;
