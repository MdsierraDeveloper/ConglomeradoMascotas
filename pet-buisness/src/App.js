import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import './App.css';
// Gerente General
import Dashboard from './Components/GerenciaGeneral/Dashboard/Dashboard.js';
import Staff from './Components/GerenciaGeneral/Stafftable/Staff';
import ManageUsers from './Components/GerenciaGeneral/ManageUsers/ManageUsers';
import UpdatePrices from './Components/GerenciaGeneral/UpdatePrices/UpdatePrices';
import CreateReports from './Components/GerenciaGeneral/CreateReports/CreateReports';
import ViewReports from './Components/GerenciaGeneral/ViewReports/ViewReports';
import PetHistory from './Components/GerenciaGeneral/PetHistory/PetHistory';
import ClientHistory from './Components/GerenciaGeneral/ClientHistory/ClientHistory';
import ViewPricesGerente from './Components/GerenciaGeneral/ViewPrices/ViewPrices';
import ContactUs from './Components/GerenciaGeneral/Contact/ContactUs';
// Empleado Hotel
import HotelDashboard from './Components/Hotel/DashboardHotel/HotelDashboard';
import ManageHotelServices from './Components/Hotel/ManageHotelServices/ManageHotelServices';
import ManageClinicServicesHotel from './Components/Hotel/ManageClinicServices/ManageClinicServices';
import ViewPricesHotel from './Components/Hotel/ViewPrices/ViewPrices';
// Administrador Clínica
import ClinicDashboard from './Components/Clinica/Dashboard/ClinicDashboard';
import ClinicServices from './Components/Clinica/ClinicServices';
import ManageSpaServices from './Components/Clinica/ManageSpaServices/ManageSpaServices';
import ViewPricesClinica from './Components/Clinica/ViewPrices/ViewPrices';
// Auxiliar Spa
import SpaDashboard from './Components/Spa/Dashboard/SpaDashboard';
import SpaServices from './Components/Spa/SpaServices';
import UpdatePricesSpa from './Components/Spa/UpdatePrices/UpdatePrices';
import ViewPricesSpa from './Components/Spa/ViewPrices/ViewPrices';
// Público en General
import ViewServices from './Components/Public/ViewServices/ViewServices';

