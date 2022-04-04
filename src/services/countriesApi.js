const axios = require('axios');

export async function getAllCountries() {
  try {
    const response = await axios.get('https://restcountries.com/v2/all')
      .then(({ data }) => {
        const countries = data.map((country) => {
          const {
            name, population, region, capital, flag,
          } = country;

          return {
            name, population, region, capital, flag,
          };
        });

        return countries;
      });
    return response;
  } catch (error) {
    return [];
  }
}

export async function getCountryByName(countryName) {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(({ data }) => {
        const [{
          borders,
          capital,
          currencies,
          flags: { svg: flag },
          languages,
          name,
          population,
          region,
          subregion,
          tld,
        }] = data;
        return {
          borders,
          capital,
          currencies,
          flag,
          languages,
          name,
          population,
          region,
          subregion,
          tld,
        };
      });
    return response;
  } catch (error) {
    return [];
  }
}

export async function getBorderCountriesName(array) {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${array.join(',')}`)
      .then(({ data }) => {
        const countries = data.map((country) => {
          const {
            name: { common },
          } = country;

          return common;
        });

        return countries;
      });
    return response;
  } catch (error) {
    return [];
  }
}
