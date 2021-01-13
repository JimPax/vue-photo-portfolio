<template>
  <div class="home">
    <Header/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

import $ from 'jquery'
export default {
  name: 'Home',
  components: {
    Header,
    About,
    Portfolio,
    Contact,
    Footer
  },
  created() {
      $(window).on('scroll', function () {
          var top = $(window).scrollTop() + $(window).height(),
              isVisible = top > $('.about__selfie').offset().top;
          $('.about__heading, .about__selfie, .about__text, .about__design-line').toggleClass('animate', isVisible);

          var isVisible2 = top > $('.portfolio__heading').offset().top;
          $('.portfolio__heading, .portfolio__albums').toggleClass('animate', isVisible2);

          if ($('.portfolio__heading').hasClass('animate')) {
            $(window).off('scroll');
          }
      });
    }
}
</script>
