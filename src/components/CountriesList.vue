<template>
  <div class="list">

    <div class="card" v-for="country in countries" :key="country.alpha3Code">
      
      <router-link :to="'/'+country.name">
        
        <div class="card-header">
          <img :src="country.flag" :alt="'flag '+country.name">
        </div>
        
        <div class="card-body">
          <h2>{{ country.name }}</h2>

          <p class="infos">
            <span class="label">Population: </span>
            <span>{{ new Intl.NumberFormat('en-Us').format(country.population) }}</span>
          </p>

          <p class="infos">
            <span class="label">Region: </span>
            <span>{{ country.region }}</span>
          </p>

          <p class="infos">
            <span class="label">Capital: </span>
            <span>{{ country.capital }}</span>
          </p>
        </div>

      </router-link>

    </div>

  </div>
</template>

<script>
export default {
  props: ['countries'],
  methods: {
    onScroll(evt) {
      const {
        scrollTop,
        clientHeight,
        scrollHeight
      } = document.documentElement

      if (scrollTop + clientHeight >= scrollHeight) {
        this.$store.dispatch('goNextPage')
      }
    },
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll)
  },
  unmounted() {
    document.removeEventListener('scroll', this.onScroll)
  }
}
</script>
