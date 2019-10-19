<template>
  <div class="test">
    <div class="intro">
      <div class="info">
        <h1>A news site that works for you</h1>
        <div class="info-section">
          <p class="info-para">
            evNews is the freeway to get all your latest news about programming all in one place
            .We are providing you with personalized web development news based
            on your interest.
          </p>
          <div class="icons">
            <span>
              <img src="https://img.icons8.com/bubbles/200/000000/news.png" />
            </span>
            <span>
              <img src="https://img.icons8.com/clouds/100/000000/speed.png" />
            </span>
            <p>
              <span>
                <img src="https://img.icons8.com/clouds/100/000000/touchscreen-smartphone.png" />
              </span>
              <span>
                <img src="https://img.icons8.com/clouds/100/000000/tablet-tap.png" />
              </span>
              <span>
                <img src="https://img.icons8.com/clouds/100/000000/laptop.png" />
              </span>
            </p>
          </div>
        </div>
        <div>
          <router-link to="/signup" class="btn-info">Get started</router-link>
          <router-link to="/signin" class="btn-info">Sign in</router-link>
        </div>
      </div>
    </div>
    <div class="section2">
      <h2>
        Devnews provide news that you actually need and does not overload you with unecessary
        information
      </h2>
      <p>We let you decide what news you want to see by prodiving topic choices</p>
      <router-link to="/signup" class="btn">Try it out today</router-link>
    </div>

    <div class="section3">
      <h3>Personalized</h3>
      <p>
        <span>
          <img src="https://img.icons8.com/clouds/100/000000/good-quality.png" />
        </span> Pick what you are interested and get it presented in a beautiful way
      </p>
      <h3>Stay on top of information</h3>
      <p>
        <span>
          <img src="https://img.icons8.com/clouds/100/000000/synchronize.png" />
        </span> get deliverd important and late news from popular tech source
      </p>
      <h3>Customize</h3>
      <p>
        <span>
          <img src="https://img.icons8.com/clouds/100/000000/maintenance.png" />
        </span> Tailor your interest by choosing from numerous topics
      </p>
    </div>
    <div class="section4">
      <h2>
        Devnews provide news that you actually need and does not overload you with unecessary
        information
      </h2>
      <p>We provide late news on topics such as JavaScript, PHP, Ruby, Python, Swift, and more.</p>
      <a href="/discover" class="btn">Discover more</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Intro",
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script scoped>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:700,900");

.icons {
  margin-left: 220px;
}
.btn {
  display: inline-block;
  padding: 0.8em 1.4em;
  text-decoration: none;
  text-align: center;
  color: #7bed9f;
  cursor: pointer;
  border: solid 2px #7bed9f;
  border-radius: 40px;
  font-size: 1.1em;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
}
.btn-info {
  display: inline-block;
  padding: 1em 2em;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  user-select: none;
  color: white;
  background: #7bed9f;
  margin-top: 30px;
  margin-right: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-family: "Poppins", sans-serif;
  font-weight: 900;
}

.section2 {
  /* list-style-type:none; 
  margin-top: 250px;
  margin-bottom: 50px;*/
}

@media only screen and (min-width: 320px) and (max-width: 479px) {
  .intro {
    display: block;
    margin-top: 100px;
  }
  p {
    font-size: 1.3em;
  }

  .intro h1 {
    font-size: 1.4em;
  }
  /* icons div*/
  .icons {
    margin: 0px;
    display: block;
  }
  .section2 {
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .section2 h2,
  .section3 h2,
  .section4 h2 {
    font-size: 1.3em;
  }
  .section3,
  .section4 {
    margin-top: 100px;
  }
  .section3 {
    margin-bottom: 120px;
  }
}

@media only screen and (min-width: 480px) and (max-width: 768px) {
  .intro {
    display: block;
    margin-top: 100px;
  }
  p {
    font-size: 1.3em;
  }

  .intro h1 {
    font-size: 1.4em;
  }
  /* icons div*/
  .icons {
    margin: 0px;
    display: block;
  }
  .section2 {
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .section2 h2,
  .section3 h2,
  .section4 h2 {
    font-size: 1.3em;
  }
  .section3,
  .section4 {
    margin-top: 100px;
  }
  .section3 {
    margin-bottom: 120px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 991px) {
  .intro {
    display: block;
    margin-top: 100px;
  }
  p {
    font-size: 1.3em;
  }

  .intro h1 {
    font-size: 1.4em;
  }
  /* icons div*/
  .icons {
    margin: 0px;
    display: block;
  }
  .section2 {
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .section2 h2,
  .section3 h2,
  .section4 h2 {
    font-size: 1.3em;
  }
  .section3,
  .section4 {
    margin-top: 100px;
  }
  .section3 {
    margin-bottom: 120px;
  }
}

@media only screen and (min-width: 992px) {
  .intro {
    display: block;
    margin-top: 100px;
  }
  p {
    font-size: 1.3em;
  }

  .intro h1 {
    font-size: 1.4em;
  }
  /* icons div*/
  .icons {
    margin: 0px;
    display: block;
  }
  .section2 {
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .section2 h2,
  .section3 h2,
  .section4 h2 {
    font-size: 1.3em;
  }
  .section3,
  .section4 {
    margin-top: 100px;
  }
  .section3 {
    margin-bottom: 120px;
  }
  .info-section {
    display: flex;
  }
  .info-para {
    flex: 1;
  }
}
</style>
