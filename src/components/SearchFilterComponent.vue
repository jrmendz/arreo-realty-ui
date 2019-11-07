<template>
<!-- Filter form section -->
<div class="filter-search">
  <div class="container">
    <div class="filter-form">
      <input type="text" class="input__city" v-model="name" placeholder="Propery Name">
      <select v-model="selected_city">
        <option value="">City</option>
        <option v-for="(city, index) in cities" v-if="city.city" :value="city.name + ' City'">{{ city.name }} City</option>
      </select>
      <button class="site-btn fs-submit" @click.prevent="search">SEARCH</button>
    </div>
  </div>
</div>
<!-- Filter form section end -->
</template>
<script>
import _ from 'lodash'
import philippines from 'philippines'
import cities from 'philippines/cities'

export default {
  data () {
    return {
      cities: [],
      selected_city: '',
      name: ''
    }
  },
  async mounted () {
    this.cities = _.orderBy(cities, ['name'],['asc'])
  },
  methods: {
    async search () {
      document.documentElement.style.overflow = 'hidden'
      this.$store.state.isLoading = true
      let posts = await this.$store.dispatch('SEARCH_POSTS', {title: this.name, location: this.selected_city})
      this.$store.state.properties = posts.data
    }
  }
}
</script>
<style scoped="scss">
.input__city {
  width: calc(64% - 20px) !important;
}
</style>
