<template>
  <div class="container">
    <Header />
    <main>
      <router-view v-if="!loading"></router-view>
      <Loader v-else/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Loader from '@/components/Loader.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Header,
    Loader
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions(['loadCountries'])
  },
  created() {
    this.loadCountries().then(() => {
      this.loading = false
    })
    this.$store.dispatch('setDarkMode')
  }
}
</script>
