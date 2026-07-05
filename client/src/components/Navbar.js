import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/dashboard"
        >
          🎓 CampusConnect
        </Link>

        <div>

          <button className="btn btn-light">
            Profile
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;