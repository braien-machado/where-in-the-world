import React from 'react';

export default function Home() {
  return (
    <main>
      <label htmlFor="search-input" className="shadow-box" id="search-label">
        <i className="fas fa-search" />
        <input id="search-input" type="text" placeholder="Search for a country..." />
      </label>
      <label htmlFor="select-region" className="shadow-box">
        Filter by Region:
        <select name="region" id="select-region">
          <option value="" selected>All</option>
          <option value="Afria">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
    </main>
  );
}
