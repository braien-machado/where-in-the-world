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
    <button className="shadow-box box back-btn" type="button" onClick={() => navigate('/')}>
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
      <div className="country-container">
        <img src={flag} alt={name.common} />
        <div className="info-container">
          <h1>{name.common}</h1>
          <div className="details-container">
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
          </div>
          { !borders.length ? null : (
            <div className="border-info">
              <h2>Border Countries:</h2>
              <div>
                {borders.map((border) => (
                  <a className="shadow-box box" key={border} href={`/detail/${border.toLowerCase()}`}>{border}</a>
                ))}
              </div>
            </div>
          ) }
        </div>
      </div>
    </div>
  );
}
