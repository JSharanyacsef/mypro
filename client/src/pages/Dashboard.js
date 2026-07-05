import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import StatsCards from "../components/StatsCards";
import StudentCard from "../components/StudentCard";
import InterestFilter from "../components/InterestFilter";

import "../styles/Dashboard.css";

function Dashboard() {

  const loggedInUser = JSON.parse(
    sessionStorage.getItem("loggedInUser")
  );

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/users"
      );

      const otherStudents = response.data.filter(
        student => student.id !== loggedInUser.id
      );

      setStudents(otherStudents);
      setFilteredStudents(otherStudents);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    const result = students.filter(student =>

      student.fullName.toLowerCase().includes(search.toLowerCase()) ||

      student.email.toLowerCase().includes(search.toLowerCase()) ||

      student.rollNumber.toLowerCase().includes(search.toLowerCase()) ||

      student.branch.toLowerCase().includes(search.toLowerCase())

    );

    setFilteredStudents(result);

  }, [search, students]);

  // ⭐ Find Best Study Buddy
  const bestBuddy = students.reduce((best, student) => {

    const common = student.interests.filter(interest =>
      loggedInUser.interests.includes(interest)
    ).length;

    if (!best || common > best.common) {
      return {
        ...student,
        common
      };
    }

    return best;

  }, null);

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2 className="fw-bold">
          Welcome, {loggedInUser.fullName} 👋
        </h2>

        <p className="text-muted">
          Find students with similar interests and collaborate.
        </p>

        <StatsCards students={students} />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <InterestFilter
          students={students}
          setFilteredStudents={setFilteredStudents}
        />

        {bestBuddy && (

          <div className="card shadow border-0 rounded-4 mb-4">

            <div className="card-body">

              <h3 className="text-warning">
                ⭐ Best Study Buddy
              </h3>

              <h4>{bestBuddy.fullName}</h4>

              <p>
                {bestBuddy.branch} • {bestBuddy.year}
              </p>

              <p className="fw-bold text-success">
                {bestBuddy.common} Common Interests
              </p>

              <div>

                {bestBuddy.interests.map((interest, index) => (

                  <span
                    key={index}
                    className="badge bg-success me-2 mb-2"
                  >
                    {interest}
                  </span>

                ))}

              </div>

            </div>

          </div>

        )}

        <div className="row mt-4">

          {filteredStudents.length > 0 ? (

            filteredStudents.map(student => (

              <StudentCard
                key={student.id}
                student={student}
                currentUser={loggedInUser}
              />

            ))

          ) : (

            <div className="text-center mt-5">
              <h4>No Students Found 😔</h4>
            </div>

          )}

        </div>

      </div>

    </>
  );
}

export default Dashboard;