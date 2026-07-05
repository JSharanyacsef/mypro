import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2 className="fw-bold">
          Welcome 👋
        </h2>

        <p className="text-muted">
          Find students with similar interests and collaborate.
        </p>

        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card shadow border-0 rounded-4">
              <div className="card-body text-center">
                <h1>👨‍🎓</h1>
                <h3>0</h3>
                <p>Total Students</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 rounded-4">
              <div className="card-body text-center">
                <h1>🤝</h1>
                <h3>0</h3>
                <p>Common Matches</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 rounded-4">
              <div className="card-body text-center">
                <h1>❤️</h1>
                <h3>0</h3>
                <p>Connections</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;