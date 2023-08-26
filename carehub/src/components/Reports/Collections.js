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
import './Modal.css';
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
            <div style={{maxWidth:"fit-content", top:'20%'}}>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                className="modal-container"
                overlayClassName="modal-overlay"
            > <div className="modal-header" >
                <h2 className="modal-title">Add collection</h2>
                <button className="modal-close" onClick={closeModal}>
            &times;
        </button>
        </div>
                <form className="modal-form" onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <input className="modal-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="modal-input" type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                    {/* Other form fields */}

                    <button className="modal-button" type="submit">Submit</button>
                </form>

                    {/* <button onClick={closeModal}>Close</button>
                </div> */}
            </Modal>
            </div>
            </div>
    
    )
}

export default Collections;