import { useEffect, useState } from "react";

function StatsCards({ students }) {

  const [connections, setConnections] = useState(0);

  useEffect(() => {

    const loggedInUser = JSON.parse(
      sessionStorage.getItem("loggedInUser")
    );

    setConnections(
      loggedInUser?.connections?.length || 0
    );

  }, [students]);

  const totalInterests = students.reduce(
    (total, student) => total + student.interests.length,
    0
  );

  return (
    <div className="row mt-4">

      <div className="col-md-4 mb-3">
        <div className="card shadow border-0 rounded-4">
          <div className="card-body text-center">
            <h1>👨‍🎓</h1>
            <h3>{students.length}</h3>
            <p>Total Students</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="card shadow border-0 rounded-4">
          <div className="card-body text-center">
            <h1>❤️</h1>
            <h3>{totalInterests}</h3>
            <p>Total Interests</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="card shadow border-0 rounded-4">
          <div className="card-body text-center">
            <h1>🤝</h1>
            <h3>{connections}</h3>
            <p>Connections</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default StatsCards;