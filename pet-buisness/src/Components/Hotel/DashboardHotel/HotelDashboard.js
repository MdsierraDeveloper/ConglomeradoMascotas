import React from 'react';
import './HotelDashboard.css';

const HotelDashboard = () => {
    return (
        <div className="hotel-dashboard">
            
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