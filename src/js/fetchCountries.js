const fieldsOfCountry = `?fields=name,capital,population,flags,languages`;

export function onSearchCountry(country) {
  const URL = `https://restcountries.com/v3.1/name/${country}${fieldsOfCountry}`;
  return fetch(URL)
    .then(response => {
      return response.json();
    })
    .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'));
}
