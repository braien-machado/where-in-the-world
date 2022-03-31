import React, { useState } from 'react';

export default function Home() {
  const [region, setRegion] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  const dropdown = () => {
    const options = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    return (
      <div className="shadow-box dropdown">
        {options.map((option) => (
          <option value={option} onClick={() => setRegion(option)}>{option}</option>
        ))}
      </div>
    );
  };

  const toggleDropdown = () => {
    setIsHidden(!isHidden);
  };

  return (
    <main>
      <label htmlFor="search-input" className="shadow-box" id="search-label">
        <i className="fas fa-search" />
        <input id="search-input" type="text" placeholder="Search for a country..." />
      </label>
      <button type="button" className="shadow-box" onClick={toggleDropdown}>
        {`Filter by Region: ${region}`}
        <i className="fas fa-chevron-circle-down" />
      </button>
      { isHidden ? null : dropdown() }
    </main>
  );
}
