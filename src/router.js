import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/HomePage.vue';
import About from './pages/AboutPage.vue';
import Contact from './pages/ContactPage.vue';
import Service from './pages/ServicePage.vue';
import HeaderComponent from './layout/HeaderComponent.vue';
import FooterComponent from './layout/FooterComponent.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: Home, header: HeaderComponent, footer: FooterComponent},
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/about',
      name: 'about',
      components: { default: About, header: HeaderComponent, footer: FooterComponent},
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: { default: Contact, header: HeaderComponent, footer: FooterComponent},
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/service',
      name: 'service',
      components: { default: Service, header: HeaderComponent, footer: FooterComponent},
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ]
});
