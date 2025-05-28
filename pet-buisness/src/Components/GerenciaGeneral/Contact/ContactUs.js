import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <div className="contact-us">
            <header className="header">
                <div className="logo">Pet Central</div>
                <nav className="nav">
                    <a href="#">Spa</a>
                    <a href="#">Clinic</a>
                    <a href="#">Hotel</a>
                </nav>
                <div className="icons">
                    <svg width="24" height="24" className="bell-icon">
                        <use href="#bell-icon" />
                    </svg>
                    <div className="profile-pic"></div>
                </div>
            </header>
            <div className="form-container">
                <h1>Contact Us</h1>
                <p>We're here to help! Please fill out the form below, and we'll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit}>
                    <label>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                    />
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                    />
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />
                    <label>Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter the subject of your inquiry"
                        required
                    />
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your question, complaint, or claim in detail"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;