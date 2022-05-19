import './css/styles.css';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

// console.log(refs.input);
// fetch(URL)
//   .then(response => {
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pockemon);
//   })
//   .catch(error => {
//     console.log(error);
//   });

refs.input.addEventListener('input', debounce(onSearchCountries, DEBOUNCE_DELAY));

function onSearchCountries(e) {
  const countrySearch = e.target.value.trim();
  if (!countrySearch) {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    return;
  }
  // onSearchCountry(countrySearch);
  console.dir(countrySearch);
}
const URL = `https://restcountries.com/v3.1/name/{name}`;
// function onSearchCountry