const LoginForm = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password || !role) {
            setError('Por favor, completa todos los campos');
            return;
        }
        setError('');
        handleLogin(role);
        switch (role) {
            case 'GerenteGeneral':
                navigate('/gerente/dashboard');
                break;
            case 'EmpleadoHotel':
                navigate('/hotel/dashboard');
                break;
            case 'AdminClinica':
                navigate('/clinica/dashboard');
                break;
            case 'AuxiliarSpa':
                navigate('/spa/dashboard');
                break;
            case 'Publico':
                navigate('/public/view-services');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <div className="login-container">
            <img
                src="https://via.placeholder.com/300x150?text=Mundo+Mascotas+Logo"
                alt="Mundo Mascotas Logo"
                className="login-logo"
            />
            <div className="login-form">
                <h1>Mundo Mascotas</h1>
                <p>Inicia sesión para continuar</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Nombre de usuario</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Ingresa tu usuario"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Rol</label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Selecciona un rol</option>
                            <option value="GerenteGeneral">Gerente General</option>
                            <option value="EmpleadoHotel">Empleado Hotel</option>
                            <option value="AdminClinica">Admin Clínica</option>
                            <option value="AuxiliarSpa">Auxiliar Spa</option>
                            <option value="Publico">Público</option>
                        </select>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

const App = () => {
    const [userRole, setUserRole] = useState(null);
    const [openAccordions, setOpenAccordions] = useState({});

    const handleLogin = (role) => {
        setUserRole(role);
    };

    const handleLogout = () => {
        setUserRole(null);
    };

    const toggleAccordion = (section) => {
        setOpenAccordions((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const menuItems = {
        GerenteGeneral: [
            {
                category: 'Dashboard',
                items: [{ label: 'Dashboard', path: '/gerente/dashboard' }],
            },
            {
                category: 'Gestión',
                items: [
                    { label: 'Personal', path: '/gerente/staff' },
                    { label: 'Administrar Usuarios', path: '/gerente/manage-users' },
                    { label: 'Actualizar Precios', path: '/gerente/update-prices' },
                ],
            },
            {
                category: 'Reportes',
                items: [
                    { label: 'Crear Reportes', path: '/gerente/create-reports' },
                    { label: 'Ver Reportes', path: '/gerente/view-reports' },
                ],
            },
            {
                category: 'Historial',
                items: [
                    { label: 'Historial de Mascotas', path: '/gerente/pet-history' },
                    { label: 'Historial de Clientes', path: '/gerente/client-history' },
                ],
            },
            {
                category: 'Precios',
                items: [{ label: 'Ver Precios', path: '/gerente/view-prices' }],
            },
            {
                category: 'Contacto',
                items: [{ label: 'Contáctanos', path: '/gerente/contact' }],
            },
        ],
        EmpleadoHotel: [
            {
                category: 'Dashboard',
                items: [{ label: 'Dashboard', path: '/hotel/dashboard' }],
            },
            {
                category: 'Gestión',
                items: [
                    { label: 'Administrar Servicios de Hotel', path: '/hotel/manage-hotel-services' },
                    { label: 'Administrar Servicios de Clínica', path: '/hotel/manage-clinic-services' },
                ],
            },
            {
                category: 'Precios',
                items: [{ label: 'Ver Precios', path: '/hotel/view-prices' }],
            },
        ],
        AdminClinica: [
            {
                category: 'Dashboard',
                items: [{ label: 'Dashboard', path: '/clinica/dashboard' }],
            },
            {
                category: 'Servicios',
                items: [
                    { label: 'Servicios de Clínica', path: '/clinica/services' },
                    { label: 'Administrar Servicios de Spa', path: '/clinica/manage-spa-services' },
                ],
            },
            {
                category: 'Precios',
                items: [{ label: 'Ver Precios', path: '/clinica/view-prices' }],
            },
        ],
        AuxiliarSpa: [
            {
                category: 'Dashboard',
                items: [{ label: 'Dashboard', path: '/spa/dashboard' }],
            },
            {
                category: 'Servicios',
                items: [{ label: 'Servicios de Spa', path: '/spa/services' }],
            },
            {
                category: 'Precios',
                items: [
                    { label: 'Actualizar Precios', path: '/spa/update-prices' },
                    { label: 'Ver Precios', path: '/spa/view-prices' },
                ],
            },
        ],
        Publico: [
            {
                category: 'Servicios',
                items: [{ label: 'Ver Servicios', path: '/public/view-services' }],
            },
            {
                category: 'Contacto',
                items: [{ label: 'Contáctanos', path: '/public/contact' }],
            },
        ],
    };

    return (
        <Router>
            <div className="app">
                {userRole ? (
                    <div className="layout-container">
                        <aside className="sidebar">
                            <div className="sidebar-header">
                                <div className="navbar-title">Mundo Mascotas</div>
                            </div>
                            <div className="accordion-menu">
                                {menuItems[userRole]?.map((section) => (
                                    <div key={section.category} className="accordion-section">
                                        <button
                                            onClick={() => toggleAccordion(section.category)}
                                            className="accordion-button"
                                        >
                                            <span>{section.category}</span>
                                            <span>{openAccordions[section.category] ? '−' : '+'}</span>
                                        </button>
                                        {openAccordions[section.category] && (
                                            <ul className="accordion-content">
                                                {section.items.map((item) => (
                                                    <li key={item.path}>
                                                        <Link
                                                            to={item.path}
                                                            className="accordion-link"
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                                <button
                                    onClick={handleLogout}
                                    className="logout-button"
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        </aside>
                        <main className="main-content">
                            <Routes>
                                {/* Gerente General Routes */}
                                <Route path="/gerente/dashboard" element={userRole === 'GerenteGeneral' ? <Dashboard /> : <Navigate to="/" />} />
                                <Route path="/gerente/staff" element={userRole === 'GerenteGeneral' ? <Staff /> : <Navigate to="/" />} />
                                <Route path="/gerente/manage-users" element={userRole === 'GerenteGeneral' ? <ManageUsers /> : <Navigate to="/" />} />
                                <Route path="/gerente/update-prices" element={userRole === 'GerenteGeneral' ? <UpdatePrices /> : <Navigate to="/" />} />
                                <Route path="/gerente/create-reports" element={userRole === 'GerenteGeneral' ? <CreateReports /> : <Navigate to="/" />} />
                                <Route path="/gerente/view-reports" element={userRole === 'GerenteGeneral' ? <ViewReports /> : <Navigate to="/" />} />
                                <Route path="/gerente/pet-history" element={userRole === 'GerenteGeneral' ? <PetHistory /> : <Navigate to="/" />} />
                                <Route path="/gerente/client-history" element={userRole === 'GerenteGeneral' ? <ClientHistory /> : <Navigate to="/" />} />
                                <Route path="/gerente/view-prices" element={userRole === 'GerenteGeneral' ? <ViewPricesGerente /> : <Navigate to="/" />} />
                                <Route path="/gerente/contact" element={userRole === 'GerenteGeneral' ? <ContactUs /> : <Navigate to="/" />} />
                                {/* Empleado Hotel Routes */}
                                <Route path="/hotel/dashboard" element={userRole === 'EmpleadoHotel' ? <HotelDashboard /> : <Navigate to="/" />} />
                                <Route path="/hotel/manage-hotel-services" element={userRole === 'EmpleadoHotel' ? <ManageHotelServices /> : <Navigate to="/" />} />
                                <Route path="/hotel/manage-clinic-services" element={userRole === 'EmpleadoHotel' ? <ManageClinicServicesHotel /> : <Navigate to="/" />} />
                                <Route path="/hotel/view-prices" element={userRole === 'EmpleadoHotel' ? <ViewPricesHotel /> : <Navigate to="/" />} />
                                {/* Administrador Clínica Routes */}
                                <Route path="/clinica/dashboard" element={userRole === 'AdminClinica' ? <ClinicDashboard /> : <Navigate to="/" />} />
                                <Route path="/clinica/services" element={userRole === 'AdminClinica' ? <ClinicServices /> : <Navigate to="/" />} />
                                <Route path="/clinica/manage-spa-services" element={userRole === 'AdminClinica' ? <ManageSpaServices /> : <Navigate to="/" />} />
                                <Route path="/clinica/view-prices" element={userRole === 'AdminClinica' ? <ViewPricesClinica /> : <Navigate to="/" />} />
                                {/* Auxiliar Spa Routes */}
                                <Route path="/spa/dashboard" element={userRole === 'AuxiliarSpa' ? <SpaDashboard /> : <Navigate to="/" />} />
                                <Route path="/spa/services" element={userRole === 'AuxiliarSpa' ? <SpaServices /> : <Navigate to="/" />} />
                                <Route path="/spa/update-prices" element={userRole === 'AuxiliarSpa' ? <UpdatePricesSpa /> : <Navigate to="/" />} />
                                <Route path="/spa/view-prices" element={userRole === 'AuxiliarSpa' ? <ViewPricesSpa /> : <Navigate to="/" />} />
                                {/* Público en General Routes */}
                                <Route path="/public/view-services" element={userRole === 'Publico' ? <ViewServices /> : <Navigate to="/" />} />
                                <Route path="/public/contact" element={userRole === 'Publico' ? <ContactUs /> : <Navigate to="/" />} />
                                {/* Default Route */}
                                <Route path="/" element={userRole ? <Navigate to={
                                    userRole === 'GerenteGeneral' ? '/gerente/dashboard' :
                                    userRole === 'EmpleadoHotel' ? '/hotel/dashboard' :
                                    userRole === 'AdminClinica' ? '/clinica/dashboard' :
                                    userRole === 'AuxiliarSpa' ? '/spa/dashboard' :
                                    userRole === 'Publico' ? '/public/view-services' : '/'
                                } /> : <LoginForm handleLogin={handleLogin} />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </Routes>
                        </main>
                    </div>
                ) : (
                    <LoginForm handleLogin={handleLogin} />
                )}
            </div>
        </Router>
    );
};

export default App;