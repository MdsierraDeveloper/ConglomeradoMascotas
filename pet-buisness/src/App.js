import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Common/NavBar/NavBar';
// Gerente General
import Dashboard from './Components/GerenciaGeneral/Dashboard/Dashboard.js'; // Asegurarse de que el nombre del archivo y la ruta coincidan
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

const App = () => {
    const [userRole, setUserRole] = useState(null);

    const handleLogin = (role) => {
        setUserRole(role);
    };

    return (
        <Router>
            <div className="app">
                <NavBar userRole={userRole} setUserRole={setUserRole} />
                {userRole ? (
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
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                ) : (
                    <div className="login-page">
                        <h1>Welcome to Mundo Mascotas</h1>
                        <p>Please select your role to log in:</p>
                        <div className="login-buttons">
                            <button onClick={() => handleLogin('GerenteGeneral')}>Gerente General</button>
                            <button onClick={() => handleLogin('EmpleadoHotel')}>Empleado Hotel</button>
                            <button onClick={() => handleLogin('AdminClinica')}>Admin Clínica</button>
                            <button onClick={() => handleLogin('AuxiliarSpa')}>Auxiliar Spa</button>
                            <button onClick={() => handleLogin('Publico')}>Público</button>
                        </div>
                    </div>
                )}
            </div>
        </Router>
    );
};

export default App;