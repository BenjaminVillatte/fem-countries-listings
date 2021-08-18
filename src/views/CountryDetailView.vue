<template>
  <div>
    <div class="nav">
      <a 
        @click.prevent="backToList"
        class="btn"
      >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"/>
      </svg>
      Back
      </a>
    </div>
    <CountryDetail v-if="country" :country="country"/>
  </div>
</template>

<script>
import CountryDetail from '@/components/CountryDetail.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    CountryDetail
  },
  data() {
    return {
      country: null
    }
  },
  computed: {
    ...mapGetters(['getByName']),
  },
  methods: {
    backToList() {
      this.$router.push('/')
    },
    getCountry() {
      this.country = this.getByName(this.$route.params.name)
    }
  },
  mounted() {
      this.getCountry()
  },
  updated() {
    this.getCountry()
  }
}
</script>