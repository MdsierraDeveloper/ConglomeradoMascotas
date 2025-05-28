import React, { useState } from 'react';
import './ManageHotelServices.css';
import { services, staff, pqrs } from '../../../data.js';

const ManageHotelServices = () => {
    const [hotelServices, setHotelServices] = useState(services.filter(service => service.segment === 'Hotel'));
    const [newService, setNewService] = useState({ name: '', category: '', duration: '', price: 0, description: '', segment: 'Hotel' });

    const handleAddService = () => {
        setHotelServices([...hotelServices, { ...newService }]);
        setNewService({ name: '', category: '', duration: '', price: 0, description: '', segment: 'Hotel' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewService({ ...newService, [name]: value });
    };

    return (
        <div className="manage-hotel-services">
            <div className="content">
                <h1>Manage Hotel Services</h1>
                <div className="form-container">
                    <h2>Add New Service</h2>
                    <input
                        type="text"
                        name="name"
                        value={newService.name}
                        onChange={handleInputChange}
                        placeholder="Service Name"
                    />
                    <input
                        type="text"
                        name="category"
                        value={newService.category}
                        onChange={handleInputChange}
                        placeholder="Category (e.g., Lodging)"
                    />
                    <input
                        type="text"
                        name="duration"
                        value={newService.duration}
                        onChange={handleInputChange}
                        placeholder="Duration (e.g., 60 mins)"
                    />
                    <input
                        type="number"
                        name="price"
                        value={newService.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                    />
                    <input
                        type="text"
                        name="description"
                        value={newService.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                    />
                    <button onClick={handleAddService}>Add Service</button>
                </div>
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
                        {hotelServices.map((service, index) => (
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
            </div>
        </div>
    );
};

export default ManageHotelServices;