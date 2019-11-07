<template>
<!-- Header section -->
<header class="header-section">
  <div class="header-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 header-top-left">
          <div class="top-info">
            <i class="fa fa-phone"></i>
            {{ site_info.phone }}
          </div>
          <div class="top-info">
            <i class="fa fa-envelope"></i>
            {{ site_info.email }}
          </div>
        </div>
        <div class="col-lg-6 text-lg-right header-top-right">
          <div class="top-social">
            <a href="https://www.facebook.com/arreorealtyexchangeinc/" target="_blank"><i class="fa fa-facebook"></i></a>
            <!-- <a href=""><i class="fa fa-twitter" target="_blank"></i></a> -->
            <a href="https://instagram.com/arreorealty" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="https://ph.linkedin.com/in/arreo-realty-exchange-inc-32ab01189" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
          <!-- <div class="user-panel">
            <a href=""><i class="fa fa-user-circle-o"></i> Register</a>
            <a href=""><i class="fa fa-sign-in"></i> Login</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="site-navbar">
          <router-link to="/" class="site-logo"><img src="img/logo.png" width="50%" alt=""></router-link>
          <div class="nav-switch">
            <i class="fa fa-bars"></i>
          </div>
          <ul class="main-menu">
            <li>
              <router-link to="/">HOME</router-link>
            </li>
            <li>
              <router-link to="/about">ABOUT US</router-link>
            </li>
            <li>
              <router-link to="/contact">CONTACT US</router-link>
            </li>
            <li>
              <router-link to="/service">OUR SERVICES</router-link>
            </li>
            <!-- <li>
              <router-link to="/career">CAREERS</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>
<!-- Header section end -->
</template>

<script>
export default {
  data() {
    return {
      site_info: {}
    }
  },
  created() {
    this.site_info = this.$store.state.site_info
  }
}
</script>

<style>
</style>
