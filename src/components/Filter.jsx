import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Filter = ({ handleFilterChange }) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilter(""); // Reset the filter input on page refresh
  }, []);

  const handleChange = (event) => {
    setFilter(event.target.value);
    handleFilterChange(event.target.value);
  };

  return (
    <div>
      <p>Filter contacts by name:</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
