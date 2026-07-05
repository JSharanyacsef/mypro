import { useState } from "react";
import axios from "axios";
function App() {
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
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h1>Student Collaboration Platform</h1>
      <h2>Register</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="rollNumber"
        placeholder="Roll Number"
        value={formData.rollNumber}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="year"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="branch"
        placeholder="Branch"
        value={formData.branch}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="interests"
        placeholder="Interests (comma separated)"
        value={formData.interests}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;