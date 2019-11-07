<template>
<div>
  <!-- Page top section -->
  <section class="page-top-section set-bg" v-bind:style="{ 'background-image': 'url(img/page-top-bg.jpg)' }" data-setbg="img/page-top-bg.jpg">
    <div class="container text-white">
      <h2>About us</h2>
    </div>
  </section>
  <!--  Page top end -->

  <!-- Breadcrumb -->
  <div class="site-breadcrumb">
    <div class="container">
      <router-link to="/"><i class="fa fa-home"></i>Home</router-link>
      <span><i class="fa fa-angle-right"></i>About us</span>
    </div>
  </div>

  <!-- page -->
  <section class="page-section">
    <div class="container">
      <img class="mb-5" src="img/about.jpg" alt="">
      <div class="row about-text" style="text-align: justify;">
        <div class="col-xl-6 about-text-left">
          <h5>WHO WE ARE</h5>
          <p>Arreo Realty Exchange, Inc. is dedicated to providing clients and property seekers with superior real estate service.
            Supplying a full and comprehensive service from property listing through to the exchange of ownership,
            we will guide and advise both the seller and purchaser through the process. </p>
          <p>Arreo Realty Exchange, Inc.  signifies an energetic and contemporary future in property services.
            We like to think different and be different, but we combine that with our traditional and familiar practices of providing no nonsense,
            down to earth expert advice and service. </p>
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

    <!-- Review section -->
    <section class="review-section set-bg" data-setbg="img/review-bg.jpg">
      <div class="container">
        <div class="review-slider owl-carousel">
          <div class="review-item text-white">
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <p>“Leramiz was quick to understand my needs and steer me in the right direction. Their professionalism and warmth made the process of finding a suitable home a lot less stressful than it could have been. Thanks, agent Tony Holland.”</p>
            <h5>Stacy Mc Neeley</h5>
            <span>CEP’s Director</span>
            <div class="clint-pic set-bg" data-setbg="img/review/1.jpg"></div>
          </div>
          <div class="review-item text-white">
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <p>“Leramiz was quick to understand my needs and steer me in the right direction. Their professionalism and warmth made the process of finding a suitable home a lot less stressful than it could have been. Thanks, agent Tony Holland.”</p>
            <h5>Stacy Mc Neeley</h5>
            <span>CEP’s Director</span>
            <div class="clint-pic set-bg" data-setbg="img/review/1.jpg"></div>
          </div>
          <div class="review-item text-white">
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <p>“Leramiz was quick to understand my needs and steer me in the right direction. Their professionalism and warmth made the process of finding a suitable home a lot less stressful than it could have been. Thanks, agent Tony Holland.”</p>
            <h5>Stacy Mc Neeley</h5>
            <span>CEP’s Director</span>
            <div class="clint-pic set-bg" data-setbg="img/review/1.jpg"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Review section end-->


    <!-- Team section -->
    <section class="team-section spad pb-0">
      <div class="container">
        <div class="section-title text-center">
          <h3>OUR TEAM</h3>
          <p>Our directory of people who can help you</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="team-member">
              <div class="member-pic">
                <img src="img/team/roger.jpg" alt="#">
                <div class="member-social">
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-instagram"></i></a>
                  <a href=""><i class="fa fa-twitter"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h5>Roger Piquero Ursos</h5>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-6">
            <h5>Roger Piquero Ursos</h5>
            <span>Chief Executive Officer</span>
            <br>
            <p>Roger Ursos is the CEO and the main force in putting up Arreo Realty Exchange, Inc.
              He’s a high-touch broker known for his extensive market knowledge and his unmatched devotion to clients.
              His success is based almost exclusively on positive referrals. He earns the respect of his clients by working
              tirelessly on their behalf and by always offering them candid advice.</p>
            <p>After he passed the Real Estate Broker Licensing Exam in 2016 from the prestigious Urban Institute of Real Estate,
               Asian Institute of Management, he immediately began raking in clients, awards, and recognition.</p>
            <p>He now carries with him impressive sales statistics.  He’s Megaworld’s top broker for the year 2017 and 2018.</p>
            <p>Prior to becoming a real estate broker,  Roger was an Accounting Supervisor for a UK Telecommunications, Localphone Ltd whose branch office was located at Bonifacio Global City.</p>
            <p>Roger is also the President of Arreo Contractors, Inc.</p>
          </div>
          <hr>
          <div class="col-lg-3 col-md-6">
            <div class="team-member">
              <div class="member-pic">
                <img src="img/team/jinsun.jpg" alt="#">
                <div class="member-social">
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-instagram"></i></a>
                  <a href=""><i class="fa fa-twitter"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h5>Jinsun Piquero Ursos</h5>
                <span>Senior Project Manager</span>
                <!-- <div class="member-contact">
                  <p><i class="fa fa-phone"></i>(567) 666 121 2243</p>
                  <p><i class="fa fa-envelope"></i>sashagordon@gmail.com</p>
                </div> -->
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Jinsun Piquero Ursos</h5>
            <span>Senior Project Manager</span>
            <br>
            <p>Jinsun is the Senior Project engineer of Arreo Realty.</p>
            <p>Arreo Realty witnesses Jinsun’s great transformation, from a newly graduate Civil Engineer to a full-pledge project manager.
              Every real estate project involves multiple vendors, landlords, brokers, architects, engineers, general contractors –
              all with priorities revolving around the bottom lines, portfolios and convenience.
              He is well versed in the many regulatory requirements associated with corporate real estate management projects.</p>
          </div>
          <hr>
          <div class="col-lg-3 col-md-6">
            <div class="team-member">
              <div class="member-pic">
                <img src="img/team/regine.jpg" alt="#">
                <div class="member-social">
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-instagram"></i></a>
                  <a href=""><i class="fa fa-twitter"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h5>Regine Maynagcot</h5>
                <span>Sales & Marketing</span>
                <!-- <div class="member-contact">
                  <p><i class="fa fa-phone"></i>(567) 666 121 2255</p>
                  <p><i class="fa fa-envelope"></i>nickybutt79@gmail.com</p>
                </div> -->
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Regine Maynagcot</h5>
            <span>Sales & Marketing</span>
            <br>
            <p>She is most familiar with being the supply chain of Arreo realty.
              She holds a position of unique importance to the company.
              Her unmatched ability to find the most suitable property or spaces for clients based on client’s requirements,
              time and budget constraints by providing assistance from site inspections to contract negotiations earned her stripes
              for assuming greater responsibility at Arreo. She stays informed about marketing trends and  monitoring industry
              changes that helps the company maintain its competitiveness. As keeper of the brand, she attends client presentations
              and helps prepare request for proposals and quotations, used to pitch new business.</p>
            <p>She graduated from a prestigious university at Surigao City with a Bachelor of Science in Computer Science.  </p>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="team-member">
              <div class="member-pic">
                <img src="img/team/gella.jpg" alt="#">
                <div class="member-social">
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-instagram"></i></a>
                  <a href=""><i class="fa fa-twitter"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h5>Gella Piquero Ursos</h5>
                <span>Admin & Accounting Manager</span>
                <!-- <div class="member-contact">
                  <p><i class="fa fa-phone"></i>(567) 666 121 2288</p>
                  <p><i class="fa fa-envelope"></i>ginawesley@gmail.com</p>
                </div> -->
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Gella Piquero Ursos</h5>
            <span>Admin & Accounting Manager</span>
            <br>
            <p>Jella prepares financial records and reports for a variety of administrative and sales transactions for Arreo Realty.
              She is responsible for handling the administrative elements of the company, oversee and make changes to expense budgets as needed. </p>
            <p>Jella’s dedication and pro active attitude  ensure  the daily office operations are performed in a seamless and efficient manner. </p>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="team-member">
              <div class="member-pic">
                <img src="img/team/ruth.jpg" alt="#">
                <div class="member-social">
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-instagram"></i></a>
                  <a href=""><i class="fa fa-twitter"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h5>Ruth Hashel Medina</h5>
                <span>Business Development Manager</span>
                <!-- <div class="member-contact">
                  <p><i class="fa fa-phone"></i>(567) 666 121 2288</p>
                  <p><i class="fa fa-envelope"></i>ginawesley@gmail.com</p>
                </div> -->
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Ruth Hashel Medina</h5>
            <span>Business Development Manager</span>
            <br>
            <p>Ruth oversees all communications, public relations and promotional activities that support the brand and marketing strategy of Arreo Realty.
              Her outgoing personality with the knack for motivating others to meet goals in sales environment helps the
              CEO in building his team and develop and maintain fruitful relationships with their clients by pitching products
              and services through social media content marketing.  She is the dedicated market research executive that delivers insights and
              strategic advice on the latest real estate and economic developments. </p>
            <p>Most recently,  she works for foreign telecommunications company as their site head. </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Team section end-->
  </section>
  <!-- page end -->
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {
  }
}
</script>

<style>
  .member-pic {
    height: 50%;
  }
</style>
