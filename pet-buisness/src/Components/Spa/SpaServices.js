import React, { useState } from 'react';
import './SpaServices.css';

const SpaServices = () => {
    const [services, setServices] = useState([
        { name: 'Full Grooming', description: 'Complete grooming package including bath, haircut, and nail trim.', duration: '120 mins', price: 85, status: 'Active' },
        { name: 'Basic Bath', description: 'Gentle bath with shampoo and conditioner.', duration: '60 mins', price: 45, status: 'Active' },
        { name: 'Nail Trim', description: 'Professional nail trimming service.', duration: '30 mins', price: 20, status: 'Active' },
        { name: 'Creative Styling', description: 'Unique styling and coloring for pets.', duration: '180 mins', price: 120, status: 'Active' },
        { name: 'De-shedding Treatment', description: 'Special treatment to reduce shedding.', duration: '90 mins', price: 70, status: 'Inactive' },
    ]);
    const [percentage, setPercentage] = useState('');

    const handleAddService = () => {
        alert('Add New Service functionality to be implemented');
    };

    const handlePriceUpdate = () => {
        const percentageValue = parseFloat(percentage);
        if (!isNaN(percentageValue)) {
            const updatedServices = services.map(service => ({
                ...service,
                price: service.price + (service.price * percentageValue / 100),
            }));
            setServices(updatedServices);
            alert('Prices updated successfully!');
        } else {
            alert('Please enter a valid percentage.');
        }
    };

    return (
        <div className="spa-services">
            
            <div className="content">
                <h1>Spa Services Management</h1>
                <div className="tabs">
                    <button className="active">All Services</ button>
                    <button>Grooming</button>
                    <button>Styling</button>
                </div>
                <input type="text" className="search-bar" placeholder="Search services" />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <tr key={index}>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td>{service.duration}</td>
                                <td className="price">${service.price.toFixed(2)}</td>
                                <td><span className={`status ${service.status}`}>{service.status}</span></td>
                                <td><a href="#">Edit</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={handleAddService} className="add-service-btn">Add New Service</button>
                <div className="global-update">
                    <p>Global Price Update</p>
                    <p>Update all service prices by (%)</p>
                    <input
                        type="number"
                        value={percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                        placeholder="Enter percentage"
                    />
                    <button onClick={handlePriceUpdate}>Apply Update</button>
                </div>
            </div>
        </div>
    );
};

export default SpaServices;