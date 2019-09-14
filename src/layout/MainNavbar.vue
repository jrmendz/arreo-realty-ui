<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Arreo Realty
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/"
        >
          <i class="now-ui-icons shopping_shop"></i>
          <p>Home</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/about"
        >
          <i class="now-ui-icons business_chart-pie-36"></i>
          <p>About Us</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/contact"
        >
          <i class="now-ui-icons ui-2_chat-round"></i>
          <p>Contact Us</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/login"
        >
          <i class="now-ui-icons users_circle-08"></i>
          <p>Login</p>
        </a>
      </li>
      <!-- <drop-down
        tag="li"
        title="About Us"
        icon="now-ui-icons business_chart-pie-36"
        class="nav-item"
      >
        <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> About Us
        </nav-link>
        <a
          href="https://demos.creative-tim.com/vue-now-ui-kit/documentation"
          target="_blank"
          class="dropdown-item"
        >
          <i class="now-ui-icons design_bullet-list-67"></i> Documentation
        </a>
      </drop-down> -->
      <!-- <drop-down
              tag="li"
              title="Examples"
              icon="now-ui-icons design_image"
              class="nav-item"
      >
        <nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Landing
        </nav-link>
        <nav-link to="/login">
          <i class="now-ui-icons users_circle-08"></i> Login
        </nav-link>
        <nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Profile
        </nav-link>
      </drop-down> -->

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Email us on sales@arreorealty.com"
          data-placement="bottom"
          href="mailto:sales@arreorealty.com"
          target="_blank"
        >
          <i class="fab fa-google"></i>
          <p class="d-lg-none d-xl-none">Mail</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/arreorealtyexchangeinc"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Add us on LinkedIN"
          data-placement="bottom"
          href="https://ph.linkedin.com/in/arreo-realty-52bbbb184"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
          <p class="d-lg-none d-xl-none">Linkedin</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
