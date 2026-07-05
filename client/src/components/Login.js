import { useState } from "react";
import axios from "axios";

function Login() {
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
        "http://localhost:5000/login",
        loginData
      );

      alert("Welcome " + response.data.user.fullName);
    } catch (error) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={loginData.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;