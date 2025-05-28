import React, { useState } from 'react';
import '../../GerenciaGeneral/ViewPrices/ViewPrices.css';
import { services, staff, pqrs } from '../../../data.js';


const ViewServices = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [segmentFilter, setSegmentFilter] = useState('All');

    const filteredServices = services.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSegment = segmentFilter === 'All' || service.segment === segmentFilter;
        return matchesSearch && matchesSegment;
    });

    return (
        <div className="view-services">
            <div className="content">
                <h1>View Services</h1>
                <div className="filters">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search services"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select value={segmentFilter} onChange={(e) => setSegmentFilter(e.target.value)}>
                        <option value="All">All Segments</option>
                        <option value="Clinic">Clinic</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Spa">Spa</option>
                    </select>
                </div>
                <table className="services-table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Segment</th>
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
                                <td>{service.segment}</td>
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

export default ViewServices;