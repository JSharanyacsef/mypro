import Register from "../components/Register";

function RegisterPage() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="auth-card">
        <h2 className="text-center fw-bold">🎓 CampusConnect</h2>
        <p className="text-center text-muted">
          Create your account
        </p>

        <Register />
      </div>
    </div>
  );
}

export default RegisterPage;