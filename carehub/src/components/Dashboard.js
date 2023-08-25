import React,{useState} from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import './main.css';
import { Link } from "react-router-dom";
import CardsUi from './CardsUi';

const Dashboard = (props) => {
  const[bool,SetBool]=useState(false)

  function handleMenu(){
    bool ? SetBool(false):SetBool(true)
  }
  return (
    <div>
	<Sidebar hide={bool && "55px"} active="active"/>
    <Navbar 
      menu={handleMenu}
      style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}
    />
    <section id="content"  style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}>
    <main>
			<div className="head-title">
				<div className="left">
					<h1>Dashboard</h1>
					<ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Home</a>
						</li>
					</ul>
				</div>
				<Link to="/pdf"  aria-current="page">
				<div className="btn-download">
					<i className='bx bxs-plus-circle' ></i>
					<span className="text"> Add Collection </span>
				</div>
				</Link>

				
			</div>
			<CardsUi />
			
		</main>
		</section>
    </div>
  )
}

export default Dashboard;