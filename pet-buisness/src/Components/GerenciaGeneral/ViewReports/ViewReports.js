import React, { useState } from 'react';
import './ViewReports.css';
import { services, staff, pqrs } from '../../../data.js';

const ViewReports = () => {
    const [reportType, setReportType] = useState('pqrs');

    return (
        <div className="view-reports">
            <div className="content">
                <h1>View Reports</h1>
                <div className="tabs">
                    <button className={reportType === 'pqrs' ? 'active' : ''} onClick={() => setReportType('pqrs')}>PQRs Quincenales</button>
                    <button className={reportType === 'services' ? 'active' : ''} onClick={() => setReportType('services')}>Servicios Semanales</button>
                    <button className={reportType === 'top-breeds' ? 'active' : ''} onClick={() => setReportType('top-breeds')}>Top Razas</button>
                    <button className={reportType === 'earnings' ? 'active' : ''} onClick={() => setReportType('earnings')}>Ganancias Quincenales</button>
                </div>
                {reportType === 'pqrs' && (
                    <table className="report-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pqrs.map(pqr => (
                                <tr key={pqr.id}>
                                    <td>{pqr.id}</td>
                                    <td>{pqr.name}</td>
                                    <td>{pqr.email}</td>
                                    <td>{pqr.subject}</td>
                                    <td>{pqr.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {reportType === 'services' && <div className="placeholder">Servicios Semanales Report Placeholder</div>}
                {reportType === 'top-breeds' && <div className="placeholder">Top Razas Report Placeholder</div>}
                {reportType === 'earnings' && <div className="placeholder">Ganancias Quincenales Report Placeholder</div>}
            </div>
        </div>
    );
};

export default ViewReports;