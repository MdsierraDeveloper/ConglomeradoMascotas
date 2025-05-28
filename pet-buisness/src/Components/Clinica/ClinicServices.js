import React, { useState } from 'react';
import './ClinicServices.css';

const ClinicServices = () => {
    const [services, setServices] = useState([
        { name: 'Vaccination', category: 'Preventive Care', duration: '30 mins', price: 50, description: 'Routine vaccinations for pets.' },
        { name: 'General Checkup', category: 'General Medicine', duration: '60 mins', price: 80, description: 'Comprehensive health checkup.' },
        { name: 'Dental Cleaning', category: 'Preventive Care', duration: '90 mins', price: 120, description: 'Professional dental cleaning.' },
        { name: 'Surgery', category: 'Surgery', duration: '120 mins', price: 300, description: 'Surgical procedures.' },
        { name: 'Emergency Care', category: 'Emergency', duration: '60 mins', price: 150, description: 'Immediate care for emergencies.' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddService = () => {
        alert('Add Service functionality to be implemented');
    };

    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="clinic-services">
            <div className="sidebar">
                <div className="logo">Clinic Admin</div>
                <ul>
                    <li><a href="#"><svg width="24" height="24"><use href="#dashboard-icon"/></svg>Dashboard</a></li>
                    <li><a href="#"><svg width="24" height="24"><use href="#appointments-icon"/></svg>Appointments</a></li>
                    <li><a href="#" className="active"><svg width="24" height="24"><use href="#services-icon"/></svg>Services</a></li>
                    <li><a href="#"><svg width="24" height="24"><use href="#pets-icon"/></svg>Pets</a></li>
                    <li><a href="#"><svg width="24" height="24"><use href="#staff-icon"/></svg>Staff</a></li>
                    <li><a href="#"><svg width="24" height="24"><use href="#settings-icon"/></svg>Settings</a></li>
                    <li><a href="#"><svg width="24" height="24"><use href="#logout-icon"/></svg>Logout</a></li>
                </ul>
            </div>
            <div className="content">
                <h1>Services</h1>
                <div className="tabs">
                    <button className="active">Clinic</button>
                    <button>Spa</button>
                </div>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search services"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <table className="services-table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Category</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredServices.map((service, index) => (
                            <tr key={index}>
                                <td>{service.name}</td>
                                <td>{service.category}</td>
                                <td>{service.duration}</td>
                                <td>${service.price}</td>
                                <td>{service.description}</td>
                                <td><a href="#" className="edit">Edit</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={handleAddService} className="add-service-btn">Add Service</button>
            </div>
        </div>
    );
};

export default ClinicServices;