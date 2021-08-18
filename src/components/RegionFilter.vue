<template>
  <div class="filter">
    <div class="select">
      <div class="selected" @click="open = !open">
        {{ regionLabel }}
      </div>
      <ul class="choices" v-if="open">
        <li v-for="r in regions" :key="r" @click="select(r)">{{ r }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      regions: ["", "Africa", "Americas", "Asia", "Europe", "Oceania"],
      region: null,
      open: false
    }
  },
  computed: {
    ...mapState(['filterRegion']),
    regionLabel() {
      return this.region !== '' && this.region  ? this.region : 'Filter by Region'
    }
  },
  methods: {
    select(name) {
      this.region = name
      this.open = false
      this.$store.dispatch('filterByRegion', this.region)
    },
  },
  mounted() {
    this.region = this.filterRegion
  }
}
</script>
