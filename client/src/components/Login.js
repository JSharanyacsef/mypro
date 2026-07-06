import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  EnvelopeFill,
  LockFill,
  EyeFill,
  EyeSlashFill
} from "react-bootstrap-icons";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://mypro-qvbq.onrender.com/login",
        loginData
      );

      // Store user in session
      sessionStorage.setItem(
        "loggedInUser",
        JSON.stringify(response.data.user)
      );

      alert("Welcome " + response.data.user.fullName);

      navigate("/dashboard");

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid Email or Password");
    }
  };

  return (
    <div>

      <div className="mb-3">
        <label className="form-label fw-semibold">
          <EnvelopeFill className="me-2" />
          Email
        </label>

        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter your email"
          value={loginData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="form-label fw-semibold">
          <LockFill className="me-2" />
          Password
        </label>

        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
          />

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeSlashFill /> : <EyeFill />}
          </button>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary w-100 fw-bold mb-3"
        onClick={handleLogin}
      >
        Login
      </button>

      <p className="text-center mb-0">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-decoration-none fw-bold"
        >
          Create Account
        </Link>
      </p>

    </div>
  );
}

export default Login;