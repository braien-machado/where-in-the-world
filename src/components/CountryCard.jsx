import React from 'react';
import PropTypes from 'prop-types';

export default function CountryCard({ country }) {
  const {
    name, population, region, capital, flag,
  } = country;

  return (
    <div className="shadow-box box">
      <img src={flag} alt={`${name}'s flag`} />
      <h2>{name}</h2>
      <p>{`Population: ${Number(population).toLocaleString()}`}</p>
      <p>{`Region: ${region}`}</p>
      <p>{`Capital: ${capital}`}</p>
    </div>
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
