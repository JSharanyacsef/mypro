import Login from "../components/Login";

function LoginPage() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="auth-card">
        <h2 className="text-center fw-bold">🎓 CampusConnect</h2>
        <p className="text-center text-muted">
          Welcome Back
        </p>

        <Login />
      </div>
    </div>
  );
}

export default LoginPage;