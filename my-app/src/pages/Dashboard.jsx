import { useEffect, useState } from "react";

function Dashboard() {
  const [stats, setStats] = useState({
    patients: 0,
    rendezvous: 0,
    messages: 0
  });

  useEffect(() => {
    fetch("http://localhost/dentist-backoffice/api/dashboard.php")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="h3 mb-5 text-center text-gray-800">Dashboard</h1>

      <div className="row justify-content-center">

        {/* Patients Card */}
        <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <div className="card border-left-primary shadow-sm dashboard-card" style={{ maxWidth: "260px", width: "100%" }}>
            <div className="card-body py-3 d-flex justify-content-between align-items-center">
              <div>
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Patients</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.patients}</div>
              </div>
              <i className="fas fa-user-injured fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>

        {/* RendezVous Card */}
        <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <div className="card border-left-success shadow-sm dashboard-card" style={{ maxWidth: "260px", width: "100%" }}>
            <div className="card-body py-3 d-flex justify-content-between align-items-center">
              <div>
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">RendezVous</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.rendezvous}</div>
              </div>
              <i className="fas fa-calendar-check fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>

        {/* Messages Card */}
        <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <div className="card border-left-warning shadow-sm dashboard-card" style={{ maxWidth: "260px", width: "100%" }}>
            <div className="card-body py-3 d-flex justify-content-between align-items-center">
              <div>
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Messages</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{stats.messages}</div>
              </div>
              <i className="fas fa-envelope fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
