import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Profile() {

  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedInUser"))
  );

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  const saveProfile = async () => {

    try {

      const updatedUser = {
        ...user,
        interests:
          typeof user.interests === "string"
            ? user.interests
                .split(",")
                .map(item => item.trim())
            : user.interests
      };

      const response = await axios.put(
        `http://localhost:5000/users/${user.id}`,
        updatedUser
      );

      sessionStorage.setItem(
        "loggedInUser",
        JSON.stringify(response.data.user)
      );

      setUser(response.data.user);

      alert("✅ Profile Updated Successfully");

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }

  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card shadow border-0 rounded-4">

          <div className="card-body">

            <div className="text-center mb-4">

              <div
                className="mx-auto mb-3"
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: "#0d6efd",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "32px",
                  fontWeight: "bold"
                }}
              >
                {user.fullName
                  .split(" ")
                  .map(name => name[0])
                  .join("")
                  .toUpperCase()}
              </div>

              <h3>{user.fullName}</h3>

              <p className="text-muted">{user.email}</p>

            </div>

            <div className="mb-3">

              <label className="form-label">
                Full Name
              </label>

              <input
                className="form-control"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Roll Number
              </label>

              <input
                className="form-control"
                value={user.rollNumber}
                disabled
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Year
              </label>

              <input
                className="form-control"
                name="year"
                value={user.year}
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Branch
              </label>

              <input
                className="form-control"
                name="branch"
                value={user.branch}
                onChange={handleChange}
              />

            </div>

            <div className="mb-4">

              <label className="form-label">
                Interests
              </label>

              <input
                className="form-control"
                name="interests"
                value={
                  Array.isArray(user.interests)
                    ? user.interests.join(", ")
                    : user.interests
                }
                onChange={handleChange}
              />

            </div>

            <button
              className="btn btn-success w-100"
              onClick={saveProfile}
            >
              Save Changes
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;