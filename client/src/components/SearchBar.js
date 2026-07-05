function SearchBar({ search, setSearch }) {
  return (
    <div className="mt-4 mb-4">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="🔍 Search by Name, Email, Roll Number or Branch"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;