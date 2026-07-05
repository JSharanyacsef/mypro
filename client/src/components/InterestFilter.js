function InterestFilter({ students, setFilteredStudents }) {
  const filterStudents = (interest) => {
    if (interest === "All") {
      setFilteredStudents(students);
      return;
    }

    const filtered = students.filter((student) =>
      student.interests.includes(interest)
    );

    setFilteredStudents(filtered);
  };

  return (
    <div className="mb-4">

      <button
        className="btn btn-primary me-2 mb-2"
        onClick={() => filterStudents("All")}
      >
        All
      </button>

      <button
        className="btn btn-outline-primary me-2 mb-2"
        onClick={() => filterStudents("React")}
      >
        React
      </button>

      <button
        className="btn btn-outline-primary me-2 mb-2"
        onClick={() => filterStudents("AI")}
      >
        AI
      </button>

      <button
        className="btn btn-outline-primary me-2 mb-2"
        onClick={() => filterStudents("ML")}
      >
        ML
      </button>

      <button
        className="btn btn-outline-primary me-2 mb-2"
        onClick={() => filterStudents("Java")}
      >
        Java
      </button>

      <button
        className="btn btn-outline-primary me-2 mb-2"
        onClick={() => filterStudents("Python")}
      >
        Python
      </button>

    </div>
  );
}

export default InterestFilter;