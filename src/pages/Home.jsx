import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../services/countriesApi';
import CountryCard from '../components/CountryCard';

export default function Home() {
  const [regionFilter, setRegionFilter] = useState('All');
  const [isHidden, setIsHidden] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const countriesFromApi = await getAllCountries();
    setCountries(countriesFromApi);
  }, []);

  const toggleDropdown = () => {
    setIsHidden(!isHidden);
  };

  const dropdown = () => {
    const options = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    return (
      <div className="shadow-box box dropdown">
        {options.map((option) => (
          <option
            key={option}
            value={option}
            onClick={() => {
              setRegionFilter(option);
              toggleDropdown();
            }}
          >
            {option}
          </option>
        ))}
      </div>
    );
  };

  return (
    <main>
      <label htmlFor="search-input" className="shadow-box box" id="search-label">
        <i className="fas fa-search" />
        <input id="search-input" type="text" placeholder="Search for a country..." />
      </label>
      <div className="dropdown-container">
        <button type="button" className="shadow-box box dropdown-button" onClick={toggleDropdown}>
          {`Filter by Region: ${regionFilter}`}
          <i className="fas fa-chevron-circle-down" />
        </button>
        { isHidden ? null : dropdown() }
      </div>
      { countries[0] ? countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      )) : null }
    </main>
  );
}
