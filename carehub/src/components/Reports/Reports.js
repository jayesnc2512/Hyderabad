import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Collapse,
  TextField,

} from '@mui/material';
import useStyles from './ReportStyle'; // Import the styles
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { ExpandMore,Share, GetApp, Visibility,Delete } from '@mui/icons-material';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import './Reports.css';
import DatePicker from './Date';
import Collections from './Collections';
import  { useEffect,  useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import GetItems from './GetItems';

const Reports = () => {
   const [collections, setCollections] = useState();
    const fileInputRef = useRef(null);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    
    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    }
    var userId = JSON.parse(localStorage["userData"])?._id ||null;

    const getCollections = async() => {
        try {
                const res = await axios.get(`http://localhost:3000/api/reports/collection/get/${userId}`);
                setCollections(res.data.collections);
                console.log(res.data.collections);
            } catch (error) {
                console.log(error);
            }
    }

    const collectionDelete = async (id) => {
        try {
            alert({ userId });
            
            const confirm = window.confirm("you sure");
            if (confirm) {
                const res = await axios.delete(`http://localhost:3000/api/reports/collection/delete/${id}`);
                getCollections();
                console.log(JSON.stringify(res.data));
            }
        } catch (error) {
            console.log(error);
        }

    }

 
    
    const addItem = async (Hid) => {
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("date", date);
            formData.append("file", fileInputRef.current.files[0]);
            const res = await axios.post(
                `http://localhost:3000/api/reports/${userId}/${Hid}`,
                formData
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

   
    

    useEffect(() => {
        getCollections();
    }, []);

  const classes = useStyles();
  
  const [bool, SetBool] = useState(false); // Sidebar

  function handleMenu() {
    bool ? SetBool(false) : SetBool(true);
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    {/* //hii */}
      <Sidebar hide={bool && "55px"} active="active" />
      <Navbar
        menu={handleMenu}
        style={{ left: bool && "60px", width: bool && "calc(100% - 60px)" }}
      />
      <section id="content" style={{ left: bool && "60px", width: bool && "calc(100% - 60px)" }}>
        <main className='charts'>
          <div className="head-title">
            <div className="left">
              <h1>Reports</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i className='bx bx-chevron-right' ></i></li>
                <li>
                  <a className="active" href="#">Reports</a>
                </li>
              </ul>
            </div>
          </div>
          <Collections userId={userId} />

          {/* <Button className={classes.submitButton} variant="contained" color="primary">
            New collections
          </Button> */}
          {collections &&
            collections.map((collection) => (
              <Card className={classes.card} key={collection._id}>
                <CardContent className={classes.cardContent}>
                  <div className="card-header">
                    <Typography variant="h6">{collection.name}</Typography>
                    <div className='icon-buttons'>

                    <IconButton>
                    <Delete onClick={() => collectionDelete(collection._id)} />
                      </IconButton>
                      </div>
                    <IconButton
                      className="expand-icon"
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMore />
                    </IconButton>
                  </div>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>

                      <div className='card-all'>

                        {/* <div className='card-items'>
                          <Typography variant="body1">
                            Report 1
                          </Typography>
                          <div className='icon-buttons'>
                            <IconButton>
                              <Share />
                            </IconButton>
                            <IconButton>
                              <GetApp />
                            </IconButton>
                            <IconButton>
                              <Visibility />
                            </IconButton>
                            <IconButton>
                              <Delete />
                            </IconButton>
                          </div>
                        </div> */}
                        <GetItems Hid={collection._id} />
                        <div className='card-new'>
                      
                          <div className='card-data'>
                            <input type="text" id="report-name" placeholder="Report Name" onChange={(e) => setName(e.target.value)} />
                            <input type="date" id="date-picker" onChange={(e) => setDate(e.target.value)} />
                            <input type="file" id="file-input" ref={fileInputRef} />
                      
                          </div>
                          <div className='card-add'>
                            <Button className={classes.add} variant="contained" onClick={() => addItem(collection._id)}>
                              Add Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Collapse>
                </CardContent>
              </Card>
            ))}
        </main>
      </section>
    </>
  );
};

export default Reports;
