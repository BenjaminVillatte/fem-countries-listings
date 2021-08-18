import { createRouter, createWebHistory } from 'vue-router'
import CountriesListView from '@/views/CountriesListView.vue'
import CountryDetailView from '@/views/CountryDetailView.vue'

const routes = [
  { path: '/', name: 'countries', component: CountriesListView },
  { path: '/:name', name: 'country', component: CountryDetailView },
]

const router = new createRouter({
  history: createWebHistory('/fem-countries-listings/'),
  routes
})

export default router
