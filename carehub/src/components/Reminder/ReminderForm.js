app.js

import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            phoneNumber: '', // Add a field for the phone number
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Ensure that all required fields are filled
        if (!this.state.name || !this.state.message || !this.state.phoneNumber) {
            alert('Please fill out all fields');
            return;
        }

        // Send the form data to the server
        fetch('http://localhost:3001/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle the response from the server if needed
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <h1>Submit Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <input
                            type="text"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;