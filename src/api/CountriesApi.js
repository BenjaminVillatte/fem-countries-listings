import axios from 'axios'

export default {

  getAll() {
    return axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;flag;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders')
  },

}