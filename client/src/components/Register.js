import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  PersonFill,
  EnvelopeFill,
  LockFill,
  MortarboardFill,
  CalendarFill,
  BookFill,
  EyeFill,
  EyeSlashFill
} from "react-bootstrap-icons";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    rollNumber: "",
    year: "",
    branch: "",
    interests: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    console.log("REGISTER CLICKED");

    try {
      const userData = {
        ...formData,
        interests: formData.interests
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      };

      const response = await axios.post(
        "https://mypro-qvbq.onrender.com/register",
        userData
      );

      alert(response.data.message);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        rollNumber: "",
        year: "",
        branch: "",
        interests: ""
      });

    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <div className="mb-3">
        <label className="form-label fw-semibold">
          <PersonFill className="me-2" />
          Full Name
        </label>
        <input type="text" name="fullName" className="form-control"
          value={formData.fullName} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">
          <EnvelopeFill className="me-2" />
          Email
        </label>
        <input type="email" name="email" className="form-control"
          value={formData.email} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">
          <LockFill className="me-2" />
          Password
        </label>

        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="form-control"
            value={formData.password}
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

      <div className="mb-3">
        <input type="text" name="rollNumber" className="form-control"
          placeholder="Roll Number"
          value={formData.rollNumber} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <input type="text" name="year" className="form-control"
          placeholder="Year"
          value={formData.year} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <input type="text" name="branch" className="form-control"
          placeholder="Branch"
          value={formData.branch} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <input type="text" name="interests" className="form-control"
          placeholder="AI, Web Dev"
          value={formData.interests} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn-primary w-100 fw-bold mb-3">
        Create Account
      </button>

      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login" className="fw-bold">
          Login
        </Link>
      </p>

    </form>
  );
}

export default Register;