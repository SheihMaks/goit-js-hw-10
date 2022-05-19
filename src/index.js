import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

console.log(refs.input);
fetch(URL)
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pockemon);
  })
  .catch(error => {
    console.log(error);
  });

refs.input.addEventListener('input', onSearchCountries);
