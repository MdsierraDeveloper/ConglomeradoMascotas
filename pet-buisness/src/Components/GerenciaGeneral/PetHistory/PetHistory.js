import React, { useState } from 'react';
import './PetHistory.css';

const PetHistory = () => {
    const [petId, setPetId] = useState('');
    const history = [
        { date: '2025-01-15', service: 'Vaccination', notes: 'Rabies vaccine administered.' },
        { date: '2025-02-10', service: 'Grooming', notes: 'Full grooming package.' },
    ];

    const handleSearch = () => {
        alert(`Searching history for Pet ID: ${petId}`);
    };

    return (
        <div className="pet-history">
            <div className="content">
                <h1>Pet History</h1>
                <div className="search-container">
                    <input
                        type="text"
                        value={petId}
                        onChange={(e) => setPetId(e.target.value)}
                        placeholder="Enter Pet ID"
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Service</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.date}</td>
                                <td>{entry.service}</td>
                                <td>{entry.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PetHistory;