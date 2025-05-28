import React from 'react';
import './ClinicDashboard.css';

const ClinicDashboard = () => {
    return (
        <div className="clinic-dashboard">
            <div className="content">
                <h1>Clinic Dashboard</h1>
                <p>Welcome, Clinic Administrator</p>
                <div className="stats">
                    <div className="stat-card">
                        <h3>Total Services</h3>
                        <p>350</p>
                    </div>
                    <div className="stat-card">
                        <h3>Patients Attended</h3>
                        <p>120</p>
                    </div>
                </div>
                <h2>Quick Actions</h2>
                <div className="quick-actions">
                    <button>Manage Clinic Services</button>
                    <button>Manage Spa Services</button>
                </div>
            </div>
        </div>
    );
};

export default ClinicDashboard;