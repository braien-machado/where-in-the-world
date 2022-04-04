const axios = require('axios');

async function getAllCountries() {
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
    console.log(error);
    return [];
  }
}

export default getAllCountries;
