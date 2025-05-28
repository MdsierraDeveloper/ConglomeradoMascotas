import React, { useState } from 'react';
import './ManageUsers.css';
import { services, staff, pqrs } from '../../../data.js';

const ManageUsers = () => {
    const [users, setUsers] = useState(staff);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: 'Active' });

    const handleAddUser = () => {
        setUsers([...users, { ...newUser }]);
        setNewUser({ name: '', email: '', role: '', status: 'Active' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    return (
        <div className="manage-users">
            <div className="content">
                <h1>Manage Users</h1>
                <div className="form-container">
                    <h2>Add New User</h2>
                    <input
                        type="text"
                        name="name"
                        value={newUser.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={newUser.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="role"
                        value={newUser.role}
                        onChange={handleInputChange}
                        placeholder="Role"
                    />
                    <select name="status" value={newUser.status} onChange={handleInputChange}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    <button onClick={handleAddUser}>Add User</button>
                </div>
                <table className="users-table">
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
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><span className={`status ${user.status}`}>{user.status}</span></td>
                                <td><a href="#" className="edit">Edit</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;