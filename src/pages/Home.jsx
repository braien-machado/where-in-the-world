import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../services/countriesApi';
import CountryCard from '../components/CountryCard';

export default function Home() {
  const [regionFilter, setRegionFilter] = useState('All');
  const [nameFilter, setNameFilter] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const countriesFromApi = await getAllCountries();
    setCountries(countriesFromApi);
  }, []);

  const filterCountriesByParam = (array, filterParam, filterValue, exception) => {
    if (filterValue === exception) return array;

    const filteredCountries = array
      .filter((country) => country[filterParam].toLowerCase().includes(filterValue.toLowerCase()));
    return filteredCountries;
  };

  const countriesFiltered = () => {
    const countriesByRegion = filterCountriesByParam(countries, 'region', regionFilter, 'All');
    const countriesByName = filterCountriesByParam(countriesByRegion, 'name', nameFilter, '');

    return countriesByName;
  };

  const toggleDropdown = () => {
    setIsHidden(!isHidden);
  };

  const dropdown = () => {
    const options = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    return (
      <div className="shadow-box box dropdown">
        {options.map((option) => (
          <option
            key={option}
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
      <div className="filters-container">
        <label htmlFor="search-input" className="shadow-box box" id="search-label">
          <i className="fas fa-search" />
          <input id="search-input" type="text" placeholder="Search for a country..." onChange={({ target: { value } }) => setNameFilter(value)} />
        </label>
        <div className="dropdown-container">
          <button type="button" className="shadow-box box dropdown-button" onClick={toggleDropdown}>
            {`Filter by Region: ${regionFilter}`}
            <i className={`fas fa-chevron-${isHidden ? 'down' : 'up'}`} />
          </button>
          { isHidden ? null : dropdown() }
        </div>
      </div>
      <div className="cards-container">
        { countries[0] ? countriesFiltered().map((country) => (
          <CountryCard key={country.name} country={country} />
        )) : null }
      </div>
    </main>
  );
}
