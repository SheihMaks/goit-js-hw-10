import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import markupCountriesList from './templates/markupCountriesList.hbs';
import markupCountryCard from './templates/markupCountryCard.hbs';
import { fetchCountries } from './js/fetchCountries';
const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

function onSearchCountries(e) {
  clearMarkup();
  const country = e.target.value.trim();
  if (!country) {
    clearMarkup();
    return;
  }
  fetchCountries(country)
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
      } else if (data.length > 1 && data.length <= 10) {
        refs.countryList.insertAdjacentHTML('afterbegin', markupCountriesList(data));
      } else {
        refs.countryInfo.insertAdjacentHTML('afterbegin', markupCountryCard(data));
      }
    })
    .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'));
}

function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

refs.input.addEventListener('input', debounce(onSearchCountries, DEBOUNCE_DELAY));
