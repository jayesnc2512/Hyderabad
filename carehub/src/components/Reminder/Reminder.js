import React, { useState } from 'react';
// import SectorTypeGraph from "../img/sectorTypeGraph.png";
// import stateGraph from "../img/StateGraph.png";
import DashboardCard from '../DashboardCard';
// import StateList from './StateList';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import '../main.css'

const Reminder = (props) => {


	
	const[bool,SetBool]=useState(false)

  function handleMenu(){
    bool ? SetBool(false):SetBool(true)
  }


    
  return (
	<div>
	<Sidebar hide={bool && "55px"} active="active2"/>
    <Navbar 
      menu={handleMenu}
      style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}
    />
    <section id="content"  style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}>
    <main className='charts'>
    	<div className="head-title">
				<div className="left">
					<h1>Reminder</h1>
          <ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Reminder</a>
						</li>
					</ul>
        </div>
      </div>
     
    </main>
    </section>
	</div>
  )
}

export default Reminder;