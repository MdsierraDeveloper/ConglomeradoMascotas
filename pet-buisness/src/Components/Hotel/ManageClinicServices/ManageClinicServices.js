import React, { useState } from 'react';
import './ManageClinicServices.css';
import { services, staff, pqrs } from '../../../data.js';

const ManageClinicServices = () => {
    const [clinicServices, setClinicServices] = useState(services.filter(service => service.segment === 'Clinic'));

    return (
        <div className="manage-clinic-services">
            <div className="content">
                <h1>Manage Clinic Services</h1>
                <table className="services-table">
                    <thead>
                        <tr>
                            <th>][:Service Name</th>
                            <th>Category</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clinicServices.map((service, index) => (
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

export default ManageClinicServices;