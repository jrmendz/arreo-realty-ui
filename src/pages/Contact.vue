<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Contact our great company.</h1>
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
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to reach out with us?</h2>
        <p class="description">We are located at Arreo Realty Exchange Inc. <br>
                              Unit B, 2/F C&T Building, Lot 4-1-6 National Road, Tunasan, Muntinlupa City, 1773
                            </p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.9065503646016!2d121.0458021145653!3d14.374818586424212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1dfb5ab5411%3A0xe60f09f4c8b7b984!2sArreo%20Realty!5e0!3m2!1sen!2sph!4v1568482312459!5m2!1sen!2sph" width="530" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            <br>
            <p>
              Phone number: 09176173375 / 09392584711
            </p>
            <fg-input
              class="input-lg"
              placeholder="Name..."
              v-model="form.name"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Contact..."
              v-model="form.contact"
              addon-left-icon="now-ui-icons tech_mobile"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Subject..."
              v-model="form.subject"
              addon-left-icon="now-ui-icons business_briefcase-24"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Send Message</n-button
              >
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
  name: 'contact',
  bodyClass: 'contact-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        name: '',
        contact: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  }
};
</script>
<style></style>
