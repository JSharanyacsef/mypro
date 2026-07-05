import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    navigate("/");

  };

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

          <Link
            to="/profile"
            className="btn btn-light me-2"
          >
            👤 Profile
          </Link>

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;