<template>
<div>
  <!-- Page top section -->
  <section class="page-top-section set-bg" v-bind:style="{ 'background-image': 'url(img/page-top-bg.jpg)' }" data-setbg="img/page-top-bg.jpg">
    <div class="container text-white">
      <h2>Our Services</h2>
    </div>
  </section>
  <!--  Page top end -->

  <!-- Breadcrumb -->
  <div class="site-breadcrumb">
    <div class="container">
      <router-link to="/"><i class="fa fa-home"></i>Home</router-link>
      <span><i class="fa fa-angle-right"></i>Our Services</span>
    </div>
  </div>

  <!-- page -->
  <section class="page-section">
    <div class="container">
      <img class="mb-5" src="img/about.jpg" alt="">
      <div class="row about-text" style="text-align: justify;">
        <div class="col-xl-6 about-text-left">
          <h5>Products and Services</h5>
          <p>Below is a complete portfolio of real estate and design/construction services we offer</p>
          <ul class="about-list">
            <li><i class="fa fa-check-circle-o"></i>Sale, Lease, Rent of commercial, office and residential property (office spaces, lots, commercial lots, house and lot, beach lot)</li>
            <li><i class="fa fa-check-circle-o"></i>Resale Management</li>
            <li><i class="fa fa-check-circle-o"></i>Property Consultancy</li>
            <li><i class="fa fa-check-circle-o"></i>Real Estate Investment Opportunity Advice.</li>
          </ul>
        </div>
        <div class="col-xl-6 about-text-right">
          <h5>The Start of our Journey</h5>
          <p>Roger Ursos,  a licensed Real Estate broker also a proud recipient of Megaworld’s Top Broker of the Year Award for 2 consecutive years,
            has established Arreo Realty Exchange, Inc. in March 2019 to offer an advanced and innovative approach to real estate.
            Roger stands by his professionalism and level of service. What sets this company apart from the competition is it fueled with a young professional
            outlook and brings a fresh, vibrant and enthusiastic approach to the property market.
            We aim to be the Philippines leading real estate providers with service excellence being noticed in every aspect of our business.</p>
          <!-- <ul class="about-list">
            <li><i class="fa fa-check-circle-o"></i>Lorem ipsum dolor sitdoni amet, consectetur dont adipis elite vivamus interdum.</li>
            <li><i class="fa fa-check-circle-o"></i>Integer pulvinar ante nulla, ac fermentum ex congue id vestibulum ensectetur. </li>
            <li><i class="fa fa-check-circle-o"></i>Proin blandit nibh in quam semper iaculis lorem ipsum dolor salama ender.</li>
            <li><i class="fa fa-check-circle-o"></i>Mauris at dolor imperdiet, aliquet nisi non, vulputate est sit amet.</li>
          </ul> -->
        </div>
      </div>
    </div>
  </section>
  <!-- page end -->
  <section class="page-section">
    <div class="container">
      <div class="section-title text-center">
        <h3>WE ARE ACCREDITED</h3>
        <p>We are accredited with the top real estate developers  that are changing the landscape of the country.
          Explore their different projects and development and learn what they have to offer through our company. </p>
        <br>
        <div class="clients-section">
      		<div class="container">
            <carousel
              :autoplay="true"
              :loop="true"
              :autoplayHoverPause="true"
              :autoHeight="true"
              :stagePadding="2"
              :responsive="{0:{items:1,nav:false},600:{items:5,nav:false}}"
              :center="true"
              :dots="false"
              :margin="10">
              <img src="img/partner/1.png" alt="">
      				<img src="img/partner/2.png" alt="">
      				<img src="img/partner/3.png" alt="">
      				<img src="img/partner/4.png" alt="">
      				<img src="img/partner/5.png" alt="">
      				<img src="img/partner/6.png" alt="">
      				<img src="img/partner/7.png" alt="">
      				<img src="img/partner/8.png" alt="">
      				<img src="img/partner/9.png" alt="">
      				<img src="img/partner/10.png" alt="">
            </carousel>
      		</div>
          <br>
          <p><i>We can be your entry point for all your business and investment related needs in the Philippines.</i></p>
      	</div>
      </div>
    </div>
  </section>
  <section class="page-section">
    <div class="container">
      <div class="row about-text" style="text-align: justify;">
        <div class="col-xl-6 about-text-left">
          <h5>Our Content-Rich Marketing Tools</h5>
          <p>When we were starting, we’re already knee-deep in the process.
            But we’ve used a little inspiration from companies with the most humble beginnings and
            the greatest successes, those who started with nothing but now has changed the world.</p>
          <p>We’ve learned how to market, lease and sell property and we use new progressive platforms and methods,
            particularly in within the ever-expanding digital era of marketing and all that it has to offer.</p>
          <img class="mb-5" src="img/marketing-solutions.png" alt="">
          <p>For our highly engaged audience, we’ve created content to populate these channels.
            We say Social Media is the new telephone. Content Marketing is the new brochure.</p>
        </div>
        <div class="col-xl-6 about-text-right">
          <h5>The Rise of Real Estate Industry in the Philippines</h5>
          <p>Our corner of the world and the people in it have so many good things to offer and it is all right at our doorstep.
            Arreo Realty Exchange Inc. is very committed to promoting the country’s Real Estate Industry.  </p>
          <img class="mb-5" src="img/rising-realstate.png" alt="">
          <h5>Why trust Arreo Realty with your Real Estate needs?</h5>
          <p>We have dedicated teams of industry professionals.  Our goal is to strengthen our market presence
            by providing our clients superb customer experience.  To make your Arreo experience convenient we are
            always happy when we can extend the privileges of our services to our clients.
            Our Sales staff will collaborate with you 24 hours a day Monday thru Fridays.
</p>
          <!-- <ul class="about-list">
            <li><i class="fa fa-check-circle-o"></i>Lorem ipsum dolor sitdoni amet, consectetur dont adipis elite vivamus interdum.</li>
            <li><i class="fa fa-check-circle-o"></i>Integer pulvinar ante nulla, ac fermentum ex congue id vestibulum ensectetur. </li>
            <li><i class="fa fa-check-circle-o"></i>Proin blandit nibh in quam semper iaculis lorem ipsum dolor salama ender.</li>
            <li><i class="fa fa-check-circle-o"></i>Mauris at dolor imperdiet, aliquet nisi non, vulputate est sit amet.</li>
          </ul> -->
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
  data() {
    return {}
  },
  components: {
    carousel
  }
}
</script>

<style>
</style>
