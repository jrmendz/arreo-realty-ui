<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg_about.png')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">This is our great company.</h1>
          <!-- <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div> -->
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h5 class="description">
              Arreo Realty Exchange, Inc. is dedicated to providing clients and property seekers with superior real estate service.  Supplying a full and comprehensive service from property listing through to the exchange of ownership, we will guide and advise both the seller and purchaser through the process.
              <br>
              <br>
              Arreo Realty Exchange, Inc.  signifies an energetic and contemporary future in property services.  We like to think different and be different, but we combine that with our traditional and familiar practices of providing no nonsense, down to earth expert advice and <service class=""></service>
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/login.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  Our office is located at Unit B, 2/F,
                  C & T Building, Lot 4-1-6
                  National Road, Tunasan,
                  Muntinlupa City 1773
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/bg3.jpg')"
              ></div>
              <br>
              <h3>Our Core Values</h3>
              <p>
                We are guided by our core values that develop and define our culture, our brand, our business strategies and who we are as professionals.
                <ul>
                  <li>Innovate</li>
                  <li>Embrace accountability</li>
                  <li>Focus on Solutions</li>
                  <li>Build relationships </li>
                  <li>Have fun</li>
                  <li>Be great and never settle</li>
                </ul>
              </p>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/bg_startjourney.png')"
              ></div>
              <h3>
                The Start of our Journey
              </h3>
              <p>
                Roger Ursos,  a licensed Real Estate broker also a proud recipient
                of Megaworld’s Top Broker of the Year Award for 2 consecutive years
                (2017 & 2018), has established Arreo Realty Exchange, Inc. in March
                2019 to offer an advanced and innovative approach to real estate.
                Roger stands by his professionalism and level of service.  What sets
                this company apart from the competition is it fueled with a young
                professional outlook and brings a fresh, vibrant and enthusiastic approach
                to the property market.  We aim to be the Philippines leading real estate
                providers with service excellence being noticed in every aspect of our business.
              </p>
              <h3>Mission</h3>
              <p>
                Arreo Realty Exchange Inc. mission is to provide an outstanding level of
                service and expertise in the real estate market in an innovative and ambitious ways.
                We strive to be the agents our clients deserve as we believe our clients deserve
                the very best.
              </p>
              <h3>Vision</h3>
              <p>
                To achieve the highest possible standards of the real estate market while establishing
                our company as the premier and preferred real estate company in Manila and surrounding
                areas by providing excellent and consistent customer experience 100% of the time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style></style>
