import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBorderCountriesName, getCountryByName } from '../services/countriesApi';

export default function Detail() {
  const [countryInfo, setCountryInfo] = useState({});
  const { country } = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    const response = await getCountryByName(country);
    response.borders = await getBorderCountriesName(response.borders);

    setCountryInfo(response);
  }, []);

  const backButton = () => (
    <button type="button" onClick={() => navigate('/')}>
      <i className="fas fa-long-arrow-alt-left" />
      Back
    </button>
  );

  if (!Object.keys(countryInfo).length) return backButton();

  const {
    flag, population, region, subregion, capital, tld, languages, currencies, borders, name,
  } = countryInfo;

  return (
    <div>
      {backButton()}
      <div className="country-info">
        <img src={flag} alt={name.common} />
        <h1>{name.common}</h1>
        <div className="main-details">
          <p>
            <span>Native Name(s): </span>
            {Object.values(name.nativeName).map((nativeName) => nativeName.common).join(', ')}
          </p>
          <p>
            <span>Population: </span>
            {Number(population).toLocaleString()}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Sub Region: </span>
            {subregion}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </div>
        <div className="secondary-details">
          <p>
            <span>Top Level Domain: </span>
            {tld}
          </p>
          <p>
            <span>Currencies: </span>
            {Object.values(currencies).map((currency) => currency.name).join(', ')}
          </p>
          <p>
            <span>Languages: </span>
            {Object.values(languages).join(', ')}
          </p>
        </div>
        { !borders.length ? null : (
          <div className="border-info">
            <h1>Border Countries:</h1>
            {borders.join(', ')}
          </div>
        ) }
      </div>
    </div>
  );
}
