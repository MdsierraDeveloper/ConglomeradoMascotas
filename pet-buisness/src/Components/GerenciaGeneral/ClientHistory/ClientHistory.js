import React,

 { useState } from 'react';
import './ClientHistory.css';

const ClientHistory = () => {
    const [clientId, setClientId] = useState('');
    const history = [
        { pet: 'Max', service: 'Vaccination', date: '2025-01-15' },
        { pet: 'Luna', service: 'Grooming', date: '2025-02-10' },
    ];

    const handleSearch = () => {
        alert(`Searching history for Client ID: ${clientId}`);
    };

    return (
        <div className="client-history">
            <div className="content">
                <h1>Client History</h1>
                <div className="search-container">
                    <input
                        type="text"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                        placeholder="Enter Client ID"
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Pet</th>
                            <th>Service</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.pet}</td>
                                <td>{entry.service}</td>
                                <td>{entry.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClientHistory;