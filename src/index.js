import './css/styles.css';
import Notiflix from 'notiflix';
import { onSearchCountry } from './js/fetchCountries';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onSearchCountries, DEBOUNCE_DELAY));

function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function onSearchCountries(e) {
  clearMarkup();
  const country = e.target.value.trim();
  if (!country) {
    clearMarkup();
    return;
  }
  onSearchCountry(country)
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
      } else if (data.length <= 10 && data.length > 1) {
        console.log();
        refs.countryInfo.textContent = ')))';
      }
    })
    .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'));
}
