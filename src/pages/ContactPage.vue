<template>
<div>
  <!-- Page top section -->
  <section class="page-top-section set-bg" v-bind:style="{ 'background-image': 'url(img/page-top-bg.jpg)' }" data-setbg="img/page-top-bg.jpg">
    <div class="container text-white">
      <h2>Contact Us</h2>
    </div>
  </section>
  <!--  Page top end -->

  <!-- Breadcrumb -->
  <div class="site-breadcrumb">
    <div class="container">
      <a href=""><i class="fa fa-home"></i>Home</a>
      <span><i class="fa fa-angle-right"></i>Contact Us</span>
    </div>
  </div>

  <!-- page -->
  <section class="page-section blog-page">
    <div class="container">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Arreo%20Realty&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </div>
      <div class="contact-info-warp">
        <p><i class="fa fa-map-marker"></i>{{ site_info.address }}</p>
        <p><i class="fa fa-envelope"></i>{{ site_info.email }}</p>
        <p><i class="fa fa-phone"></i>{{ site_info.phone }}</p>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <img src="img/contact.jpg" alt="">
        </div>
        <div class="col-lg-6">
          <div class="contact-right">
            <div class="section-title">
              <h3>Get in touch</h3>
              <p>Please take a moment to review our listings, our products and services.
                We hope that your journey to know more things about our company is just beginning.
                Call us for free consultancy at </p>
            </div>
            <form class="contact-form">
              <div class="row">
                <div class="col-md-6">
                  <input type="text" placeholder="Your name">
                </div>
                <div class="col-md-6">
                  <input type="text" placeholder="Your email">
                </div>
                <div class="col-md-12">
                  <textarea placeholder="Your message"></textarea>
                  <button class="site-btn">SUBMIT NOW</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- page end -->
</div>
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
