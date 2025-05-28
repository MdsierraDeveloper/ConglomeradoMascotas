import React from 'react';
import './SpaDashboard.css';

const SpaDashboard = () => {
    return (
        <div className="spa-dashboard">
            <div className="content">
                <h1>Spa Dashboard</h1>
                <p>Welcome, Spa Assistant</p>
                <div className="stats">
                    <div className="stat-card">
                        <h3>Total Services</h3>
                        <p>200</p>
                    </div>
                    <div className="stat-card">
                        <h3>Product Sales</h3>
                        <p>50</p>
                    </div>
                </div>
                <h2>Quick Actions</h2>
                <div className="quick-actions">
                    <button>Manage Spa Services</button>
                    <button>Update Prices</button>
                </div>
            </div>
        </div>
    );
};

export default SpaDashboard;