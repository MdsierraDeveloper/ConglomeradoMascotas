import React, { useState } from 'react';
import './Staff.css';

const Staff = () => {
    const [staff, setStaff] = useState([
        { name: 'Emily Carter', email: 'emily.carter@example.com', role: 'Manager', status: 'Active' },
        { name: 'David Lee', email: 'david.lee@example.com', role: 'Veterinarian', status: 'Active' },
        { name: 'Sarah Jones', email: 'sarah.jones@example.com', role: 'Groomer', status: 'Active' },
        { name: 'Michael Brown', email: 'michael.brown@example.com', role: 'Receptionist', status: 'Inactive' },
        { name: 'Jessica Wilson', email: 'jessica.wilson@example.com', role: 'Trainer', status: 'Active' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddStaff = () => {
        alert('Add Staff functionality to be implemented');
    };

    const filteredStaff = staff.filter(staffMember =>
        staffMember.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="staff">
            
            <div className="content">
                <h1>Staff</h1>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search staff"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <table className="staff-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStaff.map((staffMember, index) => (
                            <tr key={index}>
                                <td>{staffMember.name}</td>
                                <td>{staffMember.email}</td>
                                <td><span className="role">{staffMember.role}</span></td>
                                <td><span className={`status ${staffMember.status}`}>{staffMember.status}</span></td>
                                <td><a href="#" className="edit">Edit</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={handleAddStaff} className="add-staff-btn">Add Staff</button>
            </div>
        </div>
    );
};

export default Staff;