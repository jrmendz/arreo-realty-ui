<template>
  <div>
    <section class="hero-section set-bg" v-bind:style="{ 'background-image': 'url(img/bg.jpg)' }" data-setbg="img/bg.jpg">
      <div class="container hero-text text-white">
        <h2>Arreo Realty Exchange Inc.</h2>
        <p>LET ARREO REALTY KNOW WHAT MATTER MOST TO YOU IN A HOME OR OFFICE <br /> AND WE’LL FIND YOU WITH PROPERTIES THAT MEET YOUR DEMANDS</p>
        <router-link to="/service" class="site-btn">VIEW DETAIL</router-link>
      </div>
    </section>
    <SearchFilterComponent></SearchFilterComponent>
    <PropertyComponent :posts="properties"></PropertyComponent>
  </div>
</template>

<script>
import SearchFilterComponent from '@/components/SearchFilterComponent'
import PropertyComponent from '@/components/PropertyComponent'
export default {
  data () {
    return {
    }
  },
  components: {
    SearchFilterComponent,
    PropertyComponent
  },
  async mounted () {
    let posts = await this.$store.dispatch('GET_ACTIVE_POST')
    this.$store.state.properties = posts.data
  },
  computed: {
    properties () {
      return this.$store.state.properties
    }
  }
}
</script>

<style>
</style>
