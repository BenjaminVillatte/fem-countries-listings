<template>
  <div class="theme-switcher">
    <label class="switch">
      <input type="checkbox" 
        value="1" 
        v-model="checked" 
        @change="onChange" />
      <span class="slider"></span>
    </label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      checked: false
    }
  },
  computed: {
    ...mapGetters(['isDarkMode'])
  },
  watch: {
    isDarkMode(val) {
      this.checked = val

      this.updateBodyClass()
        
    }
  },
  emits: ['change'],
  methods: {
    onChange() {
      this.$emit('change', this.checked)
    },
    updateBodyClass() {
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
      }
    }
  },
  created() {
    this.checked = this.isDarkMode
    this.updateBodyClass()
  }
}
</script>

<style lang="scss" scoped>
.theme-switcher {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 1.5em;
  width: 3.5em;

  .switch {
    position: relative;
    display: inline-block;
    width: 4em;
    min-width: 4em;
    height: 2em;
    margin: 0 0.4em;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      display: inline-block;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eeeeee;
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 34px;
    }
    .slider:hover {
      background: #eeeeee;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 2em;
      width: 2em;
      left: 0;
      bottom: 0;
      background: #ffffff;
      background: url('/images/light_mode_black_24dp.svg'), #ffffff;
      background-position: center;
      background-size: 60%;
      background-repeat: no-repeat;
      -webkit-transition: .5s;
      transition: background .5s, transform .3s;
      border-radius: 50%;
      box-shadow: 0 0 2px hsl(0, 0%, 11%);
    }
    input:checked + .slider {
      background: #eeeeee;
    }
    input:focus + .slider {
      box-shadow: 0 0 1px #eeeeee;
    }
    input:checked + .slider:before {
      -webkit-transform: translateX(calc(4em - 2em));
      -ms-transform: translateX(calc(4em - 2em));
      transform: translateX(calc(4em - 2em));
      background: url('/images/dark_mode_white_24dp.svg'), #202C36;
      background-position: center;
      background-size: 60%;
      background-repeat: no-repeat;
      box-shadow: none;
    }
  }
  .text {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    opacity: .6;
    transition: opacity ease-in-out .2s;
    &.off {
      margin-right: 1.5em;
    }
    &.on {
      margin-left: 1.5em;
    }
    &.current {
      opacity: 1;
    }
  }
}
</style>