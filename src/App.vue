<template>
  <div>
    <loading :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="true">
    </loading>
    <router-view name="header" />
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data () {
    return {

    }
  },
  components: {
    Loading
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  watch: {
    isLoading (val) {
      if (val === true) {
        setTimeout(() => {
          document.documentElement.style.overflow = 'auto'
          this.$store.state.isLoading = false
        }, 2000)
      }
    }
  },
  mounted () {
    this.$store.state.isLoading = true
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
