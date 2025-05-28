import React, { useState } from 'react';
import './UpdatePrices.css';
import { services, staff, pqrs } from '../../../data.js';

const UpdatePrices = () => {
    const [serviceList, setServiceList] = useState(services);
    const [percentage, setPercentage] = useState('');

    const handlePriceUpdate = () => {
        const percentageValue = parseFloat(percentage);
        if (!isNaN(percentageValue)) {
            setServiceList(serviceList.map(service => ({
                ...service,
                price: service.price + (service.price * percentageValue / 100),
            })));
            alert('Prices updated successfully!');
        } else {
            alert('Please enter a valid percentage.');
        }
    };

    return (
        <div className="update-prices">
            <div className="content">
                <h1>Update Prices</h1>
                <div className="global-update">
                    <p>Update all service prices by (%)</p>
                    <input
                        type="number"
                        value={percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                        placeholder="Enter percentage"
                    />
                    <button onClick={handlePriceUpdate}>Apply Update</button>
                </div>
                <table className="services-table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviceList.map((service, index) => (
                            <tr key={index}>
                                <td>{service.name}</td>
                                <td>{service.category}</td>
                                <td>${service.price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpdatePrices;