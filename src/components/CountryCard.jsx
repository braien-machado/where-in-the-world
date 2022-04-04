import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CountryCard({ country }) {
  const {
    name, population, region, capital, flag,
  } = country;

  return (
    <Link to={`/detail/${name.toLowerCase()}`} className="shadow-box box card">
      <img src={flag} alt={`${name}'s flag`} />
      <div className="card-info">
        <h2>{name}</h2>
        <p>
          <span>Population:</span>
          {Number(population).toLocaleString()}
        </p>
        <p>
          <span>Region:</span>
          {region}
        </p>
        <p>
          <span>Capital:</span>
          {capital}
        </p>
      </div>
    </Link>
  );
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.number,
    flag: PropTypes.string,
    capital: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
};
