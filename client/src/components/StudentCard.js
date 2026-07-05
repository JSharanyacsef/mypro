import { useState } from "react";
import axios from "axios";
import "../styles/Card.css";

function StudentCard({ student, currentUser }) {

  const [connected, setConnected] = useState(

    currentUser.connections.includes(student.id)

  );

  const avatar = student.fullName
    .split(" ")
    .map(name => name[0])
    .join("")
    .toUpperCase();

 const connectStudent = async () => {

  try {

    await axios.put(
      "http://localhost:5000/connect",
      {
        currentUserId: currentUser.id,
        targetUserId: student.id
      }
    );

    const updatedUser = {
      ...currentUser,
      connections: [...currentUser.connections, student.id]
    };

    sessionStorage.setItem(
      "loggedInUser",
      JSON.stringify(updatedUser)
    );

    setConnected(true);

  } catch (error) {

    console.log(error);

    alert("Unable to Connect");

  }

};
  return (

    <div className="col-lg-4 col-md-6 mb-4">

      <div className="card student-card shadow border-0 h-100">

        <div className="card-body text-center">

          <div className="avatar mx-auto mb-3">
            {avatar}
          </div>

          <h4>{student.fullName}</h4>

          <p className="text-muted">
            {student.rollNumber}
          </p>

          <p>

            <strong>{student.branch}</strong> • {student.year}

          </p>

          <p>{student.email}</p>

          <div className="mb-3">

            {student.interests.map((interest, index) => (

              <span
                key={index}
                className="badge bg-primary me-2 mb-2"
              >
                {interest}
              </span>

            ))}

          </div>

          <p className="text-success fw-bold">

            🔥 {student.interests.length} Interests

          </p>

          <button

            disabled={connected}

            className={
              connected
                ? "btn btn-secondary w-100"
                : "btn btn-success w-100"
            }

            onClick={connectStudent}

          >

            {connected ? "Connected ✔" : "Connect"}

          </button>

        </div>

      </div>

    </div>

  );

}

export default StudentCard;