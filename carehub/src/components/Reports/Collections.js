import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Modal from 'react-modal';
import useStyles from './ReportStyle'; // Import the styles

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
import './Reports.css';
import { ExpandMore, Share, GetApp, Visibility, Delete, Opacity } from '@mui/icons-material';


Modal.setAppElement('#root'); // Set the app element for accessibility 

const Collections = (props) => {
    const classes = useStyles();

    const [userId, setUserId] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // Process form data
            const response = await axios.post(`http://localhost:3000/api/reports/collection/new/${props.userId}`, { name, date, userId });
            // Successful signup logic (e.g., show success message, redirect)
            alert('Collection added:', response.data.user);
            closeModal();
        } catch (err) {
            console.log("error in adding collection", err)
        }

    };

    return (
        <div >
            <Button className={classes.submitButton} variant="contained" color="primary" onClick={openModal}>
                New collections
            </Button>
            {/* <button onClick={openModal}>New Collections</button> */}

            {/* Modal for new Collection */}
            
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
            > <div style={{
                left: '30%',
                    position: 'absolute',
            }}>
                <h2>Add collection</h2>
                <form onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                    {/* Other form fields */}

                    <button type="submit">Submit</button>
                </form>

                    <button onClick={closeModal}>Close</button>
                </div>
            </Modal>
            </div>
    
    )
}

export default Collections;