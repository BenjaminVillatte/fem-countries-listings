import { createStore, createLogger } from 'vuex'
import api from '@/api/CountriesApi'

const PER_PAGE = 10

const store = createStore({
  plugins: [createLogger()],
  state: {
    countries: [],
    filterName: null,
    filterRegion: null,
    darkMode: false,
    page: 1
  },

  getters: {
    getCountries(state) {

      let filtered = state.countries

      if(state.filterRegion) {

        filtered = filtered.filter((c) => {
          return c.region.toLowerCase().indexOf(state.filterRegion.toLowerCase()) === 0
        })

      }

      if (state.filterName) {

        filtered = filtered.filter((c) => {
          return c.name.toLowerCase().indexOf(state.filterName.toLowerCase()) === 0
        })

      }

      const toIndex = Math.min(state.page * PER_PAGE, filtered.length - 1)
      filtered = filtered.slice(0, toIndex)

      return filtered
    }, 
    getByName: (state) => (name) => {
      const index = state.countries.findIndex((c) => c.name.toLowerCase() === name.toLowerCase())
      return state.countries[index]
    },
    getByCodes: (state) => (codes) => {
      return state.countries.filter((c) => {
        return codes.indexOf(c.alpha3Code) >= 0
      })
    },
    isDarkMode: (state) => {
      return state.darkMode
    }
  },

  actions: {
    goNextPage({ commit }) {
      commit('INCREMENT_PAGE')
    },
    loadCountries({ commit }) {
      return api.getAll().then((response) => commit('SET_COUNTRIES', response.data))
    },
    filterOnName({ commit }, text) {
      commit('SET_FILTERNAME', text)
    },
    filterByRegion({ commit }, region) {
      commit('SET_REGIONFILTER', region)
    },
    toggleDarkMode({ commit, state }) {
      commit('SET_DARK_MODE', !state.darkMode)
    },
    setDarkMode({ commit }) {
      let darkMode = JSON.parse(localStorage.getItem('dark_mode'))
      if (null === darkMode) {
        darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      }
      commit('SET_DARK_MODE', darkMode)
    }
  },

  mutations: {
    INCREMENT_PAGE (state) {
      state.page++
    },
    SET_COUNTRIES (state, data) {
      state.countries = data
    },
    SET_FILTERNAME (state, data) {
      state.filterName = data
      state.page = 1
    },
    SET_REGIONFILTER (state, data) {
      state.filterRegion = data
      state.page = 1
    },
    SET_DARK_MODE (state, value) {
      state.darkMode = value
      localStorage.setItem('dark_mode', value)
    }
  }
})

export default store