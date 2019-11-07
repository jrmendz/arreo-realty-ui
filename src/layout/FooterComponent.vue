<template>
<!-- Footer section -->
<footer class="footer-section set-bg" v-bind:style="{ 'background-image': 'url(img/footer-bg.jpg)' }" data-setbg="img/footer-bg.jpg">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 footer-widget">
        <!-- <img src="img/logo.png" alt=""> -->
        <p>LET ARREO REALTY KNOW WHAT MATTER MOST TO YOU IN A HOME OR OFFICE AND WE’LL FIND YOU WITH PROPERTIES THAT MEET YOUR DEMANDS</p>
        <div class="social">
          <a href="https://www.facebook.com/arreorealtyexchangeinc/" target="_blank"><i class="fa fa-facebook"></i></a>
          <!-- <a href=""><i class="fa fa-twitter" target="_blank"></i></a> -->
          <a href="https://instagram.com/arreorealty" target="_blank"><i class="fa fa-instagram"></i></a>
          <a href="https://ph.linkedin.com/in/arreo-realty-exchange-inc-32ab01189" target="_blank"><i class="fa fa-linkedin"></i></a>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 footer-widget">
        <div class="contact-widget">
          <h5 class="fw-title">CONTACT US</h5>
          <p><i class="fa fa-map-marker"></i>{{ site_info.address }} </p>
          <p><i class="fa fa-phone"></i>{{ site_info.phone }}</p>
          <p><i class="fa fa-envelope"></i>{{ site_info.email }}</p>
          <p><i class="fa fa-clock-o"></i>{{ site_info.schedule }}</p>
        </div>
      </div>
      <!-- <div class="col-lg-3 col-md-6 footer-widget">
        <div class="double-menu-widget">
          <h5 class="fw-title">POPULAR PLACES</h5>
          <ul>
            <li><a href="">Florida</a></li>
            <li><a href="">New York</a></li>
            <li><a href="">Washington</a></li>
            <li><a href="">Los Angeles</a></li>
            <li><a href="">Chicago</a></li>
          </ul>
          <ul>
            <li><a href="">St Louis</a></li>
            <li><a href="">Jacksonville</a></li>
            <li><a href="">San Jose</a></li>
            <li><a href="">San Diego</a></li>
            <li><a href="">Houston</a></li>
          </ul>
        </div>
      </div> -->
      <div class="col-lg-4 col-md-6  footer-widget">
        <div class="newslatter-widget">
          <h5 class="fw-title">NEWSLETTER</h5>
          <p>Subscribe your email to get the latest news and new offer also discount</p>
          <form class="footer-newslatter-form">
            <input type="text" placeholder="Email address">
            <button><i class="fa fa-send"></i></button>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <!-- <div class="footer-nav">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Featured Listing</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Pages</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div> -->
      <div class="copyright">
        <p>&copy; {{ year }}, JRPM.</p>
      </div>
    </div>
  </div>
</footer>
<!-- Footer section end -->
</template>

<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      site_info: {},
      year: new Date().getFullYear()
    }
  },
  created() {
    this.site_info = this.$store.state.site_info
  }
}
</script>
