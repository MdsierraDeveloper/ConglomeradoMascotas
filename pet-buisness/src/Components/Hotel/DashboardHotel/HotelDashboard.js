import React from 'react';
import './HotelDashboard.css';

const HotelDashboard = () => {
    return (
        <div className="hotel-dashboard">
            <div className="sidebar">
                <div className="logo">Hotel Services</div>
                <div className="role">Employee</div>
                <ul>
                    <li><a href="#" className="active"><svg width="24" height="24"><use href="#dashboard-icon"/></svg>Dashboard</a></li>
                    <li><a href="#"><svg width="24" height="24"><use href="#lodging-icon"/></svg>Lodging</a></li>
                    <li><a href="#"><svg width="24" height="24"><use href="#recreation-icon"/></svg>Recreation</a></li>
                    <li><a href="#"><svg width="24" height="24"><use href="#feeding-icon"/></svg>Feeding</a></li>
                    <li><a href="#"><svg width="24" height="24"><use href="#transportation-icon"/></svg>Transportation</a></li>
                    <li><a href="#"><svg width="24" height="24"><use href="#clients-icon"/></svg>Clients</a></li>
                </ul>
            </div>
            <div className="content">
                <h1>Dashboard</h1>
                <p>Manage hotel services, schedules, and client information.</p>
                <h2>Weekly Report</h2>
                <div className="stats">
                    <div className="stat-card">
                        <h3>Total Lodgings</h3>
                        <p>120</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Recreation Sessions</h3>
                        <p>85</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Feeding Services</h3>
                        <p>150</p>
                    </div>
                </div>
                <h2>Top Breed Statistics</h2>
                <table className="breed-table">
                    <thead>
                        <tr>
                            <th>Breed</th>
                            <th>Lodging</th>
                            <th>Recreation</th>
                            <th>Feeding</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Golden Retriever</td>
                            <td>30</td>
                            <td>20</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Labrador</td>
                            <td>25</td>
                            <td>15</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Poodle</td>
                            <td>20</td>
                            <td>18</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Bulldog</td>
                            <td>15</td>
                            <td>12</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Beagle</td>
                            <td>10</td>
                            <td>10</td>
                            <td>15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HotelDashboard;