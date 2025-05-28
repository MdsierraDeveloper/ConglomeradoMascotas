import React, { useState } from 'react';
import '../../GerenciaGeneral/ViewPrices/ViewPrices.css';
import { services, staff, pqrs } from '../../../data.js';

const ViewPrices = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (service.segment === 'Hotel' || service.segment === 'Clinic')
    );

    return (
        <div className="view-prices">
            <div className="content">
                <h1>View Prices</h1>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewPrices;