<template>
  <div class="about">
    <h1>Devnews Our Story And What Are We solving</h1>
    <div style="width:75%">
      <p>
        As developers programming languages are our day to day to day tools and with them we can build all those awesome creations that we have on the web and most importantly make the life of the web user simpler.
        with this in mind being able to know what is happening around those languages are crucial we need to stay alert and up to date, this being said there are multiple news sources that provide users with news but one thing we were able to notice is that the most of the time give news about every topic in web development.
      </p>
      <p>
        This is sometimes time-consuming as we need to dig through what is given to us to find what we need or interested in. This where Devnews come in, Devnews is a platform which provides its users will the latest news about web development from top reliable news and blog source, but most importantly we give the chosen
        topic from topics that you are interested so that the information that you receive is tailored to you need.
      </p>
    </div>
    <h2 style="margin-top:75px">How Are Making It Possible</h2>
    <div style="width:75%">
      <p>we are gathering the latest news from web development from Event Registry, Event Registry is the world’s leading media intelligence platform, empowering companies to analyze current and past news content.</p>
      <p>Event Registry analyze news published by over 30,000 news, blogs, and PR sources. Filter the content by keywords, entities, sources, categories, locations, and sentiment.</p>
      <p>Use semantic search to find people, locations, organizations, and things from raw news content in 35 languages</p>
      <p>Use pre-build AI models to obtain topics and events of your interest with information about what happened, where, when, and who was involved.</p>
      <p>With Event Registry and some engineering on our end, we are able to collect your topic preferences and return to you the latest and personalized information so that you can stay up to date on your interest.</p>
    </div>
    <h3
      style="margin-top:55px;"
    >Sign up to receive information about web development tailored to you!</h3>
    <router-link to="/signup" class="btn">Try it out today</router-link>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>
<style lang="css" scoped>
p {
  line-height: 2.1;
}
.btn {
  display: inline-block;
  padding: 0.8em 1.4em;
  text-decoration: none;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  border: solid 2px #7bed9f;
  border-radius: 5px;
  font-size: 1.1em;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
}
</style>