<template>

  <header>

    <div class="wrapper">

      <p class="tagline">Where in the world?</p>

      <ThemeSwitcher @change="onChange" />

    </div>

  </header>

</template>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

export default {
  components: {
    ThemeSwitcher
  },
  methods: {
    onChange() {
      this.$store.dispatch('toggleDarkMode')
    }
  }
}
</script>
