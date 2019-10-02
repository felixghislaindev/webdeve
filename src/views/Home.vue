<template>
  <div class="home">
    <Intro msg="Welcome to Your Vue.js App" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Intro,
    Footer
  }
};
</script>
