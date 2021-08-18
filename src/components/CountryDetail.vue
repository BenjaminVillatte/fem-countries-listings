<template>
  <div class="detail">
    
    <div class="flag">
      <img :src="country.flag" :alt="'flag '+country.name">
    </div>

    <div>
      
      <h1>{{ country.name }}</h1>

      <section class="infos">

        <div>

          <p>
            <span class="label">NativeName: </span>
            <span>{{ country.nativeName }}</span>
          </p>

          <p>
            <span class="label">Population: </span>
            <span>{{ new Intl.NumberFormat('en-Us').format(country.population) }}</span>
          </p>

          <p>
            <span class="label">Region: </span>
            <span>{{ country.region }}</span>
          </p>

          <p>
            <span class="label">Sub Region: </span>
            <span>{{ country.subregion }}</span>
          </p>

          <p>
            <span class="label">Capital: </span>
            <span>{{ country.capital }}</span>
          </p>
          
        </div>

        <div>

          <p>
            <span class="label">Top Level Domain: </span>
            <span>{{ country.topLevelDomain.join(', ') }}</span>
          </p>

          <p>
            <span class="label">Currencies: </span>
            <span>{{ country.currencies.map(c => c.name).join(', ') }}</span>
          </p>

          <p>
            <span class="label">Languages: </span>
            <span>{{ country.languages.map(l => l.name).join(', ') }}</span>
          </p>

        </div>

      </section>

      <section class="borders" v-if="borders.length">

        <h2>Border Countries:</h2>

          <router-link 
            v-for="b in borders" 
            :key="b"
            :to="{name: 'country', params: { name: b.name }}"
            class="btn"
          >
            {{ b.name }}
          </router-link>

        

      </section>

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['country'],
  data() {
    return {
      borders: null
    }
  },
  watch: {
    country() {
      this.borders = this.getByCodes(this.country.borders)
    }
  },
  computed: {
    ...mapGetters(['getByCodes']),
  },
  created() {
    this.borders = this.getByCodes(this.country.borders)
  }
}
</script>