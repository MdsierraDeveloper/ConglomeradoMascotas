import React, { useState } from 'react';
import './ManageSpaServices.css';
import { services } from '../../../data';


const ManageSpaServices = () => {
    const [spaServices] = useState(services.filter(service => service.segment === 'Spa'));

    return (
        <div className="manage-spa-services">
            <div className="content">
                <h1>Manage Spa Services</h1>
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
                        {spaServices.map((service, index) => (
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

export default ManageSpaServices;