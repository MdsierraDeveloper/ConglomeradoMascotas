import React, { useState } from 'react';
import './CreateReports.css';

const CreateReports = () => {
    const [reportType, setReportType] = useState('pqrs');

    const handleGenerateReport = () => {
        alert(`Generating report: ${reportType}`);
    };

    return (
        <div className="create-reports">
            <div className="content">
                <h1>Create Reports</h1>
                <div className="form-container">
                    <h2>Select Report Type</h2>
                    <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
                        <option value="pqrs">PQRs Quincenales</option>
                        <option value="services">Servicios Semanales</option>
                        <option value="top-breeds">Top Razas</option>
                        <option value="earnings">Ganancias Quincenales</option>
                    </select>
                    <button onClick={handleGenerateReport}>Generate Report</button>
                </div>
            </div>
        </div>
    );
};

export default CreateReports;