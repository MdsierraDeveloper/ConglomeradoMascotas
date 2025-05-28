import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ userRole, setUserRole }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setUserRole(null);
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Mundo Mascotas</div>
            <ul className="navbar-links">
                {userRole === 'GerenteGeneral' && (
                    <>
                        <li><Link to="/gerente/dashboard">Dashboard</Link></li>
                        <li><Link to="/gerente/staff">Staff</Link></li>
                        <li><Link to="/gerente/manage-users">Manage Users</Link></li>
                        <li><Link to="/gerente/update-prices">Update Prices</Link></li>
                        <li><Link to="/gerente/create-reports">Create Reports</Link></li>
                        <li><Link to="/gerente/view-reports">View Reports</Link></li>
                        <li><Link to="/gerente/pet-history">Pet History</Link></li>
                        <li><Link to="/gerente/client-history">Client History</Link></li>
                        <li><Link to="/gerente/view-prices">View Prices</Link></li>
                        <li><Link to="/gerente/contact">PQRs</Link></li>
                    </>
                )}
                {userRole === 'EmpleadoHotel' && (
                    <>
                        <li><Link to="/hotel/dashboard">Dashboard</Link></li>
                        <li><Link to="/hotel/manage-hotel-services">Manage Hotel Services</Link></li>
                        <li><Link to="/hotel/manage-clinic-services">Manage Clinic Services</Link></li>
                        <li><Link to="/hotel/view-prices">View Prices</Link></li>
                    </>
                )}
                {userRole === 'AdminClinica' && (
                    <>
                        <li><Link to="/clinica/dashboard">Dashboard</Link></li>
                        <li><Link to="/clinica/services">Services</Link></li>
                        <li><Link to="/clinica/manage-spa-services">Manage Spa Services</Link></li>
                        <li><Link to="/clinica/view-prices">View Prices</Link></li>
                    </>
                )}
                {userRole === 'AuxiliarSpa' && (
                    <>
                        <li><Link to="/spa/dashboard">Dashboard</Link></li>
                        <li><Link to="/spa/services">Services</Link></li>
                        <li><Link to="/spa/update-prices">Update Prices</Link></li>
                        <li><Link to="/spa/view-prices">View Prices</Link></li>
                    </>
                )}
                {userRole === 'Publico' && (
                    <>
                        <li><Link to="/public/view-services">View Services</Link></li>
                        <li><Link to="/public/contact">Submit PQR</Link></li>
                    </>
                )}
            </ul>
            {userRole && (
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            )}
        </nav>
    );
};

export default NavBar;