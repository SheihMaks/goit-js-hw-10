const fieldsOfCountry = `?fields=name,capital,population,flags,languages`;

export function fetchCountries(country) {
  const URL = `https://restcountries.com/v3.1/name/${country}${fieldsOfCountry}`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      return;
    }
    return response.json();
  });
}
