import React from 'react';
const Search = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container mt-4 d-flex justify-content-center">
      <input
        type="text"
        placeholder="Enter User Name Here..."
        value={searchTerm}
        onChange={handleChange}
        className="form-control"
        style={{
          width: '50%', 
          maxWidth: '500px',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default Search;