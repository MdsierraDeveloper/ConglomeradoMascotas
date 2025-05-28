import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="header">
                <div className="logo">Pet Central</div>
                <nav className="nav">
                    <a href="#">Dashboard</a>
                    <a href="#">Bookings</a>
                    <a href="#">Clients</a>
                    <a href="#">Pets</a>
                    <a href="#">Services</a>
                    <a href="#">Staff</a>
                </nav>
                <div className="icons">
                    <svg width="24" height="24" className="bell-icon">
                        <use href="#bell-icon" />
                    </svg>
                    <div className="profile-pic"></div>
                </div>
            </header>
            <div className="content">
                <h1>Dashboard</h1>
                <p>Welcome back, Sarah</p>
                <div className="stats">
                    <div className="stat-card">
                        <h3>Total Services</h3>
                        <p>1,234</p>
                    </div>
                    <div className="stat-card">
                        <h3>Earnings</h3>
                        <p>$56,789</p>
                    </div>
                    <div className="stat-card">
                        <h3>Recent Complaints</h3>
                        <p>5 Complaints</p>
                    </div>
                </div>
                <h2>Performance Overview</h2>
                <div className="performance">
                    <div className="chart-card">
                        <h3>Service Trends</h3>
                        <p><span className="positive">+12%</span> Last 30 Days +12%</p>
                        {/* Placeholder for chart - replace with actual chart component if needed */}
                        <div className="chart-placeholder">Line Chart Here</div>
                    </div>
                    <div className="chart-card">
                        <h3>Earnings by Segment</h3>
                        <p><span className="positive">+8%</span> Last 30 Days +8%</p>
                        <div className="bar-chart">
                            <div className="bar spa">Spa</div>
                            <div className="bar clinic">Clinic</div>
                            <div className="bar hotel">Hotel</div>
                        </div>
                    </div>
                </div>
                <h2>Quick Actions</h2>
                <div className="quick-actions">
                    <button>Manage Users</button>
                    <button>Manage Prices</button>
                </div>
                <h2>Reports</h2>
                <div className="reports">
                    <div className="report-card">Bi-Weekly PQRs</div>
                    <div className="report-card">Top Breeds</div>
                    <div className="report-card">Earnings by Segment</div>
                    <div className="report-card">Historical Data Queries</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;