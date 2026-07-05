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

  const handleSubmit = async () => {
    try {
      const userData = {
        ...formData,
        interests: formData.interests
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== "")
      };

      const response = await axios.post(
        "http://localhost:5000/register",
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
      alert("Registration Failed");
      console.log(error);
    }
  };

  return (
    <div>

      <div className="mb-3">
        <label className="form-label fw-semibold">
          <PersonFill className="me-2" />
          Full Name
        </label>

        <input
          type="text"
          name="fullName"
          className="form-control"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

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
          value={formData.email}
          onChange={handleChange}
        />
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
            placeholder="Enter password"
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
        <label className="form-label fw-semibold">
          <MortarboardFill className="me-2" />
          Roll Number
        </label>

        <input
          type="text"
          name="rollNumber"
          className="form-control"
          placeholder="Enter Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
        />
      </div>
            <div className="mb-3">
        <label className="form-label fw-semibold">
          <CalendarFill className="me-2" />
          Year
        </label>

        <input
          type="text"
          name="year"
          className="form-control"
          placeholder="Example: 2nd Year"
          value={formData.year}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">
          <BookFill className="me-2" />
          Branch
        </label>

        <input
          type="text"
          name="branch"
          className="form-control"
          placeholder="Example: CSE"
          value={formData.branch}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="form-label fw-semibold">
          ❤️ Interests
        </label>

        <input
          type="text"
          name="interests"
          className="form-control"
          placeholder="AI, Web Development, ML"
          value={formData.interests}
          onChange={handleChange}
        />
      </div>

      <button
        className="btn btn-primary w-100 fw-bold mb-3"
        onClick={handleSubmit}
      >
        Create Account
      </button>

      <p className="text-center mb-0">
        Already have an account?{" "}
        <Link
          to="/"
          className="text-decoration-none fw-bold"
        >
          Login
        </Link>
      </p>

    </div>
  );
}

export default Register;